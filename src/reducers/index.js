const events = (state = [], action) => {
    switch(action.type) {
        case 'createEvent':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id, ...event }]
        case 'deleteEvent':
            return state
        case 'deleteAllEvents':
            return []
        default:
            return state
    }
}

export default events
