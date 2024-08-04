export const CAP_NHAT_EMAIL = 'CAP_NHAT_EMAIL'
export const CAP_NHAT_ID = 'CAP_NHAT_ID'

const initialState = {
    email: '',
    scoreL: 0,
    address: '',
    id: '', //cmnd
}

export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        case CAP_NHAT_EMAIL:
            return{
                ... state,
                email: payload.email
            }
        case CAP_NHAT_ID:
            return{
                ...state,
                id: payload.id
            }
        default:
            return state
    }
}