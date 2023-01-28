window.location.hostname;
window.location.pathname;
// window.location.href

const url = "https://www.example.com/blog?search=hello&world";
let domain = new URL(url);

// domain = domain.hostname;
console.log(domain); //www.example.com

domain = domain.hostname.replace("www.", "");
console.log(domain); //example.com

const pathname = domain.pathname;
console.log(pathname); // blog

const protocol = domain.protocol;
console.log(protocol); // https

const search = domain.search;
console.log(search); // ?search=hello&world
