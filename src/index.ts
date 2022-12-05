import bodyParser from "body-parser";
import express from "express";

import {saveHandler, searchHandler} from "./handlers";
import { Item } from "./options";

const app = express();
const port = 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/search", (request, response) => {
    let searchInput = request.query.input as string || "";
    let page = Number.parseInt(request.query.page as string) || 0;

    response.json(searchHandler(searchInput, page));
});

app.post("/api/save", (request, response) => {
    let newOptions = request.body.options as Item[];

    saveHandler(newOptions);
    response.json("ok");
});

app.listen(port, () => console.log(`Running on port ${port}`));
