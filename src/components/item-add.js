import { LitElement, html } from 'lit-element';
import { itemCss } from '../css/item-add-styles';

class ItemAdd extends LitElement {
    static get properties() {
        return {
            todo: { type: Object },
            checked: { type: Boolean }
        }
    }

    static get styles() {
        return [itemCss];
    }

    handleToggle(id) {
        this.dispatchEvent(new CustomEvent('toggle-item', {
            composed: true,
            bubbles: true,
            detail: id
        }));
    }

    handleDelete(id) {
        this.dispatchEvent(new CustomEvent('delete-item', {
            composed: true,
            bubbles: true,
            detail: id
        }));
    }

    render() {
        const { id, description, selected } = this.todo;
        
        return html`
        <li id=${id} class=${selected ? `selected` : ``}>
            <span class="check"></span>
            <p @click=${() => this.handleToggle(id)}>
            ${description}
            </p>
            <button @click=${() => this.handleDelete(id)}>delete</button>
        </li>`
    }
}

customElements.define('item-add', ItemAdd);