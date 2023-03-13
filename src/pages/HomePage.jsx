import { useState } from "react";
import Filter from "../components/Filter/Filter";
import { IconDelete, IconCart, IconEmail, IconExit, IconLocation, IconPhone, IconProductArrow, IconSearch, IconSliderArrow } from "../components/Icons/Icons";
import products from "../components/Items/products";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";



const HomePage = () => {

    const [items, setItems] = useState(products);
    const [category, setCategory] = useState('')

    const [promotions, setPromotions] = useState(products);

    const filteredPromotions = promotions.filter((item) => item.promotion > 0);

    const onClickAllHandle = () => {
        setItems(products);
    };

    

    const [query, setQuery] = useState("");
  
    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(query, category));

    const onChangeQuery = (event) => {
        setQuery(event.target.value.toLowerCase());
    }


    return (
        <div className="home">
            <section id="aboutUs" className="collections">
                <Slider/>
            </section>
            <section id="catalog" className="catalog">
                <div className="catalog_container container">
                    <div className="catalog_header">
                        <h1>Каталог</h1>
                        <div className="filter">
                            {/* <Filter setItems={setItems} setCategory={setCategory}/> */}
                            {/* <a href="#" className="link-style">Игры</a>
                            <a href="#" className="link-style">Программы</a> */}
                        </div>
                        <div className="search-box">
                            <div className="search-box-img image-box">
                                <IconSearch/>
                            </div>
                            <input 
                            value={query}
                            onChange={(e) => onChangeQuery(e)}
                            type="text" 
                            placeholder="Поиск..." 
                            className="search-box_input" />
                        </div>
                    </div>
                    <div className="catalog_content">
                        {
                            filteredProducts.length ?
                            (
                                filteredProducts.map((product) => {
                                    return <Product key={product.id} items={product}/>
                                })
                            )
                            :
                            <h2>По вашему запросу "{query}" ничего не найдено</h2>
                        }
                        {/* <Product setItems={setItems} items={items} category={category}/> */}
                    </div>
                </div>
            </section>
            <section id="promotions" className="catalog promotions">
                <div className="catalog_container container">
                    <div className="catalog_header">
                        <h1>Акции</h1>
                    </div>
                    <div className="catalog_content">
                        {
                             filteredPromotions.map((product) => {
                                return <Product key={product.id} items={product}/>
                            })
                        }

                        {/* <div className="product promotion_product">
                            <a href="#" className="product_image-box image-box">
                                <div className="promotion_box">
                                    <p className="promotion-title">20%</p>
                                </div>
                                <img src="public/products/Rectangle 2.png" alt="" className="product_img" />
                            </a>
                            <div className="product_text-content">
                                <div className="product_headline">
                                    <p className="product_category">Категория</p>
                                    <p className="product_name">Имя товара</p>
                                </div>
                                <div className="product_actions">
                                    <p className="product_price">1 999 ₽</p>
                                    <a href="#" className="product_btn">
                                        <p>Перейти</p>
                                        <IconProductArrow/>
                                    </a>
                                </div>
                            </div>
                           
                        </div> */}
                    </div>
                </div>
            </section>

            <section id="feedback" className="feedback">
                <div className="feedback_container">
                    <div className="feedback_box-container container">
                        <div className="feedback_text-box">
                            <h1>Подписка на рассылку</h1>
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Eget mattis proin mauris orci gravida. Mauris bibendum aliquam ultrices augue mauris lacus. Dui ut eleifend egestas amet nec luctus morbi. Egestas tincidunt libero nisi eget ullamcorper. Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="feedback_actions">
                                <div className="search-box">
                                    <div className="search-box-img image-box">
                                        <IconEmail/>
                                    </div>
                                    <input type="text" placeholder="Email..." className="search-box_input" />
                                </div>
                                <a href="#" className="button-style">Отправить</a>
                            </div>
                        </div>
                    </div>
                    <span className="darken_img"></span>
                    <img src="public/products/Rectangle 4.png" alt="" className="feedback_bg" />
                </div>
            </section>
        </div>
    )
}

export default HomePage;