if (!('ontouchstart' in document.documentElement)) {
  const everything = document.getElementsByClassName("everything")[0];
  
  const cursor = document.createElement("div");
  cursor.style.position = "absolute";
  cursor.style.transform = "translate(-50%, -50%)";
  cursor.style.borderRadius = "50%";
  cursor.style.background = "black";
  cursor.style.border = "1px solid white";
  cursor.style.opacity = ".5";
  cursor.style.zIndex = "10";
  cursor.style.width = "30px";
  cursor.style.height = "30px";
  cursor.style.pointerEvents = "none";
  document.body.appendChild(cursor);
  
  var drag = { py:0, down: false };
  
  everything.addEventListener("mousedown", function(e) {
    cursor.style.background = "white";
    everything.classList.add("scrolling");
    
    drag = { py: everything.scrollTop + e.pageY, down: true };
  });
  everything.addEventListener("mouseup", function(e) {
    cursor.style.background = "black";
    drag.down = false;
    everything.classList.remove("scrolling");
  });
  everything.addEventListener("mouseleave", function(e) {
    cursor.style.background = "black";
    drag.down = false;
  });
  
  document.addEventListener("mousemove", function(e) {
    e = e || window.event;
    
    cursor.style.left = e.pageX+"px";
    cursor.style.top = e.pageY+"px";
    
    // if (drag.down) {
    //   // if (drag.py > e.pageY) {
    //   //   everything.scrollTo(0, everything.scrollTop + 800);
    //   //   drag.down = false;
    //   // }
    //   everything.scroll(0, drag.py - e.pageY);
    // }
  });
}