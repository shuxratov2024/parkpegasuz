import React, { useState } from 'react'

function Layout() {

  const [formData, setFormData] = useState({ name: '', phone: '' });

  const BOT_TOKEN = '7562245468:AAFYl6TFEYAxZsOuKO2hvkNsfUb7ZKdV_RI'; // Bot tokeningizni kiriting
  const CHAT_ID = '@pegasdata_bot'; // Chat ID kiriting

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Yangi forma:Name ${formData.name}Phone: ${formData.phone}`;
    const url = `https://api.telegram.org/bot${CHAT_ID}/sendMessage`;

    try {
      await fetch(CHAT_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      alert("Ma'lumot yuborildi!");
      setFormData({ name: '', email: '' }); // Formani tozalash
    } catch (error) {
      alert("Xatolik yuz berdi!");
      console.error(error);
    }
  }
  return (
    <>
    <div className="layout">
        <div className="layout-item">
            <div className="layout-right">
              
            <div className='pop-up'>
                <form onSubmit={handleSubmit}>
                  <h1>Оставьте ваши контакты</h1>
                  <span>Наши операторы с вами свяжутся</span>
              <div className="pop-up_item">
                <input type="text" className="name" placeholder='Имя Фамилия' value={formData.name} />
                <input type="text" className="phone" placeholder='+998 ' value={formData.phone} />
                <button className="send" style={{boxShadow: '0px 2px 3px rgba(0,11,48,0.25)'}} onClick={handleChange}>
                   Отправить
                </button>
              </div>
                </form>
              </div>
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