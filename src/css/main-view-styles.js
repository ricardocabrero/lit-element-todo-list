import { css } from 'lit-element';

export const mainCss = css`
    main {
        width: 300px;
        margin: 30px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    @media(max-width: 550px) {
        main {
            310px;
        }
    }
    h1 {
        font-size: 20px;
        text-align: center;
        background: #f1efef;
        width: 100%;
        padding: 3px;
    }
    `