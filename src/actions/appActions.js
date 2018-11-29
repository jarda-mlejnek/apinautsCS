import { SOME_ACTION } from './actionTypes'

export function someAction(data) {
    return {
        type: SOME_ACTION,
        data
    }
}