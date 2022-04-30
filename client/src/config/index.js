import pkg from "../../package.json";

export default {
  development: {
    endpoint: pkg.proxy,
  },
  production: {
    endpoint: window.location.hostname,
  },
};
