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
        text-indent: 20px;
        margin: 0px;
        text-align: left;
        flex: 2 1 auto;
        padding-left: 5px;
        text-transform: capitalize;
        cursor:pointer;
    }
    @media(max-width: 650px) {
        p {
            font-size: 18px;
        }
    }
    .check {
        position: absolute;
        margin-left: 6px;
        margin-top: -5px;
        width: 10px;
        height: 6px;
        border-bottom: 2px solid green;
    }
    .check:after {
        content: "";
        display: block;
        height: 2px;
        background: green;
        transform: rotate(90deg);
        position: relative;
        top: 6px;
    }
    @media(max-width: 650px) {
        .check {
            margin-top: -3px;
        }
    }
    li.selected p {
        text-decoration: line-through;
    }
    li.selected .check {      
        margin-top: -4px;
        border-bottom: solid 2px green;
        border-left: solid 2px green;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);      
    }
    li.selected .check:after {
        display: none;
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
    @media(max-width: 650px) {
        button {
            height: 28px;
            font-size: 15px;
        }
    }
`