//new Product Design
import { MongoClient } from 'mongodb'
import ProductList from '../../components/products/ProductList'

import classes from './Product.module.css'

function ProductLayout(props) {
    return  (
        <section className={classes.container}>

            <div className={classes.leftContainer}>

            </div>

            <div className={classes.rightContainer}>
                <ProductList products={props.products}/>
            </div>

        </section>
    ) 
}

export async function getStaticProps() {
 
    const client =await MongoClient.connect(
      'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/nextjs-fullstack?retryWrites=true&w=majority'
    );
      
    const db = client.db()
    const productsCollection =  db.collection('products')  
    const  products = await productsCollection.find().toArray()   
    client.close()
    
    return {
       props: {
         products: products.map( product =>({
            id: product._id.toString(),
            name: product.name,
            price: product.price,
            description: product.description,
            ratings: product.ratings,
            images: product.images,
            category: product.category,
            brand: product.brand,
            gender: product.gender,
         }))
       },
       revalidate: 1
    };
}
  
export default ProductLayout;