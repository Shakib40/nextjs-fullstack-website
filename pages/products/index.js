import ProductList from '../../components/product/ProductList'
import { MongoClient } from 'mongodb'
import  Head from 'next/head'
import {Fragment} from 'react'

function Product(props) {
  return  (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>

      <section >
        
        <div >

        </div>
        
        <div >

          <ProductList products={props.products} />

        </div>

      </section>

    </Fragment>
  )
}

export async function getStaticProps() {
 
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/nextjs-fullstack?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const productsCollection =  db.collection('products')
  
  const  products = await productsCollection.find().toArray()
  
  // console.log("Products is: " +  products)
  
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

export default Product;