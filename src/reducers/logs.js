import {
    ADD_LOG,
    DELETE_ALL_LOGS,
} from '../actions/index'

const logs = (state = [], action) => {
    switch (action.type) {
        case ADD_LOG:
            const log = {
                description: action.description,
                operatedAt: action.operatedAt,
            }
            return [log, ...state]
        case DELETE_ALL_LOGS:
            return []
        default:
            return state
    }
}

export default logs
