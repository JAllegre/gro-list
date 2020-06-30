import {Action} from "redux";

export interface GroListItem {
    key: string;
    title: string;
}

export type GroList = Array<GroListItem>

export interface GroState {
    GroList: Array<GroListItem>
}

export interface GroAction extends Action{
    payload: any
}

