import React, { Fragment } from 'react';
import Contactform from '../../../helper/contacthelper';

class Content extends Contactform {
    render() {
        return (
            <Fragment>
                <section className="section-padding contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-header-left title">
                                    <h3 className="text-light-black header-title">Get In Touch</h3>
                                </div>
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <div className="row clearfix">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-submit" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Full Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="form-control form-control-submit" placeholder="Email" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} className="form-control form-control-submit" placeholder="Subject" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} className="form-control form-control-submit" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} className="form-control form-control-submit" placeholder="Message" required  style={{height:"225px"}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn-solid with-line" type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="contact-map">
                    <iframe title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ height: "300px" }} />
                </div>
            </Fragment>
        );
    }
}

export default Content;