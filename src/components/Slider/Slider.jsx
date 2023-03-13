import { useState } from "react";
import Slide from "./Slide/Slide";

// import banner from "../../../public/products/Rectangle 2.png";
import { IconSliderArrow } from "../Icons/Icons";
import Dot from "./Dot/Dot";

import img1 from '../../../public/products/Rectangle 2.png';
import img2 from '../../../public/products/Rectangle 3.png';
import img3 from '../../../public/products/Rectangle 4.png';

const initialItemsState = [
    {
        id: 1,
        title: "Atomic Heart",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eligendi saepe expedita itaque earum, adipisci voluptas, consequuntur praesentium excepturi vel debitis blanditiis ipsum suscipit cumque fugiat sed incidunt veritatis explicabo.",
        image: img1,
        button: {
            url: "/single/1",
            text: "Перейти"
        }
    },
    {
        id: 2,
        title: "Rainbow Six Siege",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eligendi saepe expedita itaque earum, adipisci voluptas, consequuntur praesentium excepturi vel debitis blanditiis ipsum suscipit cumque fugiat sed incidunt veritatis explicabo.",
        image: img2,
        button: {
            url: "/single/2",
            text: "Перейти"
        }
    },
    {
        id: 2,
        title: "Ne pomnu",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eligendi saepe expedita itaque earum, adipisci voluptas, consequuntur praesentium excepturi vel debitis blanditiis ipsum suscipit cumque fugiat sed incidunt veritatis explicabo.",
        image: img2,
        button: {
            url: "/single/3",
            text: "Перейти"
        }
    }
];


const Slider = () => {
    const [items, setItems] = useState(initialItemsState);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <div className="slider">
            <button onClick={next} className="slide-next-btn image-box slide-btn">
                <IconSliderArrow/>
            </button>
            <button onClick={prev} className="slide-prev-btn image-box slide-btn">
                <IconSliderArrow/>
            </button>
            <div className="dots">
                {/* <Dot slides={items} dot={items[currentIndex]} status="active"/> */}
            </div>
            <div className="slider-wrapper">
                <Slide slide={items[currentIndex]} />
            </div>
        </div>

        
    );
}

export default Slider;