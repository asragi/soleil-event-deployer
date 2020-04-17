import React from 'react';
import Styled from 'styled-components';
import ScrollBooster from 'scrollbooster';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';

// #region styled
const Container = Styled.div`
    display: flex;
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    flex-grow: 1;
    overflow: auto;
`;
// #endregion

export class MapDisplay extends React.Component<{}, {}> {
    public render() {
        const renderDoms = (
            <Container ref= {elm => this.scrollbooster(elm)}>
                <div>test</div>
            </Container>
        );
        return(renderDoms);
    }

    private scrollbooster(elm: HTMLElement | null): void {
        new ScrollBooster({ 
            viewport: elm,
            scrollMode: 'transform',
         });
    }
}
