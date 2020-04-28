import React from 'react'
import Styled from 'styled-components'
import { EventDesc } from './EventDesc';
import { IMap, IEventObject } from '../states/IEvent';

//#region
const EList = Styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    flex-shrink: 0;
    margin-right: 4px;
`;
//#endregion

interface IProps {
    eventObjs: IEventObject[];
}

export class MapEventList extends React.Component<IProps, {}> {
    public render() {
        const { eventObjs } = this.props;
        const eventDescList = eventObjs.map((it) => {
            return ( <EventDesc id={'0'} title={it.name} /> );
        });

        return (
            <EList>
                { eventDescList }
            </EList>
        );
    }
}
