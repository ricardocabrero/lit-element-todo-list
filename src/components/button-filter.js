import { LitElement, html } from 'lit-element';
import { ButtonFilterCss } from '../css/button-filter-styles';

class ButtonFilter extends LitElement {
    static get properties() {
        return {
            text: { type: String },
            btnActive: { type: String },
            disabled: { type: Boolean }
        }
    }

    static get styles() {
        return [ButtonFilterCss];
    }

    render() {
        this.disabled = this.btnActive === this.text;
        
        return html`
        <button ?disabled=${this.disabled}>${this.text}</button>`
    }
}

customElements.define('button-filter', ButtonFilter);