document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Responsive Design 💻📱", "Fast ⚡", "User-Friendly 🙂", "Welcome to Our Resume Designing Website  RESUME-GO📝 "];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });
  document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
        } else {
          document.querySelector(`nav a[href="#${id}"]`).classList.remove("active");
        }
      });
    });
    document.querySelectorAll("li.card[id]").forEach((section) => {
      observer.observe(section);
    });
    
  });
  
  
  


