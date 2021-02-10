import { ADD_INDICES, DEL_INDICES } from '../Actions/type';
import bargraph from '../images/bar-graph.PNG';
import lineargraph from '../images/linear-graph.PNG';

const initialState = {
    In: [
        {
            image: bargraph,
        },
        {
            image: lineargraph,
        },
        {
            image: 'https://picsum.photos/seed/picsum/200/300',
        },
        {
            image: 'https://picsum.photos/200',
        },
        {
            image: 'https://source.unsplash.com/random.PNG',
        }
    ],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_INDICES:
            return {
                ...state,
                In: [...state.In, action.payload]
            }
        case DEL_INDICES:
            let indices = state.In.filter((ind, idx) => idx != action.payload);
            return {
                ...state,
                In: indices   
            }
        default:
            return state;
    }

}