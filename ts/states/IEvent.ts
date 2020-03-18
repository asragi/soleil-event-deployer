export interface IEventObject {
    type: string;
    name: string;
    pos: IPos;
    standAnimation?: string[];
    walkAnimation?: string[];
    dashAnimation?: string[];
    eventSeqs?: IEvent[];
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
    type: string;
    content: string;
    branchType?: string;
    Events?: IEventBase[];
}
