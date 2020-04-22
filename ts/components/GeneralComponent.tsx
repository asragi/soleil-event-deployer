import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD, $GOLD_BORDER, $DAWN_BLACK } from './FoundationStyles';

/** テーマカラーに合わせた既定のボタン形コンポーネント */
export const BoxButton = Styled.button`
    width: 32px;
    height: 32px;
    margin: 0 4px 4px 0;
    background-color: ${$DAWN_BLACK};
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
`;

/** 画像の大きさを要素の大きさに合わせるコンポーネント */
export const Image = Styled.img`
    width: 100%;
`;

/** hoverで見た目が変わる矩形要素 */
export const ClickableRect = Styled.div`
    ${$GOLD_BORDER}
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background: ${$DAWN_LIGHT_GOLD};
        color: ${$DAWN_BLACK};
        cursor: pointer;
    }
`;

/** 半透明の灰色を画面全体に表示する要素 */
export const GrayBackPrototype = (depth: number) => Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: gray;
    opacity: 50%;
    z-index: ${depth};
`;
