const express = require("express");
const app = express();

require("./services/passport");

const authRoutes = require("./routes/authRoutes");
authRoutes(app);
// require("./routes/authRoutes")(app) // same as the above 2 lines

const PORT = process.env.PORT || 5500;
app.listen(PORT);
