window.onresize = function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  const everything = document.getElementsByClassName("everything")[0];
  const style = window.getComputedStyle(everything);
  const sw = parseInt(style.getPropertyValue("width"));
  const sh = parseInt(style.getPropertyValue("height"));
  
  var scaleX = width / sw;
  var scaleY = height / sh;
  var scale = scaleX < scaleY ? scaleX : scaleY;
  
  everything.style.transform = "translate(-50%,-50%) scale("+scale+")";
}

window.onresize();