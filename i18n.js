(function () {
  const translations = {
    "Games": ["游戏", "Games"],
    "返回 Games": ["返回 Games", "Back to Games"],
    "Yoooov School": ["有物学堂", "Yoooov School"],
    "Yoooov Challenge": ["有物挑战赛", "Yoooov Challenge"],
    "About": ["关于有物", "About"],
    "My Games": ["我的游戏", "My Games"],
    "Upload Course": ["上传课程", "Upload Course"],
    "Start Creating": ["开始创作", "Start Creating"],
    "View Quest": ["查看赛事", "View Quest"],
    "Submit Entry": ["提交作品", "Submit Entry"],
    "View Submissions": ["查看参赛作品", "View Submissions"],
    "Work with": ["合作伙伴", "Work with"],
    "All courses": ["全部课程", "All courses"],
    "All Courses": ["全部课程", "All Courses"],
    "Tracks": ["学习路径", "Tracks"],
    "Level": ["难度", "Level"],
    "Beginner": ["入门", "Beginner"],
    "Intermediate": ["进阶", "Intermediate"],
    "Advanced": ["高级", "Advanced"],
    "Recommended Paths": ["推荐学习路径", "Recommended Paths"],
    "根据当前进度推荐的学习路线": ["根据当前进度推荐的学习路线", "Learning paths recommended for your current progress"],
    "课程卡片延续游戏广场的暗色卡片体系": ["探索适合你的游戏创作课程", "Explore game creation courses designed for you"],
    "第 7 届黑客松正在进行": ["第 7 届黑客松正在进行", "Yoooov Challenge 07 is live"],
    "完成课程后可以直接提交你的 3 按钮游戏作品": ["完成课程后可以直接提交你的 3 按钮游戏作品", "Complete a course and submit your three-button game"],
    "零基础": ["零基础", "No experience required"],
    "项目实战": ["项目实战", "Project based"],
    "商业实战": ["商业实战", "Business practice"],
    "从可视化事件和场景搭建开始，不写代码也能快速做出并发布第一款游戏。": ["从可视化事件和场景搭建开始，不写代码也能快速做出并发布第一款游戏。", "Start with visual events and scenes, then build and publish your first game without code."],
    "学会用自然语言与 AI 协作，把游戏想法快速变成可运行、可迭代的作品。": ["学会用自然语言与 AI 协作，把游戏想法快速变成可运行、可迭代的作品。", "Work with AI in natural language to turn ideas into playable, iterative games."],
    "进入专业游戏引擎，掌握脚本、物理、动画与完整项目开发流程。": ["进入专业游戏引擎，掌握脚本、物理、动画与完整项目开发流程。", "Master scripting, physics, animation, and full production workflows in professional engines."],
    "学习定价、广告、内购与发行策略，让完成的游戏找到玩家并持续创造收入。": ["学习定价、广告、内购与发行策略，让完成的游戏找到玩家并持续创造收入。", "Learn pricing, ads, in-app purchases, and publishing strategies that turn games into revenue."],
    "制作你的第一张 Obby 地图": ["制作你的第一张 Obby 地图", "Build Your First Obby Map"],
    "点击冒险：角色与事件": ["点击冒险：角色与事件", "Click Adventure: Characters & Events"],
    "给游戏做一套图标和按钮": ["给游戏做一套图标和按钮", "Design Game Icons and Buttons"],
    "做一个回合制战斗系统": ["做一个回合制战斗系统", "Build a Turn-based Battle System"],
    "镜头、角色和第一人称移动": ["镜头、角色和第一人称移动", "Camera, Character & First-person Movement"],
    "如何包装并发布你的游戏": ["如何包装并发布你的游戏", "Package and Publish Your Game"],
    "第 7 届 Yoooov 黑客松进行中": ["第 7 届 Yoooov 黑客松进行中", "Yoooov Challenge 07 is live"],
    "只用": ["只用", "Build with only"],
    "按钮做游戏": ["按钮做游戏", "buttons"],
    "限制是创意的催化剂。本届挑战要求作品只能使用 3 个核心输入，让玩法、节奏和反馈变得更清晰。": ["限制是创意的催化剂。本届挑战要求作品只能使用 3 个核心输入，让玩法、节奏和反馈变得更清晰。", "Constraints spark creativity. Build a game with only three core inputs and make every action, rhythm, and response count."],
    "已报名创作者": ["已报名创作者", "Registered creators"],
    "已提交作品": ["已提交作品", "Submitted games"],
    "本届奖金池": ["本届奖金池", "Prize pool"],
    "报名开启": ["报名开启", "Registration"],
    "创作冲刺": ["创作冲刺", "Creation sprint"],
    "投票评审": ["投票评审", "Voting & judging"],
    "获奖公布": ["获奖公布", "Winners announced"],
    "Time Left": ["剩余时间", "Time Left"],
    "Rules": ["参赛规则", "Rules"],
    "评分标准": ["评分标准", "Scoring"],
    "Awards": ["奖项设置", "Awards"],
    "作品必须围绕 3 个核心输入按钮设计。": ["作品必须围绕 3 个核心输入按钮设计。", "The game must be designed around three core input buttons."],
    "可以使用 Roblox、Scratch、Unity、Godot 或 Web 技术。": ["可以使用 Roblox、Scratch、Unity、Godot 或 Web 技术。", "You may use Roblox, Scratch, Unity, Godot, or web technologies."],
    "提交 16:9 游戏封面图，以及 100 字以内的作品介绍。": ["提交 16:9 游戏封面图，以及 100 字以内的作品介绍。", "Submit a 16:9 cover image and a description of up to 100 words."],
    "提交 30–60 秒玩法视频，清楚展示核心机制与三个输入方式。": ["提交 30–60 秒玩法视频，清楚展示核心机制与三个输入方式。", "Submit a 30–60 second gameplay video showing the core mechanic and three inputs."],
    "Web 游戏需提交完整 ZIP 包，根目录必须包含可直接启动的 index.html。": ["Web 游戏需提交完整 ZIP 包，根目录必须包含可直接启动的 index.html。", "Web games must include a complete ZIP package with a launchable index.html at its root."],
    "创意性": ["创意性", "Creativity"],
    "趣味性": ["趣味性", "Fun"],
    "完成度": ["完成度", "Polish"],
    "叙事表现": ["叙事表现", "Story"],
    "人气表现": ["人气表现", "Popularity"],
    "商业潜力": ["商业潜力", "Commercial Potential"],
    "创意性 30%": ["创意性 30%", "Creativity 30%"],
    "趣味性 25%": ["趣味性 25%", "Fun 25%"],
    "完成度 15%": ["完成度 15%", "Polish 15%"],
    "叙事 10%": ["叙事 10%", "Story 10%"],
    "人气 10%": ["人气 10%", "Popularity 10%"],
    "商业 10%": ["商业 10%", "Commercial 10%"],
    "最佳创意奖": ["最佳创意奖", "Best Creativity"],
    "玩家最爱奖": ["玩家最爱奖", "Players' Choice"],
    "最佳新人奖": ["最佳新人奖", "Best Newcomer"],
    "人气奖": ["人气奖", "Popularity Award"],
    "商业转化奖": ["商业转化奖", "Commercial Impact"],
    "三个按钮，能创造多大的游戏世界？": ["三个按钮，能创造多大的游戏世界？", "How big a world can three buttons create?"],
    "谁可以参加": ["谁可以参加", "Who can enter"],
    "创作目标": ["创作目标", "Creative objective"],
    "开发方式": ["开发方式", "Development"],
    "评审与展示": ["评审与展示", "Judging & showcase"],
    "可玩的公开链接": ["可玩的公开链接", "Public playable link"],
    "16:9 游戏封面": ["16:9 游戏封面", "16:9 game cover"],
    "100 字以内作品介绍": ["100 字以内作品介绍", "Description under 100 words"],
    "三个核心输入说明": ["三个核心输入说明", "Three-input guide"],
    "30–60 秒玩法视频": ["30–60 秒玩法视频", "30–60 sec gameplay video"],
    "Web 游戏 ZIP 包": ["Web 游戏 ZIP 包", "Web game ZIP package"],
    "Live Submissions": ["实时参赛作品", "Live Submissions"],
    "正在参与投票的黑客松作品": ["正在参与投票的黑客松作品", "Challenge entries currently open for voting"],
    "Past Editions": ["往届赛事", "Past Editions"],
    "往届主题和获奖方向": ["往届主题和获奖方向", "Past themes and award-winning directions"],
    "三键宇航员": ["三键宇航员", "Three-button Astronaut"],
    "森林回声": ["森林回声", "Forest Echo"],
    "熔岩节拍": ["熔岩节拍", "Lava Beat"],
    "深海三拍": ["深海三拍", "Deep Sea Triplet"],
    "金币磁场": ["金币磁场", "Coin Magnet"],
    "反向迷宫": ["反向迷宫", "Reverse Maze"],
    "About Yoooov": ["关于 Yoooov", "About Yoooov"],
    "让每个想法，": ["让每个想法，", "Turn every idea"],
    "都成为": ["都成为", "into"],
    "可以玩的世界": ["可以玩的世界", "a playable world"],
    "有点东西": ["有点东西", "Something worth playing"],
    "从第一次创作，到第一笔收入": ["从第一次创作，到第一笔收入", "From your first creation to your first revenue"],
    "游戏创作不该只属于": ["游戏创作不该只属于", "Game creation should not belong only to"],
    "专业工作室。": ["专业工作室。", "professional studios."],
    "一条完整的创作者成长路径": ["一条完整的创作者成长路径", "A complete creator journey"],
    "准备好创造你的第一个世界了吗？": ["准备好创造你的第一个世界了吗？", "Ready to create your first world?"],
    "Explore School": ["探索学堂", "Explore School"],
    "View Challenge": ["查看挑战赛", "View Challenge"],
    "课程学习": ["课程学习", "Course Learning"],
    "课程目录": ["课程目录", "Course Outline"],
    "本课你将学会": ["本课你将学会", "What you will learn"],
    "标记为已完成": ["标记为已完成", "Mark as complete"],
    "返回课程": ["返回课程", "Back to Courses"],
    "参赛视频": ["参赛视频", "Entry Video"],
    "在线试玩": ["在线试玩", "Play Online"],
    "作品介绍": ["作品介绍", "About the Game"],
    "返回参赛作品": ["返回参赛作品", "Back to Entries"],
    "使用键盘 A / S / D 或屏幕按钮进行游戏": ["使用键盘 A / S / D 或屏幕按钮进行游戏", "Use A / S / D or the on-screen controls"],
    "观看创作者提交的玩法演示与核心机制介绍": ["观看创作者提交的玩法演示与核心机制介绍", "Watch the creator's gameplay showcase and core mechanic overview"],
    "我的游戏": ["我的游戏", "My Games"],
    "上传课程": ["上传课程", "Upload Course"]
  };

  const records = [];

  function registerTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest("script, style")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue.trim();
      if (!translations[original]) continue;
      records.push({ node, original, leading: node.nodeValue.match(/^\s*/)[0], trailing: node.nodeValue.match(/\s*$/)[0] });
    }
    document.querySelectorAll("[placeholder]").forEach(element => {
      const original = element.getAttribute("placeholder");
      if (translations[original]) records.push({ element, attribute: "placeholder", original });
    });
  }

  function applyLanguage(language) {
    records.forEach(record => {
      const value = translations[record.original]?.[language === "zh" ? 0 : 1];
      if (!value) return;
      if (record.node) record.node.nodeValue = record.leading + value + record.trailing;
      else record.element.setAttribute(record.attribute, value);
    });
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    try { localStorage.setItem("yoooov-language", language); } catch (_) {}
    const button = document.querySelector(".language-toggle");
    if (button) {
      button.textContent = language === "zh" ? "EN" : "中";
      button.title = language === "zh" ? "Switch to English" : "切换到中文";
      button.setAttribute("aria-label", button.title);
    }
  }

  function init() {
    const nav = document.querySelector("nav");
    if (nav && !document.querySelector(".language-toggle")) {
      const button = document.createElement("button");
      button.className = "language-toggle";
      const target = nav.querySelector(".nav-right") || nav;
      target.appendChild(button);
      button.addEventListener("click", () => {
        applyLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh");
      });
    }
    registerTextNodes(document.body);
    let saved = null;
    try { saved = localStorage.getItem("yoooov-language"); } catch (_) {}
    const preferred = saved || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
    applyLanguage(preferred);
  }

  const style = document.createElement("style");
  style.textContent = ".language-toggle{height:34px;min-width:40px;padding:0 10px;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:#20232c;color:#d9deea;font:700 11px 'Space Grotesk','Noto Sans SC',sans-serif;cursor:pointer}.language-toggle:hover{border-color:rgba(5,199,126,.55);color:#fff}";
  document.head.appendChild(style);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
