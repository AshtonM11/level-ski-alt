const Auth0Strategy = require("passport-auth0");
const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = new Auth0Strategy(
  {
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "/login",
    scope: "openid email profile"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// const Auth0Strategy = require("passport-auth0");
// const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;
// const app = require("./index");

// module.exports = new Auth0Strategy(
//   {
//     domain: DOMAIN,
//     clientID: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     callbackURL: "/login",
//     scope: "openid email profile friends"
//   },
//   function(accessToken, refreshToken, extraParams, profile, done) {
//     console.log("XXXXX APPX XXXX", app);
//     let db = app.get("db");

//     db.getUser([profile.user_id]).then(user => {
//       console.log("PROFILE", profile);
//       console.log("extra", extraParams);
//       if (!user.length) {
//         db.addUser([
//           profile.displayName,
//           profile.user_id,
//           profile.email,
//           profile.picture
//         ]).then(user => {
//           return done(null, user[0]);
//         });
//       }

//       return done(null, {
//         ...profile,
//         id: user[0].id
//       });
//     });
//   }
// );
