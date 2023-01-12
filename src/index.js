const video = document.getElementById("video");

// The following line does't work in production:
video.src = new URL("./mov_bbb.mp4", import.meta.url).href;
