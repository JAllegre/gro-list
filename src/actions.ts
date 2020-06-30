import {getAllItems} from './api/listApi'
import {GroList} from "../index";
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS' ;
export const UPDATE_ITEMS_DATA = 'UPDATE_ITEMS_DATA' ;

export const updateItemsData = (GroList: GroList) => {
    return {
        type: UPDATE_ITEMS_DATA,
        payload: {GroList}
    };
}

export const  fetchAllItems = () => {
    return (dispatch: Function) => {
        getAllItems().then((data: GroList) => {
            dispatch(updateItemsData(data));
        }).catch((err) => {
        });
    }
}