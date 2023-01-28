let style_redirect = document.createElement("style");

style_redirect.innerHTML = /*css*/ `
      .fgp-redirect {
        background-color: navy;
        color: white;
        padding: 1em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      .fgp-redirect a {
        color: inherit;
        display: block;
        padding: 0.3em;
      }
      .fgp-redirect strong {
        font-size: 1.5em;
        color: khaki;
      }
      .fgp-redirect span 
      {
        color: coral;
        font-size: 3em;
      }

`;

document.head.appendChild(style_redirect);

let fgp_redirect = document.querySelectorAll(".fgp-redirect a");

let path = window.location.pathname;

for (element of fgp_redirect) {
  if (!element.textContent) element.textContent = window.location.hostname + element.id;
  if (element.id == path) {
    let asdf = element.href;
    const myInterval = setInterval(function2, 5000);
    function function2() {
      console.log(asdf);
      clearInterval(myInterval);
    }

    document.querySelector(".fgp-redirect h2").innerHTML = path;
    document.querySelector(".fgp-redirect strong").innerHTML = element.href;
  }
}

// ========== timer... ==========
let span = document.querySelector(".fgp-redirect span");
var timeLeft = span.textContent;

let interval = setInterval(function5, 1e3);
function function5() {
  timeLeft -= 1;
  span.innerHTML = timeLeft;
  timeLeft <= 0 && (clearInterval(interval), function3(), setTimeout(1));
  function function3(text) {
    document.querySelector(".message").innerHTML = "pagina no encontrada";
  }
}
