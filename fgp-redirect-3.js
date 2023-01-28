let style_redirect = document.createElement("style");

style_redirect.innerHTML = `
      .fgp-redirect {
        background-color: navy;
        color: white;
        padding: 1em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      .fgp-redirect a {
        color: inherit;
        /* text-decoration: none; */
        display: block;
        padding: 0.3em;
      }
      .fgp-redirect strong {
        font-size: 1.5em;
      }
      .fgp-redirect span 
      {
        /* background-color: #fff; */
        /* color: #000; */
        font-size: 3em;
      }

`;

document.head.appendChild(style_redirect);

let fgp_redirect = document.querySelectorAll(".fgp-redirect a");

let path = window.location.pathname;
// console.log(path)

for (element of fgp_redirect) {
  if (!element.textContent) element.textContent = element.href;

  let domain = new URL(element.href);
  // console.log(domain.pathname);

  const myInterval = setInterval(function2, 5000);

  function function2() {
    if (domain.pathname == path) {
      clearInterval(myInterval);
      // console.log('----------------')
      console.log(element.id);
      // function3(element);
      // location.replace(element.id);
      // window.location.id = element.id;

      document.querySelector(".fgp-redirect h2").innerHTML = path;
      document.querySelector(".fgp-redirect strong").innerHTML = element.id;
    }
  }
}

let span = document.querySelector(".fgp-redirect span");
// console.log(span);
var timeLeft = span.textContent;

let interval = setInterval(function5, 1e3);
function function5() {
  timeLeft -= 1;
  span.innerHTML = timeLeft;
  timeLeft <= 0 && (clearInterval(interval), function3(), setTimeout(1));
  // timeLeft <= 0 && (console.log(timeLeft))
  function function3(text) {
    // console.log(text);
    document.querySelector(".message").innerHTML = "pagina no encontrada";
  }
}
