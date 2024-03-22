customElements.define('mac-header', class MacButton extends HTMLElement { // component name
	constructor() {
		super();

        const customClass = this.getAttribute('data-custom-class');
        const buyCounter = this.getAttribute('data-counter');
		this.innerHTML = 
		`
		<header class = "header" >
			<div class="header__container">
			  <div class="header__upper">
				<div class="header__upper-container container">
				  <nav class="header__upper-menu">
					<ul>
					  <li class="header__upper-menu__item"><a href="#">Гарантия свежести</a></li>
					  <li class="header__upper-menu__item"><a href="#">Доставка и оплата</a></li>
					  <li class="header__upper-menu__item"><a href="#">Оптовые поставки</a></li>
					  <li class="header__upper-menu__item"><a href="#">Контакты</a></li>
					</ul>
				  </nav>
				  <div class="header__upper-info">
					<div class="header__upper-info__item-dropdown">
					  <img src="./assets/icon/7.svg" alt="" srcset="">
					  <ul>
						<li>Санкт-Петербург</li>
					  </ul>
					</div>
					<div class="header__upper-info__item">
					  <img src="./assets/icon/4.svg" alt="">
					  8 812 309-82-88
					</div>
					<div class="header__upper-info__shop">
					  <div class ="circle"><img src="./assets/icon/3.svg" alt=""></div>
					  В корзине ( <style>.header__upper-info__shop div::after{content:"${buyCounter}";}</style> товара)
					</div>
					<nav class="header__upper-info__item">
					  <ul>
						<li><a href="#"><img src="./assets/icon/5.svg" alt=""></a></li>
						<li><a href="#"><img src="./assets/icon/6.svg" alt=""></a></li>
						<li><a href="#"><img src="./assets/icon/2.svg" alt=""></a></li>
					  </ul>
					</nav>
				  </div>
				</div>
			  </div>
			  <div class="mac-header__bottom"></div>
			</div>
	 	 </header>
		`
	}
});