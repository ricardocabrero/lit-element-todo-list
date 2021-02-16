import { css } from 'lit-element';

export const MessageParagraphCss = css`
    p {
        position: absolute;
        top: -20px;
        margin: 0;
        width: 100%;
        text-align: center;
        left: 0;
        font-size: 14px;
        background: #fff;
    }
    @media(max-width: 550px) {
        p {
            font-size: 16px;
        }
    }
`