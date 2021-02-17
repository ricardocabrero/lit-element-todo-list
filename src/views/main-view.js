import { LitElement, html } from 'lit-element';
import '../components/form-add';
import '../components/list-item';
import '../components/filter-buttons';
import '../components/message-paragraph';
import HandleStorage from '../utils/localStorage';
import { mainCss } from '../css/main-view-styles'; 

class MainView extends LitElement {

    static get properties() {
        return {
            data: { type: Array },
            exist: { type: Boolean },
            filter: { type: String }
        }
    }

    static get styles() {
        return[mainCss];
    }

    constructor() {
        super();
        this.handleStorage = new HandleStorage('items');
        this.data =  this.handleStorage.getStorage('items') || [];
        this.exist = false;
        this.filter = 'all';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('form-change', this.handleChange);
        this.addEventListener('form-add', this.handleAdd);
        this.addEventListener('delete-item', this.handeleDelete);
        this.addEventListener('toggle-item', this.handleToggle);
        this.addEventListener('filter-btns', this.handleFilters);
    }

    handleChange() {
        this.exist = false;
    }

    handleAdd({detail}) {
        const filterExist = this.data.some(todo => 
            todo.description.toLowerCase() === detail.description.toLowerCase());

        if(filterExist) {
            this.exist = true;
            return;
        }
        this.data = [...this.data, detail];

        this.handleStorage.updateStorage('items', this.data);
    }

    handeleDelete({detail}) {   
        this.data = this.data.filter(todo => todo.id !== detail);

        this.handleStorage.updateStorage('items', this.data);
    }

    handleToggle({detail}) {
        this.data = this.data.map(todo => (todo.id === detail) 
        ? {...todo, selected: !todo.selected} : todo);

        this.handleStorage.updateStorage('items', this.data);
    }

    handleMessageComplete() {
        const todos = this.data.length > 0;
        const filterSelected = this.data.filter(todo => todo.selected === true);

        if(todos && this.data.length === filterSelected.length) {
            return html`<message-paragraph text="List completed."></message-paragraph>`
        }
    }

    handleMessageExist() {
        if(this.exist) {
            return html`<message-paragraph text="This item allready exist."></message-paragraph>`;
        } 
    }

    handleFilters({detail}) {
        this.filter = detail;
    }

    applyFilters(filter) {
        switch (filter) {
            case 'completed':
                return this.data.filter(todo => todo.selected);
            case 'pending':
                return this.data.filter(todo => !todo.selected);
            default:
                return this.data;
        }
    }

    render() {
        return html`<main>
        ${this.handleMessageComplete()}
        ${this.handleMessageExist()}
        <filter-buttons .btnActive=${this.filter}></filter-buttons>
        <h1>To-do list</h1>
        <form-add></form-add>
        <list-item .data=${this.applyFilters(this.filter)}></list-item>
        </main>`
    }
}

customElements.define('main-view', MainView);