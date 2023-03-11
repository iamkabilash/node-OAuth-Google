module.exports = {
  web: {
    client_id: process.env.client_id,
    project_id: process.env.project_id, // not needed for this proj.
    auth_uri: process.env.auth_uri, // not needed for this proj.
    token_uri: process.env.token_uri, // not needed for this proj.
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url, // not needed for this proj.
    client_secret: process.env.client_secret,
    redirect_uris: process.env.redirect_uris, // not needed for this proj.
    javascript_origins: process.env.javascript_origins, // not needed for this proj.
  },
  mongoURI: process.env.mongoURI,
  cookieKey: process.env.cookieKey,
};
