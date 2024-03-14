const classTypes = ['btn-default', 'btn-outline'];

customElements.define('mac-button', class MacButton extends HTMLElement { // component name
	constructor() {
		super();

		const text = this.getAttribute('data-content'); // get the data-content attribute
		const type = (classTypes.includes(this.getAttribute('data-view'))) ? this.getAttribute('data-view') : console.error(`There is no custom class like ${this.className} in "${this.tagName}".\nOnly "${classTypes}" `); // get the data-view attribute and math to object classTypes
		const icon = ``;
		const customClass = this.getAttribute('data-custom-class');
		this.innerHTML = 
		`<button class='btn ${type} ${customClass}'>${icon}<span>${text}</span></button>` // render html tags
	}
});