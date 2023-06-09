import { useNavigate } from 'react-router';
import './assets/other-products.css';

export default function OtherProducts(props){
    const navigate = useNavigate();

    const products = props.products.slice(0, 3);    
    return (<section className='other-products-section'>
        <h2>You may also like</h2>
        <div className='other-products'>
            {products.map((product, index) =>(
                <div className='other-product' key={index}>
                    <img src={product.image[props.device]}></img>
                    <span class='other-product-name'>{product.name}</span>
                    <button
                        className='button button-orange'
                        onClick={() => navigate('/product/' +  product.slug)}    
                    >See product</button>
                </div>
            ))}
        </div>
        
    </section>)
}