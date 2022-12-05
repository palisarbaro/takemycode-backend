import { initOptions , Item } from "./options";
const pageSize = 20;
let options = initOptions();

function getNthPage(opts: Item[], n: number) {
    return opts.slice(pageSize * n, pageSize * (n + 1));
}
function filter(opts: Item[], searchInput: string) {
    return opts.filter((x) => x.name.includes(searchInput));
}
export function searchHandler(searchInput: string, page: number) {
    console.log(options);
    return getNthPage(filter(options, searchInput), page);
}

export function saveHandler(newOptions: Item[]) {
    for (const i of newOptions.keys()) {
        console.log(i);
        options[i] = newOptions[i];
    }
}
