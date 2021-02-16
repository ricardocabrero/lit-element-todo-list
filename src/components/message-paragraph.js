import { LitElement, html } from 'lit-element';
import { MessageParagraphCss } from '../css/message-paragraph-styles'

class MessageParagraph extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return[MessageParagraphCss];
    }

    render() {
        return html`<p>${this.text}</p>`
    }
}

customElements.define('message-paragraph', MessageParagraph);