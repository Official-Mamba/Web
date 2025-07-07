
// Ensure all document resources are loaded
document.addEventListener("DOMContentLoaded", function() {

  // Select all links with hashes
  const links = document.querySelectorAll('a[href*="#"]');

  for (const link of links) {
      link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          let target = document.querySelector(this.hash);
          target = target.length ? target : document.querySelector('a[name=' + this.hash.slice(1) + ']');

          // Check if the target exists
          if (target) {
              event.preventDefault();
              target.scrollIntoView({
                  behavior: "smooth"
              });
          }
      }
  }

});
















var menu = document.getElementById("popup");
function showMenu(){
    menu.style.top = "20vh"
    menu.style.webkitTransform = "scale(1,1)"
}

function hideMenu(){
    menu.style.top = "-69vh"
    menu.style.webkitTransform = "scale(.1,.1)"
}






  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyF4P533E2dbSM9IBnGNNjbZsNh5XukaLqUX-RqxxwwF-ekdyLl1_4FKZZPdDtN9oBU/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Sent Successfully.."
        setTimeout(function(){
          msg.innerHTML=""
        },3000)
        form.reset()
      })
      
      
      .catch(error => console.error('Error!', error.message))
  })
 

