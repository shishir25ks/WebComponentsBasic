class AppDrawer extends HTMLElement {
    constructor() {
        super();
        console.log('in constructor');
    }
}

window.customElements.define('app-drawer', AppDrawer);