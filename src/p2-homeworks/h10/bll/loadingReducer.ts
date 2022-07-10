const initState: isLoadindType = {
    isLoading: false
}

export type isLoadindType = {
    isLoading: boolean
}

export type initialStateType = {
    loading: isLoadindType
    isLoading: isLoadindType
}

export const loadingReducer = (state = initState, action: loadingACType): isLoadindType => { // fix any

    switch (action.type) {
        case 'LOADING_IS_TRUE': {
            return {...state, isLoading: action.isLoading}

        }
        default: return state
    }
}

export const loadingAC = (status: boolean): {type: 'LOADING_IS_TRUE', isLoading: boolean} => {
    return {
        type: 'LOADING_IS_TRUE',
        isLoading: status
    } as const
} // fix any
export type loadingACType = ReturnType<typeof loadingAC>

