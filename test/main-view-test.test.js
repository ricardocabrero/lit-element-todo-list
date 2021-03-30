import { html, fixture, expect, assert } from '@open-wc/testing';
import '../src/views/main-view';

describe('main-view component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<list-item></list-item>`);
    });
  
    it('length items is equal to "data" array length 2', async () => {
      el.data = [
        {
            id: 123,
            description: 'test',
            selected: false,
        },
        {
            id: 123,
            description: 'test',
            selected: false,
        }
      ];
      await el.updateComplete;
      const items = el.shadowRoot.querySelectorAll('ul > *');
      expect(items.length).to.equal(2);
    });

    it('length items is equal to "data" array length 0', async () => {
        el.data = [];
        await el.updateComplete;
        const items = el.shadowRoot.querySelectorAll('ul > *');
        expect(items.length).to.equal(0);
      });

});

describe('item-add component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<item-add></item-add>`);
    });
  
    it('item-add html dom contains display "todo" data', async () => {
        el.todo = {
            id: 123,
            description: 'test',
            selected: false,
        };
        await el.updateComplete;

        const htmlContent =`
        <li id=${el.todo.id} class="">
            <span class="check"></span>
            <p>
            ${el.todo.description}
            </p>
            <button>delete</button>
        </li>`;
        assert.shadowDom.equal(el, htmlContent);
    });

    it('item-add li element has class "selected" when this propertie is true', async () => {
        el.todo = {
            id: 123,
            description: 'test',
            selected: true,
        };
        await el.updateComplete;
        const item = el.shadowRoot.querySelector("li");
        expect(item.className).equal('selected');
    });  
});

describe('filter-buttons component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<filter-buttons></filter-buttons>`);
    });
  
    it('buttons filter length to equal 3', async () => {
        el.printButtons();
        await el.updateComplete;
        const btns =el.shadowRoot.querySelectorAll('button-filter');
        expect(btns.length).to.be.equal(3);
    });    
});

describe('button-filter component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<button-filter></button-filter>>`);
    });
  
    it('button dom is equal tu reference', async () => {
        el.text = 'test';
        el.btnActive = 'test';
        const htmlDom = `<button disabled>${el.text}</button>`;
        await el.updateComplete;
        assert.shadowDom.equal(el, htmlDom);
    });    
});

describe('message-paragraph component', () => {

    let el;
  
    beforeEach( async () => {
      el = await fixture(html`<message-paragraph></message-paragraph>`);
    });
  
    it('message-paragraph dom is equal tu reference', async () => {
        el.text = 'test';
        await el.updateComplete;
        const textP = el.shadowRoot.querySelector('p').textContent;
        expect(textP).to.be.equal(el.text);
    });    
});

describe('message-paragraph component', () => {

  let el;

  beforeEach( async () => {
    el = await fixture(html`<form-add></form-add>`);
  });

  it('input should be with value "test"', async () => {
      el.value = 'test';
      await el.updateComplete;
      const input = el.shadowRoot.querySelector('input');
      expect(input.value).equal(el.value);
  }); 
    
  it('input dom is equal tu reference', async () => {
    const htmlDom = `<form>
            <input type="text">
            <button type="submit">Add++</button>
        </form>`;
    assert.shadowDom.equal(el, htmlDom);
  }); 

});






