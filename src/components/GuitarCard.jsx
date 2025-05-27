import { useState } from "react"


function GuitarCard({guitar, setCart, cart}){
    // console.log(`Desde guitarCard = ${guitar}`);

    const {id, name, image, description, price} = guitar;
    // quantity:1 no existe dentro del carrito agrega solo 1 de valor
    // En caso de que exista aumentara quantity en 1 
    // const {cart} = cart;


    function addGuitar(){
        var id_guitarra = cart.findIndex(guitar=> guitar.id === id)
        var guitarra_Cart;
        if(id_guitarra >= 0){
            // Limitando la cantidad del carrito a 5
            if(cart[id_guitarra].quantity >= 5) return;
            guitarra_Cart = cart[id_guitarra];
            guitarra_Cart.quantity += 1; 
            // quantity += primero modifica el valor de la variable y despues nos regresa el resultado
            // quantity =+ no se guardaria bien
            
            cart[id_guitarra] = guitarra_Cart;
            setCart([...cart])
        }else{
            
            const Guitar = {
        id: id,
        name: name,
        image: image,
        description: description,
        price: price,
        quantity: 1,
    }
    setCart([...cart, Guitar])
        }
        console.log(cart)
    }

    return(
<>

    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt={image} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    // onClick={() => setCart([...cart, Guitar])}
                    onClick={() => addGuitar()}
                >Agregar al Carrito</button>
            </div>
        </div>  
        </>)
}

export default GuitarCard