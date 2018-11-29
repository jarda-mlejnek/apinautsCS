import { BRANCH_DETAIL_LOADED } from './actionTypes'

export function setBranchLoadStatus(isLoaded) {
    return {
        type: BRANCH_DETAIL_LOADED,
        isLoaded
    }
}