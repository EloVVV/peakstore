import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import products from "../components/Items/products";
import Product from "../components/Product/Product";
import { NavLink } from "react-router-dom";
import { IconCart, IconProductArrow } from "../components/Icons/Icons";
import { CATEGORIES } from "../data/categories";
import formatMoney from "../utils/formatMoney";

const SinglePage = () => {
    const params = useParams();
    const [items, setItems] = useState(products);

    const item = items.filter(item => item.id == params.id);

    return(
        <section className="single_container">
            <div className="product_headline container">
                <p className="product_category">{CATEGORIES[item[0].category]}</p>
                <h2 className="product_name">{item[0].name}</h2>
            </div>
            <div href="" className="product_image-box image-box">
                <img src={item[0].img} alt="" className="product_img" />
            </div>
            <div className="product_content container">
                <div className="product_description">
                    <h2>Описание</h2>
                    <div className="description_content">
                        <p>
                        Из темных глубин ввысь взлетает дракон.Экшен-RPG в стиле темного фэнтези, посвященное Троецарствию. От Team NINJA, разработчиков Nioh.184 год, Китай, правление Поздней Хань. Страна охвачена хаосом и разрушением. 
                        </p>
                        <p>
                        Династия, процветавшая много лет, почти рухнула.Wo Long: Fallen Dynasty — это захватывающая история о безымянном ополченце, пытающемся выжить в мрачной фэнтезийной версии Китая времен Поздней Хань, где три царства преследуют демоны. Игрокам предстоит сражаться с жуткими тварями и вражескими солдатами, изучать китайские боевые искусства и пытаться найти силу в самих себе.
                        </p>
                        <p>
                        Wo Long — это «крадущийся дракон», то есть человек, величие которого пока скрыто. Это рассказ об офицерах, впоследствии ставших героями, а также история постепенного развития главного героя, который начинает игру буквально никем.
                        </p>
                    </div>
                </div>
                <div className="product_details">
                    <h2>Детали игры</h2>
                    <div className="details_content">
                        <div className="detal">
                            <p className="title">Жанр:</p>
                            <div className="detal-info">
                                <p>Первая подробность</p>
                                <p>Вторая подробность</p>
                                <p>Третья подробность</p>
                            </div>
                        </div>

                        <div className="detal">
                            <p className="title">Работает на:</p>
                            <div className="detal-info">
                                <p>Первая подробность</p>
                                <p>Вторая подробность</p>
                                <p>Третья подробность</p>
                            </div>
                        </div>

                        <div className="detal">
                            <p className="title">Дата выхода:</p>
                            <div className="detal-info">
                                <p>Первая подробность</p>
                                <p>Вторая подробность</p>
                                <p>Третья подробность</p>
                            </div>
                        </div>

                        <div className="detal">
                            <p className="title">Издатель:</p>
                            <div className="detal-info">
                                <p>Первая подробность</p>
                                <p>Вторая подробность</p>
                                <p>Третья подробность</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_variants container">
                <h2>Издания</h2>
                <div className="variants">
                    <div className="variant">
                        <div className="variant_image-box image-box">
                            <img src={item[0].img} alt="" className="variant_img" />
                        </div>
                        <div className="variant_text-content">
                            <div className="variant_main-info">
                                <div className="variant-title">
                                    {item[0].name}
                                </div>
                                <div className="variant-info">
                                    <div className="variant-info-box">
                                        <p className="title">Активация:</p>
                                        <p className="description">Steam</p>
                                    </div>

                                    <div className="variant-info-box">
                                        <p className="title">Регион:</p>
                                        <p className="description">Россия, страны СНГ</p>
                                    </div>

                                    <div className="variant-info-box">
                                        <p className="title">Язык:</p>
                                        <p className="description">Русский (Интерфейс) / Английский (Озвучка)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="variant_price">
                            {item[0].promotion > 0 ? formatMoney((item[0].price * (100 - item[0].promotion)) / 100) : formatMoney(item[0].price)}
                            </div>
                        </div>
                        <div className="variant-actions">   
                           
                            <div className="variant_btn button-style">
                                <IconCart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div key={item[0].id} className="product">
                <div href="" className="product_image-box image-box">
                    <img src={item[0].img} alt="" className="product_img" />
                </div>
                <div className="product_text-content">
                    <div className="product_headline">
                        <p className="product_category">{item[0].category}</p>
                        <p className="product_name">{item[0].name}</p>
                    </div>
                    <div className="product_actions">
                        <p className="product_price">{item[0].price} ₽</p>
                        <NavLink to={`/single/${item[0].id}`}>
                            <div className="product_btn">
                                <p>Перейти</p>
                                <IconProductArrow/>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div> */}
        </section>
      
    );
}

export default SinglePage;