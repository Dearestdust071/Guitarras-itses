// Basicos: useEffect, 
import { useMemo } from "react";
function Header({ cart, setCart }) {

  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const totalPrice = useMemo(() => (cart.reduce((acumulator, guitar) => acumulator + (guitar.price * guitar.quantity), 0)), [cart])



 

  function removeGuitar(id){
        const index = cart.findIndex((guitar => guitar.id === id));
        var guitarInCart = cart[index];
        if(guitarInCart.quantity === 1) return;
        guitarInCart.quantity -= 1;
        cart[index] = guitarInCart;
        setCart([...cart])
    }



    // metodo reduce UseMemo Filter para calcular (useMemo para que cargue primero (se actualize el carrito) y que cada uno de sus cambios calcule el total)
    // reduce para filtrar dependiendo de los parametros que les mandas uno el que estara sumando y otro el que estara sumando
    // reduce t ehace un calculo dependeindo de los parametros

    function addGuitar(id){
      const index = cart.findIndex((guitar => guitar.id === id));
      var guitarInCart = cart[index];
      if(guitarInCart.quantity >=5) return;
      guitarInCart.quantity += 1;
      cart[index] = guitarInCart;
      setCart([...cart])
  }

  // function addGuitar(id) {
  //   const updatedCart = cart.map((guitar) => {
  //     if (guitar.id === id && guitar.quantity <= 5) {
  //       return { ...guitar, quantity: guitar.quantity+1 };
  //       // return {...guitar, quantity: guitar.quantity++}; Esto no funciona porque???
  //     }
  //     return item
  //   })

  //   setCart(updatedCart);
  // }

  // function decreaseGuitar(id) {
  //   const updatedCart = cart.map((guitar) => {
  //     if (guitar.id === id && guitar.quantity >= 1) {
  //       return { ...guitar, quantity: guitar.quantity-1 };
  //       // return {...guitar, quantity: guitar.quantity++}; Esto no funciona porque???
  //     }
  //     return item
  //   })

  //   setCart(updatedCart);
  // }


  function removeFromCart(id){
    setCart( (prevCart) => prevCart.filter( (guitar) => guitar.id !== id ));
  }

  function clearCart(){
    setCart( [] )
  }



  return (
    <header className="py-5 header">



      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div
              className="carrito"
            >
              <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {/* Cambiar que el carrito esta vacio detectando cuando  */}


                <div>
                  {isEmpty ? (
                    <p className="text-center">El carrito esta vacio</p>
                  ) : (
                    <div>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((guitar) => (
                            <tr>
                              <td>
                                {guitar.id}
                              </td>
                              <td>
                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt={guitar.image} />
                              </td>
                              <td>{guitar.name}</td>
                              <td className="fw-bold">
                                ${guitar.price}
                              </td>
                              <td className="flex align-items-start gap-4">
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => removeGuitar(guitar.id)}
                                >
                                  -
                                </button>
                                {guitar.quantity}
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => addGuitar(guitar.id)}
                                >
                                  +
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  onClick={() => {removeFromCart(guitar.id)}}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}

                        </tbody>
                      </table>

                      <p className="text-end">Total pagar:  <span className="fw-bold">{totalPrice}$</span></p>
                      <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => clearCart()}>Vaciar Carrito</button>

                    </div>
                  )}
                </div>



              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

  )
}
export default Header