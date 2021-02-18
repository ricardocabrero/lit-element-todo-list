import { css } from 'lit-element';

export const formCss = css`
    :host {
        width: 100%;
    }
    form, form * {
        box-sizing: border-box;
    }
    form {
        width: 100%;
        height: 25px;
        font-size: 16px;
        display: flex;
    }
    @media(max-width: 650px) {
        form {
            height: 30px;
        }  
    }
    input {
        width: 75%;
        height: 100%;
        border: 1px solid #ccc;
        border-right: none;
        box-shadow: none;
        outline: none;
        padding: 0 5px;
        text-transform: capitalize;
        fon-size: 14px;
        -webkit-border-radius: 0;
    }
    @media(max-width: 650px) {
        input {
            font-size: 17px;
        }  
    }
    button {
        width: 25%;
        height: 100%;
        background: #0d6efd;
        color: #fff;
        border: 1px solid #0d6efd;
        box-shadow: none;
        border-radius: 0 3px 3px 0;
        font-size: 14px;
    }
    @media(max-width: 650px) {
        button {
            font-size: 16px;
        }  
    }
`