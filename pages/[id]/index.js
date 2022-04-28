import {MongoClient, ObjectId} from 'mongodb'
import {Fragment} from 'react'
import  Head from 'next/head'
import ProductDetail from '../../components/products/ProductDetail'

function FindById(props){
    return(
        <Fragment>
          
          <Head>
            <title>{props.detailData.name}</title>
            <meta 
              name="description" 
              content={props.detailData.description}
            />
          </Head>

          <ProductDetail 
            name= {props.detailData.name}
            description = {props.detailData.description}
          />
        </Fragment>
     )
}


export async function getStaticPaths() {

    const client =await MongoClient.connect(
        'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/nextjs-fullstack?retryWrites=true&w=majority'
    );
        
    const db = client.db()
    const productsCollection =  db.collection('products')
    const product = await productsCollection.find({},{_id: 1}).toArray();
    client.close();
 

    return {
       fallback: 'blocking',
       paths: product.map(meetup => ({
          params: {
            id: meetup._id.toString() // here id is folder name which is provided there
          }
       }))
    }
}
 

export async function getStaticProps(context) {
    
    const productId = context.params.id
 
    const client =await MongoClient.connect(
        'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/nextjs-fullstack?retryWrites=true&w=majority'
    );
        
    const db = client.db()
    const productsCollection =  db.collection('products')

    const selectID = await productsCollection.findOne({
        _id: ObjectId(productId) 
    });
    client.close();
 
    return {
       props: {
          detailData:{
            id: selectID._id.toString(),
            name:selectID.name,
            price:selectID.price,
            description:selectID.description,
            ratings:selectID.ratings,
            images:selectID.images,
            category:selectID.category,
            brand:selectID.brand,
            gender:selectID.gender,
            companydetails:selectID.companydetails,
            sizeinfo:selectID.sizeinfo,
            Stock:selectID.Stock,
            numOfReviews:selectID.numOfReviews,
          }
       }
    }
}

export default FindById;