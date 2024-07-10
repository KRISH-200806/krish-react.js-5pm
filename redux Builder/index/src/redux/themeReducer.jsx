import { light_theme } from "./action"

const initialstate = {
    theme:"light",
}
const themeReducer = (state=initialstate,action) => {
    switch (action.type) {
        case light_theme:
            return { ...state, theme: action.payload }
        
        default:
            return state
    }
}

export default themeReducer