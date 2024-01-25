export const addData = (allData) => {
    return {
        type: 'addData',
        payload: allData
    }
}

export const deleteData = (deleteRec) => {
    return{
        type : 'deleteData',
        payload : deleteRec
    }
}