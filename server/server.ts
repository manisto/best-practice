import * as path from "path";
import * as express from "express";
import { apiRouter } from "./api";

let app = express();

app.use(express.static("client/dist"));
app.use("/api", apiRouter);
app.use(function(request, response, next) {
  response.sendFile(path.join(process.cwd(), "client/dist/index.html"));
});

app.listen(1337, function() {
  console.log("Now listening on http://localhost:1337...");
});
