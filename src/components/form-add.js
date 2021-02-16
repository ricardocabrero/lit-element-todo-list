import { LitElement, html } from 'lit-element';
import { formCss } from '../css/form-add-styles';

class FormAdd extends LitElement {
    static get properties() {
        return {
            value: { type: String }
        }
    }

    static get styles() {
        return [formCss]
    }

    constructor() {
        super();
        this.value = '';
    }

    handleChange({target}) {
        this.value = target.value;
        
        this.dispatchEvent(new CustomEvent('form-change', {
            composed: true,
            bubbles: true,
        }))
    }

    handleSubmit(e) {
        e.preventDefault();

        if(!this.value.trim()) {
            return;
        }

        this.dispatchEvent(new CustomEvent('form-add', {
            composed: true,
            bubbles: true,
            detail: {
                id: new Date().getTime(),
                description: this.value,
                selected: false,
            }
        }));

        this.value = '';
    }

    render() {
        return html`
        <form @submit=${this.handleSubmit}>
            <input @input=${this.handleChange} type="text" .value=${this.value}>
            <button type="submit">Add++</button>
        </form>`
    }
}

customElements.define('form-add', FormAdd);