const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input, textarea, select');

window.onload=function(){
    
inputs.forEach(inputs=>{
    if (localStorage.getItem(input.id)) {
        input.value = localStorage.getItem(input.id);
      }
      
      input.addEventListener('input', function() {
    
        localStorage.setItem(input.id, input.value);
      });
    });
  };
