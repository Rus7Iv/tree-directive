class ArrowIcon extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin-right: 10px;
                }
                svg {
                    fill: currentColor;
                }
            </style>
            <svg width="12" height="12" viewBox="0 0 2048 2048" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1955 620l-931 930-931-930 90-90 841 841 841-841 90 90z"
                fill="currentColor"/>
            </svg>
        `;
    }
}

window.customElements.define('arrow-icon', ArrowIcon);
