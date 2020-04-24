import React from 'react';
import Styled from 'styled-components';
import { GrayBackPrototype } from './GeneralComponent';
import { $DAWN_LIGHT_GOLD, $DAWN_BLACK } from './FoundationStyles';

const MenuContainer = (x: number, y: number, depth: number) => Styled.div`
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    z-index: ${depth};
    display: flex;
    flex-direction: column;
`;

const MenuChild = Styled.div`
    background: ${$DAWN_LIGHT_GOLD};
    transition: 0.3s;
    padding: 6px 12px;

    &:hover {
        background: ${$DAWN_BLACK};
        color: ${$DAWN_LIGHT_GOLD};
    }
`;

interface IProps {
    depthBack: number;
    depth: number;
    x: number;
    y: number;
    onClose: () => void;
    options: {
        label: string;
        action: () => void;
    }[];
}

class ContextMenu extends React.Component<IProps, {}> {
    public render() {
        const { depthBack, onClose } = this.props;
        const GrayBack = Styled(GrayBackPrototype(depthBack))`opacity: 0;`;
        return (
            <>
                <GrayBack onClick={onClose} />
                {this.RenderMenu()}
            </>
        )
    }

    private RenderMenu = () => {
        const { x, y, depth, options } = this.props;
        const Container = MenuContainer(x, y, depth);
        const items = options.map(o => 
            <MenuChild onClick={o.action} key={o.label}>
                {o.label}
            </MenuChild>
        );
        return (
            <Container>
                {items}
            </Container>
        );
    }
}

export default ContextMenu;
