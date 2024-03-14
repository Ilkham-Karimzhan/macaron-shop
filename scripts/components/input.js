customElements.define('mac-input', class MacButton extends HTMLElement { // component name
	constructor() {
		super();

		const placeholder = this.getAttribute('data-placeholder'); 
		const customClass = this.getAttribute('data-custom-class');
		const type = this.getAttribute('data-type');
		const error = this.getAttribute('data-error');
		this.innerHTML = (type == "text") ?
			`<input class = "input input-default ${customClass}" type="text" placeholder="${placeholder}" id = "">`:
			`<input class = "input input-password ${customClass}" type="password" placeholder="${placeholder}" id = "">`;
	}
});