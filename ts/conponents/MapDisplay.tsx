import React from 'react';
import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';

// #region styled
const Container = Styled.div`
    display: flex;
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    flex-grow: 1;
`;
// #endregion

export class MapDisplay extends React.Component<{}, {}> {
    public render() {
        return(
            <Container>
                
            </Container>
        );
    }
}
