customElements.define(
  'mac-checkbox',
  class MacCheckbox extends HTMLElement {
    constructor() {
      super();

      let isDisabled = this.getAttribute('disabled');
      let id = this.getAttribute('id');

      const label = document.createElement('label');
      label.classList.add('con');

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', id);
      input.disabled = isDisabled === 'true';

      const span = document.createElement('span');
      span.classList.add('checkmark');

      label.appendChild(input);
      label.appendChild(span);

      this.appendChild(label);
    }
  }
);
