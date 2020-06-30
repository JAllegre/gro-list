import {GroListItem, GroList} from "../index";

const data: GroList = [];

for (let cpt: number = 0; cpt < 50; cpt++) {
    data.push({
        key: Math.random().toString(12).substring(0),
        title: `Item #${cpt}`
    })
}

export async function getAllItems(): Promise<GroList> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}