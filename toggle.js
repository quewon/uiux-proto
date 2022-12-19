const toggleReference = [];

function createToggles(array) {
  // array of pairs of elements
  // only one out of these pairs can be selected
  
  for (let pair of array) {
    pair[0].dataset.ref = toggleReference.length;
    pair[0].onclick = function() {
      var reference = toggleReference[parseInt(this.dataset.ref)];
      
      var hasPair = false;
      for (let pair of reference) {
        if (pair[0] == this) {
          if (pair[1]) hasPair = true;
          break;
        }
      }
      
      for (let pair of reference) {
        if (pair[0] == this) {
          this.classList.add("selected");
          if (pair[1]) pair[1].classList.add("selected");
          continue;
        }
        
        pair[0].classList.remove("selected");
        if (pair[1] && hasPair) pair[1].classList.remove("selected");
      }
    }
  }
  
  toggleReference.push(array);
}