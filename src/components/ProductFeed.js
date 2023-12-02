import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    return (
        <div>
            <h1>Products here...</h1>
            {products.map(({id, title, description, category, image, price}) => (
                <Product 
                key={id}
                id={id} 
                title={title} 
                description={description} 
                category={category} 
                image={image}
                price={price}
                />
            ))}
        </div>
    )
}

export default ProductFeed