import { Model } from "../types";

export const model : Model = {
    status: 'INIT',
    towers: {
        1: [1,2,3,4,5],
        2: [],
        3: []
    },
    present: (data:unknown, state: unknown) => {
    }
}