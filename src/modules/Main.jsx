// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import InfoCard from './InfoCard.jsx'
import picture from '../assets/example.jpg'

function Main() {

  const infoCard = <>
    <h1>Добро пожаловать на сайт логопедического центра “Говори”!</h1>
    <p>Наша компания занимается с детьми с 1996 года! <br /><br />
      Мы предоставляем профессиональные услуги и помогаем вашим любимым деткам говорить правильно! 
      А на нашем сайте вы сможете в режиме онлайн отслеживать расписание, писать отзывы и смотреть за прогрессом своего ребенка!</p>
  </>

  return (
    <>
      <Header />

      <main className='main-page'>
        <InfoCard
          position='right'
          img={picture}
          text={infoCard}
          buttonName="Связь"
          linkTo="/info"
        />
      </main>
      <Footer />
    </>
  )
}

export default Main
