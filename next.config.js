
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "mindflow-prototype.auth.us-west-2.amazoncognito.com",
          USER_POOL_ID: "us-west-2_oJRSEYIup",
          USER_POOL_CLIENT_ID: "2o2rf6beaom0ki2d643qo1vntn",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // todo: create prod environment
        env: {
          IDP_DOMAIN: "mindflow-prototype.auth.us-west-2.amazoncognito.com",
          USER_POOL_ID: "us-west-2_oJRSEYIup",
          USER_POOL_CLIENT_ID: "2o2rf6beaom0ki2d643qo1vntn",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
  }
};