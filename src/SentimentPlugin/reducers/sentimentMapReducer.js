import * as searchActions from '../../static/actionConstants'

export default function sentimentMapReducer(state =[{loaded :true}], action) {
    console.log(action, action.type)
    switch (action.type) {
        case searchActions.INPUT_CHANGED_LOADING:
            state = Object.assign([{loaded :false}]);
            break;
        case searchActions.FETCH_SENTIMENT_DATA_SUCCESSFUL:
            state = Object.assign(action.value.data);
            break;

        case searchActions.FETCH_SENTIMENT_DATA_FAILURE:
            state = Object.assign([{}]);
            break;
    }

    return state

}