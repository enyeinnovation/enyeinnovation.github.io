let fgp_redirect = document.querySelectorAll("#fgp-redirect a");

let path = window.location.pathname;
// console.log(path)

for (element of fgp_redirect) {
  if (!element.textContent) element.textContent = element.href;

  let domain = new URL(element.href);
  // console.log(domain.pathname);

  if (domain.pathname == path) {
    // console.log('----------------')
    console.log(element.id);
    // location.replace(element.id);
    // window.location.id = element.id;

    document.querySelector("h1").innerHTML = path;
    document.querySelector("strong").innerHTML = element.id;
  } else if (path == 404) {
    console.log("fgp error 404");
  }
}
