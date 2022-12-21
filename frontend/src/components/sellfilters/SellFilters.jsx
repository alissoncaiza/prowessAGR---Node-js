import React from 'react';
import { Swiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

export default function SellFilters() {
  SwiperCore.use([Autoplay]);
  return (

    <section className="reviews" id="reviews">
      <h1 className="heading">
        customer&apos;s
        {' '}
        <span>review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
        >
          
            <div className="box">
              <img src="../assets/images/sellers/Empresa1.jpg" alt="" />
              <p>
              Somos una empresa 100% ecuatoriana con un enfoque sustentable y sostenible para el bienestar de la comunidad agrícola, ofrecemos productos orgánicos y asesoramiento técnico para el campo.
              </p>
              <h3>Empresa 1</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          
         
            <div className="box">
              <img src="image/pic-2.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Empresa 2</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
         
            <div className="box">
              <img src="image/pic-3.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Empresa 3</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          
            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Empresa 4</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>

            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Empresa 5</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>

            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Empresa 6</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          
        </Swiper>
      </div>
    </section>
  );
}