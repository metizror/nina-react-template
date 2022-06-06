import React from 'react';
import Popuphelper from '../../helper/popuphelper';

class Videocta extends Popuphelper {
    render() {
        return (
            <section className="section-padding advertisement-banner-1 what-wedo-bg bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/banner4.jpg)" }}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-lg-8 custom-center">
                            <div className="advertisement-text-1 mb-30">
                                <h6 className="sub-head">What We do</h6>
                                <h3 className="text-white heading">Delivering help and hope
            to <span className="text-color-secondary"> people</span> through <span className="text-color-secondary"> sponsorship</span></h3>
                                <p />
                            </div>
                        </div>
                        <div className="col-lg-4 align-self-center">
                            <div className="blob play-btn ">
                                <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube popup-video"> <i className="fas fa-play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Videocta;