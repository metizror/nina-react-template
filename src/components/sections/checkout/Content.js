import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, NavLink, Tab, Nav } from 'react-bootstrap';
import checkoutItems from '../../../data/shop/shop.json';
import { getTags, handleDeleteFromCart } from '../../../helper/shophelper';

const qty = 1;

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceTotal: checkoutItems.reduce((totalPrice, item) => totalPrice + item.price * qty, 0),
            checkoutItems: checkoutItems
        };
    }
    render() {
        return (
            <section className="final-order section-padding bg-light-white">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="main-box padding-20">
                                <div className="row mb-xl-20">
                                    <div className="col-md-6">
                                        <div className="section-header-left">
                                            <h3 className="text-light-black header-title fw-700">Review and place order</h3>
                                        </div>
                                        <h6 className="text-light-black fs-14">Review address, payments, and tip to complete your purchase</h6>
                                        <h6 className="text-light-black mb-2">Your order setting</h6>
                                        <p className="text-light-green fw-600">Delivery, ASAP (60-70m)</p>
                                        <p className="text-light-white title2 mb-1">Jhon Deo <span><Link to="#">Change Details</Link></span>
                                        </p>
                                        <p className="text-light-black fw-600 mb-1">Home</p>
                                        <p className="text-light-white mb-1">314 79th st 70 Brooklyn, NY 11209
                <br />Cross Street, Rite Aid</p>
                                        <p className="text-light-white">(347) 1234567890</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="advertisement-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/shop/product1.jpg"} className="img-fluid full-width image-fit" alt="advertisement-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="payment-sec">
                                            <div className="section-header-left">
                                                <h3 className="text-light-black header-title">Delivery Instructions</h3>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control form-control-submit" rows={4} placeholder="Delivery Details" />
                                            </div>
                                            <div className="form-group">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" name="#" /> <span className="checkmark" /> Spare me the napkins and plasticware. I'm trying to save the earth.</label>
                                            </div>
                                            <div className="section-header-left">
                                                <h3 className="text-light-black header-title">Payment information</h3>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div id="accordion">
                                                        <Accordion>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="0" className="p-0 card-link fw-500 fs-14">
                                                                        Pay with a Gift Card
                                                                    </Accordion.Toggle>
                                                                </div>
                                                                <Accordion.Collapse eventKey="0">
                                                                    <div className="card-body no-padding payment-option-tab">
                                                                        <div className="form-group">
                                                                            <div className="credit-card gift-card p-relative">
                                                                                <input type="text" name="#" className="form-control-submit fs-16" defaultValue="AC2B76" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Accordion.Collapse>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="1" className="p-0 card-link fw-500 fs-14">
                                                                        Add a promo code
                                                                    </Accordion.Toggle>
                                                                </div>
                                                                <Accordion.Collapse eventKey="1">
                                                                    <div className="card-body no-padding payment-option-tab">
                                                                        <div className="form-group">
                                                                            <div className="credit-card promocode p-relative input-group">
                                                                                <input type="text" name="#" className="form-control-submit fs-16" placeholder="AC2B76" />
                                                                                <button type="submit" className="btn-second btn-submit ml-1">Apply</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Accordion.Collapse>
                                                            </div>
                                                        </Accordion>
                                                        <div className="payment-option-tab">
                                                            <Tab.Container defaultActiveKey="tab-1">
                                                                <Nav variant="pills" className="nav nav-tabs">
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey="tab-1" className="fw-600">Saved credit card</Nav.Link>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey="tab-2" className="fw-600">New credit card</Nav.Link>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey="tab-3" className="fw-600">Cash</Nav.Link>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey="tab-4" className="fw-600">PayPal<sup>TM</sup></Nav.Link>
                                                                    </Nav.Item>
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey="tab-5" className="fw-600">Amex Express Checkout</Nav.Link>
                                                                    </Nav.Item>
                                                                </Nav>
                                                                <Tab.Content>
                                                                    <Tab.Pane eventKey="tab-1">
                                                                        <div className="form-group">
                                                                            <div className="credit-card p-relative">
                                                                                <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                                                                        </div>
                                                                        <div className="driver-tip-sec mb-xl-20">
                                                                            <Tab.Container defaultActiveKey="savetipcard">
                                                                                <Nav variant="pills" className="nav nav-tabs">
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="savetipcard" className="fw-600">Tip with Credit Card</Nav.Link>
                                                                                    </Nav.Item>
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="cashtip" className="fw-600" disabled>Tip with Cash Card</Nav.Link>
                                                                                    </Nav.Item>
                                                                                </Nav>
                                                                                <Tab.Content>
                                                                                    <Tab.Pane eventKey="savetipcard">
                                                                                        <div className="row">
                                                                                            <div className="col-md-6">
                                                                                                <div className="tip-percentage">
                                                                                                    <form>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>30%</span>
                                                                                                        </label>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="custom-tip">
                                                                                                    <div className="input-group mb-3">
                                                                                                        <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                                                                                        </div>
                                                                                                        <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Tab.Pane>
                                                                                </Tab.Content>
                                                                            </Tab.Container>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Donate the change</h3>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="custom-checkbox">
                                                                                <input type="checkbox" name="#" /> <span className="checkmark" />
                                                Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                                                                        </div>
                                                                        <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                                                                        </p>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="tab-2">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="form-group">
                                                                                    <label className="text-light-white fw-700">Card Number</label>
                                                                                    <div className="credit-card card-front p-relative">
                                                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <div className="form-group">
                                                                                    <label className="text-light-white fw-700">Expires on</label>
                                                                                    <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-3">
                                                                                <div className="form-group">
                                                                                    <label className="text-light-white fw-700">Security Code</label>
                                                                                    <div className="credit-card card-back p-relative">
                                                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-3">
                                                                                <div className="form-group">
                                                                                    <label className="text-light-white fw-700">ZIP Code</label>
                                                                                    <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="form-group">
                                                                                    <label className="custom-checkbox">
                                                                                        <input type="checkbox" name="#" /> <span className="checkmark" />
                                                Save Credit card</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                                                                        </div>
                                                                        <div className="driver-tip-sec mb-xl-20">
                                                                            <Tab.Container defaultActiveKey="tipnewcard">
                                                                                <Nav variant="pills" className="nav nav-tabs">
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="tipnewcard" className="fw-600">Tip with Credit Card</Nav.Link>
                                                                                    </Nav.Item>
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="newcashtip" className="fw-600" disabled>Tip with Cash</Nav.Link>
                                                                                    </Nav.Item>
                                                                                </Nav>
                                                                                <Tab.Content>
                                                                                    <Tab.Pane eventKey="tipnewcard">
                                                                                        <div className="row">
                                                                                            <div className="col-md-6">
                                                                                                <div className="tip-percentage">
                                                                                                    <form>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>30%</span>
                                                                                                        </label>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="custom-tip">
                                                                                                    <div className="input-group mb-3">
                                                                                                        <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                                                                                        </div>
                                                                                                        <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Tab.Pane>
                                                                                </Tab.Content>
                                                                            </Tab.Container>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Donate the change</h3>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="custom-checkbox">
                                                                                <input type="checkbox" name="#" /> <span className="checkmark" />
                                Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                                                                        </div>
                                                                        <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                                                                        </p>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="tab-3">
                                                                        <p className="text-light-black">Have the cash ready when you receive your order.</p>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Donate the change</h3>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="custom-checkbox">
                                                                                <input type="checkbox" name="#" /> <span className="checkmark" />
                                Apologies, but you can't donate with the selected payment type</label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                                                                        </div>
                                                                        <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                                                                        </p>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="tab-4">
                                                                        <p className="text-light-black">Please review your order and make any necessary changes before checking out with PayPal.</p>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                                                                        </div>
                                                                        <div className="driver-tip-sec mb-xl-20">
                                                                            <Tab.Container defaultActiveKey="paypaltipcard">
                                                                                <Nav variant="pills" className="nav nav-tabs">
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="paypaltipcard" className="fw-600">Tip with Credit Card</Nav.Link>
                                                                                    </Nav.Item>
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="paypalcashtip" className="fw-600" disabled>Tip with Cash</Nav.Link>
                                                                                    </Nav.Item>
                                                                                </Nav>
                                                                                <Tab.Content>
                                                                                    <Tab.Pane eventKey="paypaltipcard">
                                                                                        <div className="row">
                                                                                            <div className="col-md-6">
                                                                                                <div className="tip-percentage">
                                                                                                    <form>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>30%</span>
                                                                                                        </label>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="custom-tip">
                                                                                                    <div className="input-group mb-3">
                                                                                                        <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                                                                                        </div>
                                                                                                        <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Tab.Pane>
                                                                                </Tab.Content>
                                                                            </Tab.Container>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Donate the change</h3>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="custom-checkbox">
                                                                                <input type="checkbox" name="#" /> <span className="checkmark" />
                                Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="btn-first paypal-btn text-custom-white full-width fw-500">Checkout with
                                <img src={process.env.PUBLIC_URL + "/assets/img/pay-pal.png"} alt="" />
                                                                            </button>
                                                                        </div>
                                                                        <p className="text-center text-light-black no-margin">By placing your order, you agree to Quickmunch's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                                                                        </p>
                                                                    </Tab.Pane>
                                                                    <Tab.Pane eventKey="tab-5">
                                                                        <Accordion defaultActiveKey="2">
                                                                            <div className="card">
                                                                                <div className="card-header">
                                                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="2" className="p-0 card-link fw-500 fs-14">
                                                                                        Saved Card
                                                                            </Accordion.Toggle>
                                                                                </div>
                                                                                <Accordion.Collapse eventKey="2">
                                                                                    <div className="card-body no-padding payment-option-tab">
                                                                                        <div className="form-group">
                                                                                            <div className="credit-card amex-card-front p-relative">
                                                                                                <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Accordion.Collapse>
                                                                            </div>
                                                                            <div className="card">
                                                                                <div className="card-header">
                                                                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="3" className="p-0 card-link fw-500 fs-14">
                                                                                        Add New Card
                                                                            </Accordion.Toggle>
                                                                                </div>
                                                                                <Accordion.Collapse eventKey="3">
                                                                                    <div className="card-body no-padding payment-option-tab">
                                                                                        <div className="row">
                                                                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-light-white fw-700">Card Number</label>
                                                                                                    <div className="credit-card amex-card-front p-relative">
                                                                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-xl-2 col-lg-6 col-md-2 col-sm-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-light-white fw-700">Expires on</label>
                                                                                                    <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-light-white fw-700">Security Code</label>
                                                                                                    <div className="credit-card amex-card-back p-relative">
                                                                                                        <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-light-white fw-700">ZIP Code</label>
                                                                                                    <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                <div className="form-group">
                                                                                                    <label className="custom-checkbox">
                                                                                                        <input type="checkbox" name="#" /> <span className="checkmark" />
                                          Save Credit card</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Accordion.Collapse>
                                                                            </div>
                                                                        </Accordion>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                                                                        </div>
                                                                        <div className="driver-tip-sec mb-xl-20">
                                                                            <Tab.Container defaultActiveKey="tipcard">
                                                                                <Nav variant="pills" className="nav nav-tabs">
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="tipcard" className="fw-600">Tip with Credit Card</Nav.Link>
                                                                                    </Nav.Item>
                                                                                    <Nav.Item>
                                                                                        <Nav.Link eventKey="cashtip" className="fw-600" disabled>Tip with Cash</Nav.Link>
                                                                                    </Nav.Item>
                                                                                </Nav>
                                                                                <Tab.Content>
                                                                                    <Tab.Pane eventKey="tipcard">
                                                                                        <div className="row">
                                                                                            <div className="col-md-6">
                                                                                                <div className="tip-percentage">
                                                                                                    <form>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>25%</span>
                                                                                                        </label>
                                                                                                        <label className="radio-inline text-light-green fw-600">
                                                                                                            <input type="radio" name="tip-percentage" /> <span>30%</span>
                                                                                                        </label>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="custom-tip">
                                                                                                    <div className="input-group mb-3">
                                                                                                        <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                                                                                        </div>
                                                                                                        <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Tab.Pane>
                                                                                </Tab.Content>
                                                                            </Tab.Container>
                                                                        </div>
                                                                        <div className="section-header-left">
                                                                            <h3 className="text-light-black header-title">Donate the change</h3>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="custom-checkbox">
                                                                                <input type="checkbox" name="#" /> <span className="checkmark" />
                                Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <Link to="#">Terms of use</Link>  <span className="ml-2"><Link to="#">Learn More</Link></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                                                                        </div>
                                                                        <p className="text-center text-light-black no-margin">By placing your order, you agree to Nina's <Link to="#">terms of use</Link> and <Link to="#">privacy agreement</Link>
                                                                        </p>
                                                                    </Tab.Pane>
                                                                </Tab.Content>
                                                            </Tab.Container>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <div className="cart-detail-box">
                                    <div className="card">
                                        <div className="card-header padding-15 fw-700">Your order from
    <p className="text-light-white no-margin fw-500">Jhon Deo</p>
                                        </div>
                                        <div className="card-body no-padding" id="scrollstyle-4">
                                            {checkoutItems.slice(0, 4).map((item, i) => (
                                                <div className="cat-product-box" key={i}>
                                                    <div className="cat-product">
                                                        <div className="cat-name">
                                                            <Link to={"/shop-details/" + item.id}>
                                                                <p className="text-light-green fw-700">
                                                                    <span className="text-dark-white">{qty}</span>{item.title}
                                                                </p>
                                                                <span className="text-light-white fw-700">
                                                                    {getTags(item.tags).map((tag, i) => (
                                                                        <span key={i}>
                                                                            {tag.title},
                                                                        </span>
                                                                    ))}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="delete-btn">
                                                            <Link to="#" className="text-dark-white" onClick={handleDeleteFromCart}>
                                                                <i className="far fa-trash-alt" />
                                                            </Link>
                                                        </div>
                                                        <div className="price">
                                                            <Link to={"/shop-details/" + item.id} className="text-dark-white fw-500">
                                                                ${new Intl.NumberFormat().format((item.price * qty).toFixed(2))}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="item-total">
                                                <div className="total-price border-0 pb-0"> <span className="text-dark-white fw-600">Items subtotal:</span>
                                                    <span className="text-dark-white fw-600">${new Intl.NumberFormat().format(this.state.priceTotal.toFixed(2))}</span>
                                                </div>
                                                <div className="total-price border-0 pt-0 pb-0"> <span className="text-light-green fw-600">Delivery fee:</span>
                                                    <span className="text-light-green fw-600">$15.00</span>
                                                </div>
                                                <div className="total-price border-0 pt-0 pb-0"> <span className="text-dark-white fw-600">Taxes &amp; Fee:</span>
                                                    <span className="text-dark-white fw-600">$10.00</span>
                                                </div>
                                                <div className="total-price border-0 pt-0 pb-0"> <span className="text-dark-white fw-600">Driver Tip:</span>
                                                    <span className="text-dark-white fw-600">$1.00</span>
                                                </div>
                                                <div className="total-price border-0 "> <span className="text-light-black fw-700">Total:</span>
                                                    <span className="text-light-black fw-700">${new Intl.NumberFormat().format((this.state.priceTotal + 26).toFixed(2))}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer p-0 modify-order">
                                            <Link to="/cart" className="full-width fw-500 bg-light-green d-block text-center text-white"><i className="fas fa-chevron-left mr-2" /> Modify Your Order</Link>
                                            <Link to="/checkout" className="total-amount"> <span className="text-custom-white fw-700">TOTAL</span>
                                                <span className="text-custom-white fw-700">${new Intl.NumberFormat().format((this.state.priceTotal + 26).toFixed(2))}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;