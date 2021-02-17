import { LitElement, html } from 'lit-element';
import '../components/button-filter';
import {FilterButtonsCss} from '../css/filter-buttons-styles';

class FilterButtons extends LitElement {
    static get properties() {
        return {
            type: { type: Object },
            btnActive: { type: String }
        }
    }

    static get styles() {
        return [FilterButtonsCss];
    }

    constructor() {
        super();
        this.type = {
            completed: 'completed',
            pending: 'pending',
            todos: 'all',
        }
    }

    handleFilters(param) {
        return this.dispatchEvent(new CustomEvent('filter-btns', {
            composed: true,
            bubbles: true,
            detail: param,
        }))        
    }

    printButtons() {
        let group = [];
        for(let prop in this.type) {
            group.push( 
                html`<button-filter
                .btnActive=${this.btnActive}
                @click=${() => this.handleFilters(this.type[prop])}
                text=${this.type[prop]}></button-filter>`)
        }
        return html`${group}`;
    }

    render() {   
        return html`
        <div class="filter-btns">
           ${this.printButtons()}
        </div>`
    }
}

customElements.define('filter-buttons', FilterButtons);