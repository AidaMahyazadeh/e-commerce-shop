import { useContext,useEffect,useState,Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card';
import './category.styles.scss';

function Category(){
const {category}=useParams();
const { categoriesMap}=useContext(CategoriesContext);
const [products,setProducts]=useState([]);
useEffect(()=>{
setProducts(categoriesMap[category])
},[categoriesMap,category])

return(
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
       <div className='category-container'>
        {
           products && products.map((product)=> <ProductCard key={product.id} product={product} />)
        }
    </div>
    </Fragment>
    
)


}


export default Category;