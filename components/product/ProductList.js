import DetailItem from './Product';
import classes from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <DetailItem
          key={product.id}
          id={product.id}
          image= "https://wallpaperaccess.com/full/51367.jpg"
          name= {product.name}
          address= "Test Address"
        />
      ))}
    </ul>
  );
}

export default ProductList;