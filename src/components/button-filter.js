import { LitElement, html } from 'lit-element';
import { ButtonFilterCss } from '../css/button-filter-styles';

class ButtonFilter extends LitElement {
    static get properties() {
        return {
            text: { type: String },
            btnActive: { type: String }
        }
    }

    static get styles() {
        return [ButtonFilterCss];
    }

    render() {
        const disabled = this.btnActive === this.text;
        
        return html`
        <button ?disabled=${disabled}>${this.text}</button>`
    }
}

customElements.define('button-filter', ButtonFilter);