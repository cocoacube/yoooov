var gdjs;(function(u){let s;(function(i){let r;(function(o){o.getGlobalVolume=function(n){return n.getScene().getSoundManager().getGlobalVolume()},o.setGlobalVolume=function(n,t){n.getScene().getSoundManager().setGlobalVolume(t)},o.unloadAllAudio=function(n){n.getScene().getSoundManager().unloadAll()},o.playSound=function(n,t,e,g,a){n.getScene().getSoundManager().playSound(t,e,g,a)},o.playSoundOnChannel=function(n,t,e,g,a,c){n.getScene().getSoundManager().playSoundOnChannel(t,e,g,a,c)},o.stopSoundOnChannel=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);e&&e.stop()},o.pauseSoundOnChannel=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);e&&e.pause()},o.continueSoundOnChannel=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);e&&(e.playing()||e.play())},o.isSoundOnChannelPlaying=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.playing():!1},o.isSoundOnChannelPaused=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.paused():!1},o.isSoundOnChannelStopped=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.stopped():!0},o.getSoundOnChannelVolume=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.getVolume()*100:100},o.setSoundOnChannelVolume=function(n,t,e){const g=n.getScene().getSoundManager().getSoundOnChannel(t);g&&g.setVolume(e/100)},o.getSoundOnChannelPlayingOffset=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.getSeek():0},o.setSoundOnChannelPlayingOffset=function(n,t,e){const g=n.getScene().getSoundManager().getSoundOnChannel(t);g&&g.setSeek(e)},o.getSoundOnChannelPitch=function(n,t){const e=n.getScene().getSoundManager().getSoundOnChannel(t);return e?e.getRate():1},o.setSoundOnChannelPitch=function(n,t,e){const g=n.getScene().getSoundManager().getSoundOnChannel(t);g&&g.setRate(e)},o.preloadSound=(n,t)=>n.getScene().getSoundManager().loadAudio(t,!1),o.unloadSound=(n,t)=>n.getScene().getSoundManager().unloadAudio(t,!1),o.playMusic=function(n,t,e,g,a){n.getScene().getSoundManager().playMusic(t,e,g,a)},o.playMusicOnChannel=function(n,t,e,g,a,c){n.getScene().getSoundManager().playMusicOnChannel(t,e,g,a,c)},o.stopMusicOnChannel=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);e&&e.stop()},o.pauseMusicOnChannel=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);e&&e.pause()},o.continueMusicOnChannel=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);e&&(e.playing()||e.play())},o.isMusicOnChannelPlaying=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.playing():!1},o.isMusicOnChannelPaused=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.paused():!1},o.isMusicOnChannelStopped=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.stopped():!0},o.getMusicOnChannelVolume=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.getVolume()*100:100},o.setMusicOnChannelVolume=function(n,t,e){const g=n.getScene().getSoundManager().getMusicOnChannel(t);g&&g.setVolume(e/100)},o.getMusicOnChannelPlayingOffset=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.getSeek():0},o.setMusicOnChannelPlayingOffset=function(n,t,e){const g=n.getScene().getSoundManager().getMusicOnChannel(t);g&&g.setSeek(e)},o.getMusicOnChannelPitch=function(n,t){const e=n.getScene().getSoundManager().getMusicOnChannel(t);return e?e.getRate():1},o.setMusicOnChannelPitch=function(n,t,e){const g=n.getScene().getSoundManager().getMusicOnChannel(t);g&&g.setRate(e)},o.preloadMusic=(n,t)=>n.getScene().getSoundManager().loadAudio(t,!0),o.unloadMusic=(n,t)=>n.getScene().getSoundManager().unloadAudio(t,!0),o.fadeSoundVolume=(n,t,e,g)=>{const a=n.getScene().getSoundManager().getSoundOnChannel(t);a&&a.fade(a.getVolume(),e/100,g*1e3)},o.fadeMusicVolume=(n,t,e,g)=>{const a=n.getScene().getSoundManager().getMusicOnChannel(t);a&&a.fade(a.getVolume(),e/100,g*1e3)}})(r=i.sound||(i.sound={}))})(s=u.evtTools||(u.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=soundtools.js.map