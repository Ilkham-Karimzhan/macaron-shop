const status = {
   default: "btn-default",
 };
 customElements.define(
   "mac-checkbox",
   class MacCheckbox extends HTMLElement {
     constructor() {
       super();
 
       this.innerHTML = `<label class="con">
       <input type="checkbox"  />
       <span class="checkmark"></span>
       </label>`;
     }
   }
 );