(()=>{"use strict";
  for(const play of document.querySelectorAll(".video-play")){
    play.addEventListener("click",()=>{
      const id=(play.dataset.youtubeId||"").trim();
      if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
      const frame=play.closest(".video-frame");
      const iframe=document.createElement("iframe");
      iframe.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0";
      iframe.title=play.dataset.videoTitle||"Видео EVOODESSA";
      iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen=true;
      frame.replaceChildren(iframe);
    });
  }
})();