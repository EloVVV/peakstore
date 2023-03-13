import { useState } from "react";
import categories from "../Items/categories";
import products from "../Items/products";

const Filter = ({setItems, setCategory}) => {
    const [filterItems, setFilterItems] = useState(categories);

    
    const onClickFilterHandle = (category) => {
        setCategory(category)
    };

    return (
        filterItems.map((item) => {
            return (
                <div key={item.id} onClick={() => onClickFilterHandle(item.category)} className="filter">
                    <p className="link-style">
                        {item.name}
                    </p>
                </div>
            );
        })
    );
}

export default Filter;