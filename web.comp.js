class AppDrawer extends HTMLElement {

    constructor() {
        super();
        console.log('in constructor');
    }

    // called every time when element is inserted in DOM
    connectedCallback() {
        console.log('connected!');
    }
    // called every time when element is removed from DOM
    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }
}

window.customElements.define('app-drawer', AppDrawer);