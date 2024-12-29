import React, { useState } from 'react'
import logotype from '/logotype.png'

function Layout() {


  return (
    <>
    <div className="layout">
        <div className="layout-item">
            <div className="layout-right">
            <img src={logotype} alt="" width={'500px'} height={'500px'}  />
            </div>
            <div className="layout-left">
                <div className="layout-box">
                    <h1>ОФИЦИАЛЬНЫЙ ПАРТНЕР ЯНДЕКС ТАКСИ В УЗБЕКИСТАНЕ</h1>
                    <h3>Рады приветствовать Вас на нашем сайте.</h3>
                    <span>PARK PEGAS - Ваш надежный партнёр и помощник. Мы создаём лучшие условия работы для своих водителей. Проводим постоянные акции и бонусы. Присоединяйся и стань частью нашей команды!</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout