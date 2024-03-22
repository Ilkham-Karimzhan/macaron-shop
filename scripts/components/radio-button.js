customElements.define(
  'mac-radio-button',
  class MacRadioButton extends HTMLElement {
    constructor() {
      super();

      let isDisabled = this.getAttribute('disabled');
      let id = this.getAttribute('id');
      let name = this.getAttribute('name');

      const label = document.createElement('label');
      label.classList.add('custom-radio');

      const input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('id', id);
      input.setAttribute('name', name);
      input.disabled = isDisabled === 'true';

      const span = document.createElement('span');
      span.classList.add('radio-button');

      label.appendChild(input);
      label.appendChild(span);

      this.appendChild(label);
    }
  }
);
