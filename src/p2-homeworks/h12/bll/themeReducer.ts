export type colorType = 'dark'| 'red' | 'some' | 'white'

type initialStateType = {
    themes: colorType
}
const initState: initialStateType = {
    themes : 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeACType): initialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themes: action.themes};
        }
        default: return state;
    }
};

export const changeThemeC = (setting: colorType): {type: "CHANGE-THEME", themes: colorType } => {
    return{
        type: "CHANGE-THEME",
        themes: setting
    } as const
}; // fix any

export type ChangeThemeACType = ReturnType<typeof changeThemeC>