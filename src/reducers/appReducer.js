import { 
    SOME_ACTION  
} from '../actions/actionTypes'

export function appReducer(state = {
    someState: false
}, action) {

    switch(action.type) {

        case SOME_ACTION:
            return {...state}

        default: 
            return state
    }
}