import React, { useState } from "react";
import './style.scss';
import Product1 from '../../assets/img/product-1.jpg';
import Product2 from '../../assets/img/product-2.jpg';
import Product3 from '../../assets/img/product-3.jpg';
import Product4 from '../../assets/img/product-4.jpg';
import Product5 from '../../assets/img/product-5.jpg';
import Product6 from '../../assets/img/product-6.jpg';
import Product7 from '../../assets/img/product-7.jpg';
import Product8 from '../../assets/img/product-8.jpg';


export const ProductCard = () =>{

    const [productList,setProductList] = useState([
        {
            img:Product1,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product2,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product3,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product4,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product5,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product6,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product7,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
        {
            img:Product8,
            productName:'Product Name Goes Here',
            price:'$123.00',
            newPrice:'$123.00',
            review:'(99)'
        },
    ])

    return <div className="product-box G-flex G-flex-wrap">{productList.map((item,index)=>{

        return <div className="product-card-section">
            <div className="product-card">
            <div className="product-img G-flex">
                <img src={item.img} alt="img"/>
            </div>
            <div className="product-description G-center G-flex-column">
                <h3>{item.productName}</h3>
                <div className="price-box G-flex G-align-center">
                    <span className="price">{item.price}</span>
                    <span className="newPrice">{item.newPrice}</span>
                </div>
                <div className="review-box G-flex G-align-center">
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <span>{item.review}</span>
                </div>
            </div>
        </div>
        </div>
    })}

    </div>
}