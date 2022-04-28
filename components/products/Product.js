import classes from './Product.module.css'
import {useRouter} from 'next/router'

function Product(props) {

    const router = useRouter();

    function showDetailsHandler() {
      router.push('/'+ props.id )
    }

    return (

        <section className = {classes.container} onClick={showDetailsHandler}>
            <img className = {classes.image} 
                src = {props.images[0]}
                alt = {props.name}
            />

            <div className = {classes.details}>
                <h1 className = {classes.title}>{props.name}</h1>
                <h1 className = {classes.title2}>Price : {props.price}</h1>
                <h1 className = {classes.title2}>Rating:{props.ratings}</h1>
            </div>
             
        </section>
    )
}

export default Product;