import React from 'react';
import Styled from 'styled-components';
import { CenterWindow } from '../../GeneralComponent';
import { $NewEventWindow } from '../../../utils/DepthNum';

//#region style
const WindowBack = Styled(CenterWindow(60, $NewEventWindow))`
`;
//#endregion
class MessageEdit extends React.Component {
    public render() {
        return(
            <WindowBack>
                {'message'}
            </WindowBack>
        );
    }
}

export default MessageEdit;
