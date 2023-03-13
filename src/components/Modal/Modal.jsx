import { useContext } from "react";
import { ModalContext } from "../../pages/Root";
import { IconDelete, IconExit } from "../Icons/Icons";

const Modal = () => {
    const {modal, toggleModal} = useContext(ModalContext);

    return (
        <section className={`overlay ${modal ? "active" : ""}`}>
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                    <IconExit onClick={toggleModal}/>
                </header>

                <div className="modal-body">
                    <div className="item">
                        <div className="count">
                            <p>12x</p>
                            
                        </div>
                        <div className="item-image-box image-box">
                                <img src="../../public/products/Rectangle 2.png" alt="" className="item_img" />
                            </div>
                            <div className="text-content">
                                <div className="item-headline">
                                    <p className="item-name">
                                        Название товара
                                    </p>
                                    <div className="item-price">
                                        1 999 ₽
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <div className="actions-count">
                                        <div className="action-style">
                                            +
                                        </div>
                                        <div className="action-style">
                                            -
                                        </div>
                                    </div>
                                    <div className="action-delete action-style">
                                        <IconDelete/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <footer className="modal-footer">
                    <div className="full_price">
                        <p>Всего:</p>
                        <p className="price">1 299 ₽</p>
                    </div>
                    <button className="button-style">Заказать</button>
                </footer>
            </div>
            <div onClick={toggleModal} className="area"></div>
        </section>
    );
}

export default Modal;