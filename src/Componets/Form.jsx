import React, { useState } from 'react';

const TelegramForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Telegram API ma'lumotlari
  const BOT_TOKEN = '7562245468:AAFrI13cKTmfC2jnSQ8jGuWCDpUYsFOpA5Q'; // O'zingizning Telegram bot tokeningiz
  const CHAT_ID = '@shx_70'; // O'zingizning chat IDingiz

  // Forma qiymatlarini yangilash
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ma'lumotlarni Telegramga yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Yangi forma ma'lumotlari:\nIsm: ${formData.name}\nEmail: ${formData.email}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (!response.ok) {
        throw new Error(`Telegram API xatolik: ${response.statusText}`);
      }

      alert("Ma'lumot muvaffaqiyatli yuborildi!");
      setFormData({ name: '', email: '' }); // Forma qiymatlarini tozalash
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi. Ma'lumot yuborilmadi.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ism:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Yuborish</button>
    </form>
  );
};

export default TelegramForm;
