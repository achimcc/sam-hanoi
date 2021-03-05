type checkState = {
    (model: Model) : boolean
}

type Presenter = {
    (model: Model, state: State): void
}

type Display = {

}

type ActionType = 'MOVE' | 'DROP' | 'START' | 'RESET'

type Action = {
   type: ActionType,
   payload: object,
   present: Presenter
}

export type Status = 'INIT' | 'CAN_MOVE' | 'MOVING' | 'SOLVED'

export interface Model {
    status: Status,
    towers: Object,
    present: Presenter
}

export interface State {
    init: checkState,
    canMove: checkState,
    canDrop: checkState,
    isSolved: checkState,
    render: (model: Model) => void
}

export interface Action {
    type: string,

}

