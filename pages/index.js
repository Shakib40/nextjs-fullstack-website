import ProductList from '../components/product/ProductList'
import { MongoClient } from 'mongodb'
import  Head from 'next/head'
import {Fragment} from 'react'


function HomePage(props) {
  return  (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>
      {/* <ProductList products={props.products} /> */}
     <h1>Home</h1>
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
          name: product.name,
          price: product.price,
          id: product._id.toString(),
       }))
     },
     revalidate: 1
  };
}

export default HomePage;