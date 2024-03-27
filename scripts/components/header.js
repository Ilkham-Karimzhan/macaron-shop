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
					<div class="header__upper-info__item-burger"></div>
					<div class="header__upper-info__item-icon">
						<img src="./assets/icon/8.svg" alt="">
					</div>
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
					  <span>В корзине ( ${buyCounter}<style>.header__upper-info__shop div::after{content:"${buyCounter}";}</style> ${buyCounter > 1 ? `товара` : `товар`})</span>
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
			  <div class="header__bottom">
            <div class="header__bottom-container container">
            <nav>
              <ul class="header__bottom-menu">
                <li class="header__bottom-item"><a href="#"><div>СЛАДКИЕ ДНИ</div><span>%</span></a></li>
                <li class="header__bottom-dropdown">
                  <ul>
                    <li><a href="#"><div>подарочные наборы</div></a></li>
                  </ul>
                </li>
                <li class="header__bottom-item"><a href="#"><div>Собрать набор</div></a></li>
                <li class="header__bottom-icon"><a href="#"><img src="./assets/icon/1.svg" alt="" srcset=""></a></li>
                <li class="header__bottom-item"><a href="#"><div>Создать дизайн</div></a></li>
                <li class="header__bottom-dropdown">
                  <ul>
                    <li><a href="#"><div>КОМПАНИЯМ</div></a></li>
                  </ul>
                </li>
                <li class="header__bottom-dropdown">
                  <ul>
                    <li><a href="#"><div>ВЕСЬ КАТАЛОГ</div></a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
		</div>
	  </header>
		`
	}
});