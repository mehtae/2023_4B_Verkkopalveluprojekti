import React from 'react';

function ContactUs() {
  return (
    <div>
      <h1>Ota yhteyttä</h1>
        <p>Jos sinulla on kysymyksiä tai kommentteja, ota yhteyttä meihin.</p>
      <form>
        <label htmlFor="name">Nimi:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Sähköposti:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message">Viesti:</label>
        <textarea id="message" name="message"></textarea>
        <br />
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default ContactUs;
