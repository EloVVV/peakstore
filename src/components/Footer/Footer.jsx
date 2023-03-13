import LogoImg from '../../../public/PeakStore-Full-Logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <div className="logotype image-box">
                    <img src={LogoImg} alt="" className="logotype_img" />
                </div>
                
                <div className="actions footer-links">

                    <a href="https://vk.com/elovdesign" className="link-style social-link VK-link">VK</a>
                    <a href="https://www.youtube.com/@elovdesign" className="link-style social-link YT-link">YT</a>
                    <a href="https://t.me/+2LUIzLt2aOcwM2Zi" className="link-style social-link TG-link">TG</a>

                    <a href="#" className="link-style other-link">Ссылка на оферту</a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;