import { v4 as UUID } from 'uuid';

export interface IEventObject {
    id: string;
    type: string;
    name: string;
    pos: IPos;
    standAnimation?: string[];
    walkAnimation?: string[];
    dashAnimation?: string[];
    eventSeqs: IEvent[];
}

export interface IPos {
    x: number;
    y: number;
}

// イベントシーケンスのひとまとめ
export interface IEvent {
    event: IEventBase[];
}

// イベントシーケンスの1つ1つの要素
export interface IEventBase {
    id: string;
    type: string;
    content: string;
    branchType?: string;
    Events?: IEventBase[];
}

export const InitialEvent = (type: string): IEventBase => {
    return {
        id: UUID(),
        type,
        content: '',
    };
};

export interface IMap {
    eventObjs: IEventObject[];
    folderPath: string;
    loading: boolean;
}

export const initMap: IMap = {
    eventObjs: [],
    folderPath: '',
    loading: false,
};

export const createEventObject = (pos: IPos): IEventObject => {
    const id = UUID();
    return {
        id,
        type: 'none',
        name: id.substring(0, 6),
        pos,
        eventSeqs: [],
    };
};
