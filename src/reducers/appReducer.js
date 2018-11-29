import { 
    BRANCH_DETAIL_LOADED  
} from '../actions/actionTypes'

export function AppReducer(state = {
    branchDetailLoaded: false
}, action) {

    switch(action.type) {

        case BRANCH_DETAIL_LOADED:
            return {...state, branchDetailLoaded: action.isLoaded}

        default: 
            return state
    }
}