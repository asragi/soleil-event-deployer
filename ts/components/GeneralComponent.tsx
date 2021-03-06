import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD, $GOLD_BORDER, $DAWN_BLACK } from './FoundationStyles';

/** テーマカラーに合わせた既定のボタン形コンポーネント */
export const BoxButton = Styled.button`
    width: 32px;
    height: 32px;
    background-color: ${$DAWN_BLACK};
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
`;

export const RectButton = Styled.button`
    background-color: ${$DAWN_BLACK};
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    color: ${$DAWN_LIGHT_GOLD};
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

/** 画面中央に生成されるウィンドウ */
export const CenterWindow = (margin: number, zIndex: number) => Styled.div`
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    background-color: ${$DAWN_BLACK};
    color: ${$DAWN_LIGHT_GOLD};
    transition: 0.3s;
    position: fixed;
    top: ${margin}px;
    right: ${margin}px;
    left: ${margin}px;
    bottom: ${margin}px;
    z-index: ${zIndex};
    transition: 0.3s;
`;

// Primitives
/** テキストタイトルの表示のデザインを統一するためのコンポーネント */
export const Title = Styled.div`
    font-size: 20px;
`;

/** 画像の大きさを要素の大きさに合わせるコンポーネント */
export const Image = Styled.img`
    width: 100%;
`;

export const StyledHr = Styled.hr.attrs(() => ({
    color: $DAWN_LIGHT_GOLD,
    width: '100%',
    size: '1px',
}))``;
