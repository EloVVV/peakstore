import { useContext } from 'react';
import { CartIcon } from '../../../../React Projects/react-sneakers/src/components/Icons/Icon';
import LogoImg from '../../../public/PeakStore-Full-Logo.svg';
import { ModalContext } from '../../pages/Root';

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);
    
    return (
        <button onClick={toggleModal} className="link-style">
            <CartIcon/> 
        </button>
    );
}

const Header = () => {
   
    return (
        <header className="header">
            <div className="header_container container">
                <a href="/home" className="logotype image-box">
                    <img src={LogoImg} alt="" className="logotype_img" />
                </a>
                
                <nav className="menu">
                    <li><a href="/home#aboutUs" className="link-style">О нас</a></li>
                    <li><a href="/home#catalog" className="link-style">Каталог</a></li>
                    <li><a href="/home#promotions" className="link-style">Акции</a></li>
                    <li><a href="/home#feedback" className="link-style">Новости</a></li>
                </nav>
                <div className="actions">
                    <CartButton/>
                    <span>/</span>
                    <a href="/auth" className="link-style">Выйти</a>
                    {/* <a href="/reg" className="link-style">Вход</a>
                    <span>/</span>
                    <a href="/auth" className="link-style">Регистрация</a> */}
                </div>
            </div>
            
        </header>
    )
}

export default Header;