import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../data/categories";
import formatMoney from "../../utils/formatMoney";
import { IconProductArrow } from "../Icons/Icons";

const Product = ({items}) => {
    
    return (
        <div key={items.id} className={`product ${items.promotion > 0 ? "promotions" : ""}`}>
            <NavLink to={`/single/${items.id}`}>
                <div className="product_image-box image-box">
                    <div className="promotion_box">
                        <p className="promotion-title">-{items.promotion}%</p>
                    </div>
                    <img src={items.img} alt="" className="product_img" />
                </div>
            </NavLink>
            <div className="product_text-content">
                <div className="product_headline">
                    <p className="product_category">{CATEGORIES[items.category]}</p>
                    <p className="product_name">{items.name}</p>
                </div>
                <div className="product_actions">
                    <div className="product_price_content">
                        <p className="product_old_price">{formatMoney(items.price)}</p>
                        <p className="product_price">{items.promotion > 0 ? formatMoney((items.price * (100 - items.promotion)) / 100) : formatMoney(items.price)}</p>
                    </div>
                    <NavLink to={`/single/${items.id}`}>
                        <div className="product_btn">
                            <p>Перейти</p>
                            <IconProductArrow/>
                        </div>
                    </NavLink>

                   
                </div>
            </div>
            
        </div>
    );
}

// const Product = ({items, category}) => {

//     const data = items.filter(item => item.category.includes(category))


//     return (
//         data.map((item) => {
//             return (
//                 <div key={item.id} className="product">
//                     <NavLink to={`/single/${item.id}`}>
//                         <div className="product_image-box image-box">
//                             <img src={item.img} alt="" className="product_img" />
//                         </div>
//                     </NavLink>
//                     <div className="product_text-content">
//                         <div className="product_headline">
//                             <p className="product_category">{CATEGORIES[item.category]}</p>
//                             <p className="product_name">{item.name}</p>
//                         </div>
//                         <div className="product_actions">
//                             <p className="product_price">{item.price} ₽</p>
//                             <NavLink to={`/single/${item.id}`}>
//                                 <div className="product_btn">
//                                     <p>Перейти</p>
//                                     <IconProductArrow/>
//                                 </div>
//                             </NavLink>

                           
//                         </div>
//                     </div>
                    
//                 </div>
//             );
//         })
//     );
// }

export default Product;