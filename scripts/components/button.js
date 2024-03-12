const classTypes = {
	default: 'btn-default',
	outline: 'btn-outline',
}

customElements.define('mac-button', class MacButton extends HTMLElement { // component name
	constructor() {
		super();

		const text = this.getAttribute('data-content'); // get the data-content attribute
		const type = classTypes[this.getAttribute('data-view') || 'default']; // get the data-view attribute and math to object classTypes
		this.innerHTML = 
		`<button class='btn ${type}'>${text}</button>` // render html tags
	}
});