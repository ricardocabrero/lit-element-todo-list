import { LitElement, html } from 'lit-element';
import '../components/item-add';
import { listCss } from '../css/list-item-styles';

class ListItem extends LitElement {
    static get properties() {
        return {
            data: { type: Array },
        }
    }

    static get styles() {
        return[listCss];
    }

    render() {
        return html`<ul>
        ${this.data.map(todo =>
             html`<item-add .todo=${todo}></item-add>`)}
        </ul>`
    }
}

customElements.define('list-item', ListItem);