const routes = {
  404: "/404-page.html",
  "/": "/home.html",
  "/google": "https://google.com/",
  "/example": "https://example.com/",
};

const handleLocation = () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  location.replace(route);
};

setTimeout(handleLocation, 5000);
// handleLocation();
