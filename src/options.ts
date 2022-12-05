export interface Item {
    name: string;
    selected: boolean;
}

export function initOptions() {
    const options: Item[] = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 4; k++) {
                options.push({
                    name: "opt " + i + j + k,
                    selected: false,
                });
            }
        }
    }
    return options;
}
