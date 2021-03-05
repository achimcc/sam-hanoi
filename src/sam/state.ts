import { State, Model } from "../types";

export const state: State = {
    init: (model: Model) => false,
    canMove: (model: Model) => false,
    canDrop: (model: Model) => false,
    isSolved: (model: Model) => false,
    render: (model: Model) => {

    }
}
