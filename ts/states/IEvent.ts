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
}

export const initMap: IMap = {
    eventObjs: [],
};

export const createEventObject = (
    type: string,
    name: string,
    pos: IPos,
    eventSeqs: IEvent[],
): IEventObject => {
    return {
        id: UUID(),
        type,
        name,
        pos,
        eventSeqs,
    };
};
