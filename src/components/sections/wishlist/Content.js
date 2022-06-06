import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wishlistItems from '../../../data/shop/shop.json';
import { handleOutofStock, handleDeleteFromWishlist } from '../../../helper/shophelper';

class Content extends Component {
    render() {
        return (
            <section className="compare-page-wrapper bg-light-white section-padding">
                {/* compare main wrapper start */}
                <div className="container">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Wishlist Table Area */}
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pro-remove">Remove</th>
                                                <th className="pro-thumbnail">Thumbnail</th>
                                                <th className="pro-title">Product</th>
                                                <th className="pro-price">Price</th>
                                                <th className="pro-quantity">Stock Status</th>
                                                <th className="pro-subtotal">Add to Cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistItems.slice(0, 4).map((item, i) => (
                                                <tr key={i}>
                                                    <td className="pro-remove">
                                                        <Link to="#" onClick={handleDeleteFromWishlist}><i className="pe-7s-trash" /></Link>
                                                    </td>
                                                    <td className="pro-thumbnail">
                                                        <Link to={"/shop-details/" + item.id}>
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                        </Link>
                                                    </td>
                                                    <td className="pro-title">
                                                        <Link to={"/shop-details/" + item.id}>{item.title}</Link>
                                                    </td>
                                                    <td className="pro-price">
                                                        <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>
                                                    </td>
                                                    <td className="pro-quantity">
                                                        {item.stock === true ?
                                                            <span className="text-success">In Stock</span>
                                                            :
                                                            <span className="text-danger">Stock Out</span>
                                                        }
                                                    </td>
                                                    <td className="pro-subtotal">
                                                        {item.stock === true ?
                                                            <Link to="#" className="btn btn-solid">Add to Cart</Link>
                                                            :
                                                            <Link to="#" className="btn btn-solid disabled" onClick={handleOutofStock}>Add to Cart</Link>
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* compare main wrapper end */}
            </section>

        );
    }
}

export default Content;