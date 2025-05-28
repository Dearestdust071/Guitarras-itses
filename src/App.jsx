
import GuitarCard from './components/GuitarCard'
import Header from './components/Header'
import { db } from './data/db'
import { useState } from 'react'

function App() {
  const nuevoData = { id: 1, name: 'Lukather', image: 'guitarra_01', description: 'Morbi222 ornare augue nisl, vel elementum dui moll…el. Curabitur non ex id eros fermentum hendrerit.', price: 299 }

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function setPermStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))

  }


  setPermStorage();

  // Mandarle unicamente al cart al localStorage (como array)


  // const nuevaDB = [...db,nuevoData]

  // Si haces esto genera demasiados renders porque primero se cera y se llama o algo asi
  // setData(nuevaDB)


  return (

    <>
      <Header
        key={cart.id}
        cart={cart}
        setCart={setCart}
        setPermStorage={setPermStorage}
      />



      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map(
            (guitar) => (
              <GuitarCard
                // Al pasar props debemos de pasar una key que es su id
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                setCart={setCart}
                setPermStorage={setPermStorage}
              />
            )
          )}

        </div>

      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">

          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
