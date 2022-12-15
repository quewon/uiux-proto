console.log("a");

if ('ontouchstart' in document.documentElement && window.location.href.indexOf("mobile") != -1) {
  window.onresize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    document.body.style = width+"px";
    document.body.style.height = height+"px";
    
    console.log(width, height);
    
    const everything = document.getElementsByClassName("everything")[0];
    const style = window.getComputedStyle(everything);
    const sw = parseInt(style.getPropertyValue("width"));
    const sh = parseInt(style.getPropertyValue("height"));
    
    var scale = width / sw;
    
    // width of everything should equal width
    
    everything.style.setProperty("--height", height / scale + "px");
    
    // x = sw / width
    
    everything.style.transform = "translate(-50%, -50%) scale("+scale+")";
    everything.style.display = "block";
  }
} else {
  window.onresize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    document.body.style.width = width+"px";
    document.body.style.height = height+"px";
    
    console.log(width, height);
    
    const everything = document.getElementsByClassName("everything")[0];
    const style = window.getComputedStyle(everything);
    const sw = parseInt(style.getPropertyValue("width"));
    const sh = parseInt(style.getPropertyValue("height"));
    
    var scaleX = width / sw;
    var scaleY = height / sh;
    
    var scale = scaleX < scaleY ? scaleX : scaleY;
    
    everything.style.transform = "translate(-50%, -50%) scale("+scale+")";
    everything.style.display = "block";
  }
}

setTimeout(window.onresize, 1);