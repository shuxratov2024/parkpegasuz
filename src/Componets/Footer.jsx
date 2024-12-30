import React from 'react'
import Instagramm from '/public/instagramm.jsx'
import Telegram from '/public/telegram'
import Phone from '/public/phone'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-item">
            <h1>Наши контакты</h1>
            <div className="footer-sistem">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/yandex.go.pegas.park">
                        <Instagramm/>
                        </a>
                    </li>
                    <li><a href="https://t.me/park_pegas_yandex">
                        <Telegram/>
                    </a>
                    </li>
                    <li>
                        <a href="tel: +998997140050">
                        <Phone/>
                        </a>
                    </li>
                </ul>
            </div>
            <br />
            <span>www.parkpegas.uz</span>
        </div>
    </div>
    </>
  )
}

export default Footer