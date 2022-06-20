
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

  
export  function Slider() {
  return (
    <div style={{ display: 'block', minWidth:'100%', minHeight:'70%', padding: 10 }}>
        <Carousel variant="dark" >
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100" 
src="https://usovi.ru/wp-content/uploads/2021/07/buildingsuppliesmelbourne1-1220x380-1.jpg"
            alt="Image One"
          />
         </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://vgorode.ua/img/article/2687/73_main-v1582881359.jpg"
            alt="Image Two"
          />
       </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://kartinkin.net/uploads/posts/2022-03/thumbs/1647389611_44-kartinkin-net-p-stroitelnie-materiali-kartinki-45.jpg"
            alt="Image Three"
          />
       </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://www.posol-lancon.ru/includes/%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE.jpg"
            alt="Image Four"
          />
       </Carousel.Item>
      </Carousel>
    </div>
  );
}
