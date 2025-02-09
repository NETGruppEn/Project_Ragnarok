/**
 * Creates "const" for the paths an exports them.
 * ! homeView is set to only "/" insted of "/home" so the user gets to home if URL is wrong.
 */
const homeView = "/";
const detailsView = "/details";

const RoutingPath = {
  homeView,
  detailsView,
};

export default RoutingPath;
