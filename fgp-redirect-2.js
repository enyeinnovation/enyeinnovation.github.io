let fgp_redirect = document.querySelectorAll("#fgp-redirect a");
let path = window.location.pathname;
for (element of fgp_redirect) {
  if (!element.textContent) element.textContent = window.location.hostname + element.id;
  if (element.textContent == path) {
    console.log(element.href);
    document.querySelector("h1").innerHTML = path;
    document.querySelector("strong").innerHTML = element.href;
  }
}
