import React from 'react';
import Styled from 'styled-components';
import Footer from './Footer';
import { CenterWindow } from '../../GeneralComponent';
import { $NewEventWindow } from '../../../utils/DepthNum';

//#region style
const WindowBack = Styled(CenterWindow(60, $NewEventWindow))`
    display: flex;
    flex-direction: column;
`;
//#endregion

interface IProps {
    onCancel: () => void;
    onSubmit: () => void;
}

class MessageEdit extends React.Component<IProps, {}> {
    public render() {
        const { onCancel, onSubmit } = this.props;
        return(
            <WindowBack>
                {'message'}
                <Footer onCancel={onCancel} onSubmit={onSubmit}/>
            </WindowBack>
        );
    }
}

export default MessageEdit;
