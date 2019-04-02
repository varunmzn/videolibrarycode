let express = require('express')
let app = express();
let path = require("path");
let glob = require('glob');
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/build/`))



let initRoutes = () => {
    glob("./routes/*.js", { cwd: path.resolve("./src/") }, (err, routes) => {
        if (err) {
            return;
        }
        routes.forEach((routePath) => {
            require(routePath).default(app);
        });
    });
}


initRoutes(app);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
