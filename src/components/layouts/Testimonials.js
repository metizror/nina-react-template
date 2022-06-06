import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import testimonials from '../../data/testimonials.json';
import { getAuthor } from '../../helper/helper';

// install Swiper components
SwiperCore.use([Navigation]);

const settings = {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
};

class Testimonials extends Component {
    render() {
        return (
            <section className="feedback-area-two section-padding bg-custom-primary" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/footer-bg.png)" }}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left text-center">
                                <h3 className="text-white header-title">People Say About US</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper className="feedback-slider p-relative swiper-container" {...settings} navigation>
                                {testimonials.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        {getAuthor(item.author).map((author, i) => (
                                            <div key={i} className="feedback-item-two">
                                                <img src={process.env.PUBLIC_URL + "/" + author.image} alt={author.name} />
                                                <p className="text-white fs-16">{item.comment}</p>
                                                <h5 className="text-white fw-600 no-margin">{author.name}</h5>
                                                <span className="text-white fw-400">{author.address}</span>
                                            </div>
                                        ))}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;