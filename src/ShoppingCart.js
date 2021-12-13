import React, {useState} from "react";

const initialCart = [
  {
    id: 1,
    title: "Product#1",
    desciption: "Desc#1",
  },
  {
    id: 2,
    title: "Product#2",
    desciption: "Desc#2",
  },
];


const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productoId) => {

        const changeCart = cart.filter((product) => product.id !== productoId);

        setCart(changeCart);
    }

    const agregarProducto = (newProduct) => {

         const changeCart = [newProduct, ...cart];
         setCart(changeCart);
    }

    const updateProduct = (editProduct) => {
        const changeCart = cart.map((product) => 
            product.id === editProduct.id
            ? editProduct
            : product
            );
        setCart(changeCart);
    }

    return (
      <div>
        <button
          onClick={() =>
            agregarProducto({
              id: Date.now(),
              title: "Nuevo Titulo",
              desciption: "Nueva descripción",
            })
          }
        >
          Agregar
        </button>

        <button
          onClick={() =>
            updateProduct({
              id: 1,
              title: "Edit Titulo",
              desciption: "Edit descripción",
            })
          }
        >Editar</button>

        {cart.map((product) => (
          <div key={product.id}>
            <h1>
              {product.id} - {product.title}
            </h1>
            <p>{product.desciption}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
}

export default ShoppingCart
