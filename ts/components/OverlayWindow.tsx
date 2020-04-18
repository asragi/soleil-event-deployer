import React from 'react';
import Styled from 'styled-components';

const GrayBack = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: gray;
    opacity: 50%;
    z-index: 1;
`;

interface ILocalState {
    shown: boolean;
}

export class OverlayWindow extends React.Component<{}, ILocalState> {
    public constructor(props: {}) {
        super(props);

        this.state = { shown: true };
    }

    public render() {
        if (!this.state.shown) {
            return null;
        }
        return (
            <GrayBack onClick={this.onClickGray} />
        );
    }

    private onClickGray = (): void => {
        this.setState({ shown: false });
    }
}
