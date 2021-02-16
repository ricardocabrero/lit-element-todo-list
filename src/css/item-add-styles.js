import { css } from 'lit-element';

export const itemCss = css`
    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        align-items: center; 
        background: rgb(249, 247, 247);
    }
    p {
        margin: 0px;
        text-align: left;
        flex: 2 1 auto;
        padding-left: 5px;
        text-transform: capitalize;
    }
    li.selected p {
        text-decoration: line-through;
    }
    button {
        height: 25px;
        font-size: 14px;
        background: rgb(220, 53, 69);
        color: rgb(255, 255, 255);
        border-radius: 3px;
        box-shadow: none;
        border: 1px solid rgb(220, 53, 69);
        outline: none;
    }
`