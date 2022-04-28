import MainNavigation from '../layout/MainNavigation';
import classes from './ProductLayout.module.css';

function ProductLayout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default ProductLayout;