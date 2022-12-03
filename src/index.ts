import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options: string[] = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 4; k++) {
            options.push("opt " + i + j + k);
        }
    }
}
let selected: string[] = ["opt 001"];

console.log(options);
const pageSize = 20;
function getNthPage(arr: string[], n: number) {
    return arr.slice(pageSize * n, pageSize * (n + 1));
}
function filter(arr: string[], searchInput: string) {
    return arr.filter((x) => x.includes(searchInput));
}

app.get("/api/search", (request, response) => {
    let searchInput = request.query.input as string || "";
    let page = Number.parseInt(request.query.page as string) || 0;
    response.json(getNthPage(filter(options, searchInput), page));
});

app.get("/api/selected", (request, response) => {
    response.json(selected);
});

app.post("/api/selected", (request, response) => {
    selected = request.body.selected;
    console.log(selected);
    response.json("ok");
});

app.listen(port, () => console.log(`Running on port ${port}`));
