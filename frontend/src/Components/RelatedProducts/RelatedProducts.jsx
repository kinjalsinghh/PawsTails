import Item from '../Items/Item'
import './RelatedProducts.css'
import data_product from '../Assets/data'

function RelatedProduct(props){
    return(
        <div className='relatedproducts'>
            <hr style={{border:"none", background:"#efefef", height:"2px", width:"100%"}}/>
           <h1>Related products</h1>
           <hr/>
           <div className='relatedproducts-item'>
             {data_product.map((item,i)=>{
                
                    return <Item key={i} name={item.name} id={item.id} image={item.image} medium_price={item.medium_price} medium_old_price={item.medium_old_price}/>
                   
             })}
           </div>
        </div>
    )
}
export default RelatedProduct;