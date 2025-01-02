import React, { useState } from 'react'
import Telegram from '../../public/telegram'
import Phone from '../../public/phone'
import Logo from '../../public/instagramm'
import logotype from '/logotype.png'
import Hamburger from 'hamburger-react'

function Header() {
    const [isOpen,SetIsOpen] = useState(false)

    const handleOpen = () => {
        SetIsOpen((active) => !active)
    }

  return (
    <>
    <div className="header">
        <div className="header__item">
            <div className="header__logo">
            <img src={logotype} alt="" width={'60px'} height={'60px'}  />

            </div>
            <div className="header__nav">
                <nav className="nav__bar">
                    <a href="#about">О нас</a>
                    
                    <a href="">Тарифы и цены </a>
                    <a href="">Наш офисы</a>
                </nav>
            </div>
            <div className="sistem">
            <ul>
                <li> 
                    <a href="https://www.instagram.com/yandex.go.pegas.park">
                    <Logo/>
                    </a>
                     </li>
                <li><a href="https://t.me/park_pegas_yandex">
                    <Telegram/>
                    </a> 
                     </li>
                <li> <a href="tel: +998997140050">
                     <Phone/> 
                </a>
                     </li>
            </ul>
            </div>
            <div className="header-button">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEOwkB6rsZVpz8KgnGdrf3QLTiA_ec3NXFWPPG3enI8ktFAQ/viewform?usp=dialog'> Оставить заявку</a>
            </div>
            <div className="header__lang">
                <a href="">RU</a>
                <span></span>
                <a href="">UZ</a>
            </div>
        </div>
        <div className="logotype">
            <img src={logotype} alt="" width={'60px'} height={'60px'}  />
        </div>
          <Hamburger onToggle={handleOpen}/>
            <div className={`brg-menu ${isOpen ? `active` : ''}`}>
                <div className="brg-menu_item">
                    <div className="brg-center">
            <img src={logotype} alt="" width={'60px'} height={'60px'}  />
            <nav className="nav-brg">
                    <a href="#about">О нас</a> 
                    <a href="">Тарифы и цены </a>
                    <a href="">Наш офисы</a>
            </nav>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Header