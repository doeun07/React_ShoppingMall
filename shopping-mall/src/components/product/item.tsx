// import { Product } from "../product.ts";
import { Link } from "react-router-dom"
import { Product } from "../../type"

const ProductItem = ({ category, image, price, rating, title, id }: Product) => (
    <li className="product-item">
        <Link to={`/products/${id}`}>
            <p className="product-item_category">{category}</p>
            <p className="product-item_title">{title}</p>
            <img className="product-item_image" src={image} />
            <span className="product-item_price">${price}</span>
            <span className="product-item_rating">{rating.rate}</span>
        </Link>
    </li>
)

export default ProductItem