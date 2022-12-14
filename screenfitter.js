window.onresize = function() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  
  // const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // const height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
  
  console.log(width, height);
  
  const everything = document.getElementsByClassName("everything")[0];
  const style = window.getComputedStyle(everything);
  const sw = parseInt(style.getPropertyValue("width"));
  const sh = parseInt(style.getPropertyValue("height"));
  
  var scaleX = width / sw;
  var scaleY = height / sh;
  
  var scale = scaleX < scaleY ? scaleX : scaleY;
  
  console.log(scale)
  
  everything.style.transform = "translate(-50%,-50%) scale("+scale+")";
  everything.style.display = "block";
}

setTimeout(window.onresize, 1);