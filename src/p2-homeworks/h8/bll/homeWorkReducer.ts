import {UserType} from "../HW8";


type ActionType = SortType | CheckType
type SortType = {
    type: 'sort'
    payload: string
}

type CheckType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a: UserType, b: UserType) => action.payload==='up'?
                a.name <= b.name ? -1 : 1:   a.name <= b.name ? 1 : -1)
        }

        case 'check': {
            return state.filter(f => f.age > action.payload)
        }
        default:
            return state
    }
}
