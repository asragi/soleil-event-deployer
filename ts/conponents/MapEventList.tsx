import React from 'react'
import Styled from 'styled-components'
import { EventDesc } from './EventDesc';

//#region 
const EList = Styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 4px;
`;
//#endregion

export class MapEventList extends React.Component {
    public render() {
        return (
            <EList>
                <EventDesc />
            </EList>
        );
    }
}
