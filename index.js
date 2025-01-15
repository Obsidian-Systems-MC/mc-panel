require("dotenv").config();

const express = require("express");
const app = express();

const expressResponse = require("./_extensions/expressResponse");
const path = require("path");

const expressPterodactylInit = require("./_extensions/expressPterodactyl");
const expressPterodactyl = new expressPterodactylInit(app);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 


app.once("ready", function() {
    console.log("express ready")
});

app.get("/", expressResponse.respondOK);

app.get("/server/:uuid", async function(req, res) {
    const serverInformation = await expressPterodactyl.getServerInformation(req.params.uuid);
    const nodeInformation = await expressPterodactyl.getNodeInformation(serverInformation.nodeId)
    console.log(serverInformation, nodeInformation)
    return await expressResponse.renderHTMLView(req, res, path.join("server", "index.ejs"), { server: serverInformation, node: nodeInformation });
})

app.listen(8430);

