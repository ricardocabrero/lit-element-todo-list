import { css } from 'lit-element';

export const ButtonFilterCss = css`
    button {
        background: #0dcaf0;
        color: #000;
        border-radius: 3px;
        border: none;
        box-shadow: 0 0 3px #ccc;
        padding: 4px 9px;
        margin-top: 10px;
        outline: none;
        width:90px;
        text-transform: capitalize;
        font-size: 14px;
    }

    @media(max-width: 550px) {
        button {
            font-size: 15px;
        }
    }

    button:disabled {
        background: #ffc107;
        color: #000;
    }
`