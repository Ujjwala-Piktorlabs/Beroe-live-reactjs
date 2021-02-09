import { ADD_INDICES, DEL_INDICES } from './type';

export const addIndices = () => dispatch => {
    dispatch({
        type: ADD_INDICES,
        payload:  { image: 'https://source.unsplash.com/random.PNG' }
    })
}

export const delIndices = (a) => dispatch => {
    dispatch({
        type: DEL_INDICES,
        payload: a
    })
}
