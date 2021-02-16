import { css } from 'lit-element';

export const formCss = css`
    form, form * {
        box-sizing: border-box;
    }
    form {
        width: 225px;
        height: 25px;
        font-size: 16px;
        display: flex;
    }
    @media(max-width: 550px) {
        form {
            width: 240px;
        }  
    }
    input {
        width: 170px;
        height: 100%;
        border: 1px solid #ccc;
        border-right: none;
        box-shadow: none;
        outline: none;
        padding: 0 5px;
        text-transform: capitalize;
        fon-size: 14px;
        -webkit-border-radius: none;
    }
    @media(max-width: 550px) {
        input {
            font-size: 16px;
        }  
    }
    button {
        width: 55px;
        height: 100%;
        background: #e1e2e2;
        color: #000;
        border: 1px solid #ccc;
        box-shadow: none;
        border-radius: 0 3px 3px 0;
        font-size: 14px;
    }
    @media(max-width: 550px) {
        button {
            font-size: 15px;
            width: 70px;
        }  
    }
`