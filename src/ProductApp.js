import React, {useState} from 'react'


const initialProduct = {
    title: "Titulo",
    description: "Descripción",
}
const ProductApp = () => {


    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property, value) => {
        setProduct({
          ...product,
          [property]: value,
        });
    }

    return (
      <div>
        <button onClick={() => updateProduct("title","Nuevo titulo")}>Actualizar</button>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <pre>
            {
                JSON.stringify(product, null, 2)
            }
        </pre>
      </div>
    );
}

export default ProductApp
