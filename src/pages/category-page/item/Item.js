import { useNavigate } from 'react-router';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import './assets/item.css';

export default function Item({item, index}){
    const {width} = useWindowDimensions();
    const device = (width < 768 ? 'mobile' : (width < 1200 ? 'tablet' : 'desktop'));
    const navigate = useNavigate();

    const directionStyles = (
        device === 'desktop' ? 
            (index % 2 === 0 ?
                {
                    item: {flexDirection: 'row'},
                    textContainer: {
                        alignItems: 'flex-start',
                        textAlign: 'left'
                    }, 
                }
                :
                {
                    item: {flexDirection: 'row-reverse'},
                    textContainer: {
                        alignItems: 'flex-end',
                        textAlign: 'right'
                    }, 
                }
            ):
            {}
    )

    return (<div className='item' style={directionStyles.item}>
        <img src={item.categoryImage[device]}/>
        <div className='item-text' style={directionStyles.textContainer}>
            {item.new ? 
                <span className='new-product'>
                    New Product
                </span>
                :<></>
            }
            
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <button 
                className='button button-orange'
                onClick={() => navigate('/product/' + item.slug)}
            >See Product</button>
        </div>
    </div>)
}