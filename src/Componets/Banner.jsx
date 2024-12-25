import React, { useState } from 'react'
import Background from '/public/bacground.png'
import Email from '../../public/email'
import { useRef,useEffect } from 'react'
function Banner() {
  const [isPopUp,setISPopUp] = useState(false)
  const containerRef = useRef(null)
  
      useEffect (() => {
        const container = containerRef.current;
        if (container) {
            setTimeout(() => {
                container.style.animationPlayState = "running";
            }, 1000); // 1 soniyadan keyin animatsiya boshlanadi
        }
      }, []);

      const handleClick = () => {
        setISPopUp((open) => !open)
      }

  return (
    <>
    <div className="banner">
        <div className="banner-item">
            <div className="banner-left">
              <img src={Background} alt="" />
            </div>
            <div className="banner-right">
              <h1 className="yandex-text">
                Яндекс такси
              </h1>
              <div className="parter">Официальный партнёр
              </div>
              <div className="form-button" ref={containerRef}>
                <div className="left">
                <Email/>
                </div>
                <a  href='https://docs.google.com/forms/d/e/1FAIpQLSfEOwkB6rsZVpz8KgnGdrf3QLTiA_ec3NXFWPPG3enI8ktFAQ/viewform?usp=dialog'>  ONLINE Подключение </a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner