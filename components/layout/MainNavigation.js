import classes from './MainNavigation.module.css';
import NextLink from 'next/Link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><NextLink href='/'>Next.js</NextLink></div>
      <nav>
        <ul>
          
          <li>
            <NextLink href='/products'>Products</NextLink>
          </li>

          <li>
            <NextLink href='/product'>Product</NextLink>
          </li>

          <li>
            <NextLink href='/new-product'>New Product</NextLink>
          </li>
          
          <li>
            <NextLink href='/all-users'>All Users</NextLink>
          </li>

          <li>
            <NextLink href='/sign-up'>Sign Up</NextLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;