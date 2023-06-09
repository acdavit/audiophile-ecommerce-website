import './assets/category-page.css'
import allItems from '../../data.json';
import Item from './item/Item';
import Categories from '../../shared-components/categories/Categories';
import BestGear from '../../shared-components/best-gear/BestGear';

export default function CategoryPage({category}){
    const filteredItems = allItems.filter(item => item.category === category);
    const newItems = filteredItems.filter(item => item.new)
    const oldItems = filteredItems.filter(item => !item.new);
    const items = [...newItems, ...oldItems];    

    return (<div className='category-page'>
        <div className='full-width category-title'>
            <h1>{category}</h1>
        </div>
        {items.map((item, index) => <Item item={item} index={index} key={index}/>)}
        <Categories/>
        <BestGear/>
    </div>)
}