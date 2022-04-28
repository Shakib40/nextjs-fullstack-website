import Product from './Product'
import classes from './ProductList.module.css'

function ProductList( props ) {
  return (
    <section className = {classes.productList}>
      {props.products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name= {product.name}
        price= {product.price}
        description= {product.description}
        ratings = {product.ratings}
        images = {product.images}

      />
    ))}
    </section>
  )
}

export default ProductList