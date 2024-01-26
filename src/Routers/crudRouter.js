let initialstate = {
    users: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
}

const crudeRoutrs = (state = initialstate, action) => {
    switch (action.type) {
        case 'addData':
            let allData = [...state.users, action.payload]
            localStorage.setItem('user', JSON.stringify(allData))
            return {
                ...state,
                users: allData
            }

        case 'deleteData':
            let all = action.payload
            let deleted = state.users.filter((val) => {
                return val.id !== all
            })
            localStorage.setItem('user', JSON.stringify(deleted))
            return {
                ...state,
                users: deleted
            }

        default:
            return state
    }
}

export default crudeRoutrs;