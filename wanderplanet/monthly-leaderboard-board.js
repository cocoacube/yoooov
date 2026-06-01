(function () {
  window.__monthlyLeaderboardBoard = { loaded: true, applied: false };
  document.documentElement.setAttribute("data-monthly-leaderboard-board", "loaded");
  const gd = typeof gdjs !== "undefined" ? gdjs : window.gdjs;
  if (!gd || !gd.evtTools || !gd.evtTools.leaderboards) return;

  const leaderboardTools = gd.evtTools.leaderboards;
  const originalSavePlayerScore = leaderboardTools.savePlayerScore;
  const originalSaveConnectedPlayerScore = leaderboardTools.saveConnectedPlayerScore;
  const pendingScoreSaves = {};

  let boardElement = null;
  let isLoaded = false;
  let isLoading = false;
  let hasErrored = false;
  let hasJustClosed = false;

  gd.registerRuntimeScenePostEventsCallback(function () {
    hasJustClosed = false;
  });

  leaderboardTools.savePlayerScore = function (runtimeScene, leaderboardId, score, playerName) {
    const task = originalSavePlayerScore.call(this, runtimeScene, leaderboardId, score, playerName);
    if (task && task.promise) pendingScoreSaves[leaderboardId] = task.promise;
    return task;
  };

  leaderboardTools.saveConnectedPlayerScore = function (runtimeScene, leaderboardId, score) {
    const task = originalSaveConnectedPlayerScore.call(this, runtimeScene, leaderboardId, score);
    if (task && task.promise) pendingScoreSaves[leaderboardId] = task.promise;
    return task;
  };

  function getGameContainer(runtimeScene) {
    return runtimeScene.getGame().getRenderer().getDomElementContainer();
  }

  function formatScore(score) {
    return Number.isInteger(score) ? String(score) : Number(score).toFixed(2).replace(/\.?0+$/, "");
  }

  function isEntryFromThisMonth(entry) {
    const createdAt = new Date(entry.createdAt || entry.relatedEntryCreatedAt);
    if (Number.isNaN(createdAt.getTime())) return false;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return createdAt >= monthStart && createdAt < nextMonthStart;
  }

  function buildApiUrl(runtimeScene, leaderboardId) {
    const gameId = gd.projectData.properties.projectUuid;
    const apiRoot = runtimeScene.getGame().isUsingGDevelopDevelopmentEnvironment()
      ? "https://api-dev.gdevelop.io"
      : "https://api.gdevelop.io";
    const params = new URLSearchParams({
      perPage: "100",
      onlyBestEntry: "false",
    });
    return `${apiRoot}/play/game/${gameId}/leaderboard/${leaderboardId}/entry?${params}`;
  }

  async function fetchEntries(runtimeScene, leaderboardId) {
    const response = await fetch(buildApiUrl(runtimeScene, leaderboardId), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error(`Leaderboard request failed: ${response.status}`);
    const entries = await response.json();
    if (!Array.isArray(entries)) throw new Error("Unexpected leaderboard response.");
    return entries;
  }

  function createBoardShell(runtimeScene) {
    const container = getGameContainer(runtimeScene);
    if (!container) return null;

    const board = document.createElement("div");
    board.id = "local-leaderboard-board";
    board.innerHTML = `
      <style>
        #local-leaderboard-board {
          position: absolute;
          inset: 0;
          z-index: 20;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          background: rgba(8, 12, 24, 0.88);
          color: #f8fbff;
          font-family: Arial, Helvetica, sans-serif;
          pointer-events: all;
        }
        #local-leaderboard-board .leaderboard-panel {
          width: min(680px, 96%);
          height: min(540px, 92%);
          display: grid;
          grid-template-rows: auto auto 1fr;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: #151927;
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.38);
        }
        #local-leaderboard-board .leaderboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px 10px;
        }
        #local-leaderboard-board h2 {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 0;
        }
        #local-leaderboard-board .close-button,
        #local-leaderboard-board .tab-button {
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: #222a3d;
          color: #f8fbff;
          cursor: pointer;
          font: inherit;
        }
        #local-leaderboard-board .close-button {
          width: 38px;
          height: 38px;
          font-size: 24px;
          line-height: 1;
        }
        #local-leaderboard-board .tabs {
          display: flex;
          gap: 8px;
          padding: 0 20px 14px;
        }
        #local-leaderboard-board .tab-button {
          min-width: 108px;
          padding: 9px 14px;
          font-size: 16px;
          font-weight: 700;
        }
        #local-leaderboard-board .tab-button.active {
          background: #f3cf4d;
          color: #151927;
          border-color: #f3cf4d;
        }
        #local-leaderboard-board .leaderboard-list {
          overflow: auto;
          padding: 0 20px 20px;
        }
        #local-leaderboard-board .row {
          display: grid;
          grid-template-columns: 56px 1fr 110px;
          gap: 12px;
          align-items: center;
          min-height: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 18px;
        }
        #local-leaderboard-board .rank {
          color: #f3cf4d;
          font-weight: 800;
        }
        #local-leaderboard-board .name {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        #local-leaderboard-board .score {
          text-align: right;
          font-weight: 800;
        }
        #local-leaderboard-board .empty,
        #local-leaderboard-board .loading,
        #local-leaderboard-board .error {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 260px;
          color: rgba(248, 251, 255, 0.78);
          font-size: 20px;
          text-align: center;
        }
      </style>
      <div class="leaderboard-panel">
        <div class="leaderboard-header">
          <h2>Leaderboard</h2>
          <button class="close-button" type="button" aria-label="Close">x</button>
        </div>
        <div class="tabs">
          <button class="tab-button active" type="button" data-board="all">Top 100</button>
          <button class="tab-button" type="button" data-board="month">Month</button>
        </div>
        <div class="leaderboard-list"><div class="loading">Loading...</div></div>
      </div>
    `;
    container.appendChild(board);
    return board;
  }

  function renderRows(board, entries, activeBoard) {
    const list = board.querySelector(".leaderboard-list");
    const rows = entries
      .slice(0, 100)
      .map(function (entry, index) {
        const name = entry.playerName || "Player";
        return `
          <div class="row">
            <div class="rank">#${index + 1}</div>
            <div class="name"></div>
            <div class="score">${formatScore(entry.score)}</div>
          </div>
        `;
      });

    if (!rows.length) {
      list.innerHTML = `<div class="empty">${activeBoard === "month" ? "No scores this month yet." : "No scores yet."}</div>`;
      return;
    }

    list.innerHTML = rows.join("");
    entries.slice(0, 100).forEach(function (entry, index) {
      list.children[index].querySelector(".name").textContent = entry.playerName || "Player";
    });
  }

  function wireBoard(runtimeScene, board, allEntries) {
    const tabs = Array.from(board.querySelectorAll(".tab-button"));
    const monthEntries = allEntries
      .filter(isEntryFromThisMonth)
      .sort(function (a, b) {
        return b.score - a.score;
      });

    function selectBoard(boardName) {
      tabs.forEach(function (tab) {
        tab.classList.toggle("active", tab.dataset.board === boardName);
      });
      renderRows(board, boardName === "month" ? monthEntries : allEntries, boardName);
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectBoard(tab.dataset.board);
      });
    });

    board.querySelector(".close-button").addEventListener("click", function () {
      leaderboardTools.closeLeaderboardView(runtimeScene);
    });

    selectBoard("all");
  }

  leaderboardTools.displayLeaderboard = async function (runtimeScene, leaderboardId, displayLoader) {
    if (isLoading) return;
    isLoading = true;
    isLoaded = false;
    hasErrored = false;

    leaderboardTools.closeLeaderboardView(runtimeScene);
    boardElement = createBoardShell(runtimeScene);
    if (!boardElement) {
      isLoading = false;
      hasErrored = true;
      return;
    }

    try {
      if (pendingScoreSaves[leaderboardId]) await pendingScoreSaves[leaderboardId];
      const entries = await fetchEntries(runtimeScene, leaderboardId);
      entries.sort(function (a, b) {
        return b.score - a.score;
      });
      wireBoard(runtimeScene, boardElement, entries);
      isLoaded = true;
    } catch (error) {
      hasErrored = true;
      const list = boardElement.querySelector(".leaderboard-list");
      list.innerHTML = '<div class="error">Leaderboard could not be loaded.</div>';
      console.error(error);
    } finally {
      isLoading = false;
    }
  };

  leaderboardTools.closeLeaderboardView = function (runtimeScene) {
    if (boardElement && boardElement.parentNode) {
      boardElement.parentNode.removeChild(boardElement);
      hasJustClosed = true;
    }
    boardElement = null;
    isLoaded = false;
    isLoading = false;
    const canvas = runtimeScene && runtimeScene.getGame().getRenderer().getCanvas();
    if (canvas) canvas.focus();
  };

  leaderboardTools.isLeaderboardViewLoaded = function () {
    return isLoaded;
  };

  leaderboardTools.isLeaderboardViewLoading = function () {
    return isLoading;
  };

  leaderboardTools.isLeaderboardViewErrored = function () {
    return hasErrored;
  };

  leaderboardTools.hasPlayerJustClosedLeaderboardView = function () {
    return hasJustClosed;
  };

  window.__monthlyLeaderboardBoard.applied = true;
  document.documentElement.setAttribute("data-monthly-leaderboard-board", "applied");
})();
