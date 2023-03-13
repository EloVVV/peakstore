import { NavLink } from "react-router-dom";

const Slide = ({slide}) => {
    return (
        <div className="slide">
            <div className="slide_text-content">
                <h1>{slide.title}</h1>
                <p>
                    {slide.description}
                </p>
                <NavLink className="button-style" to={slide.button.url}>
                    {slide.button.text}
                </NavLink>
            </div>
            <span className="darken_img"></span>
            <img src={slide.image} alt={slide.title} className="slide_img_bg" />
        </div>
    );
}

export default Slide;