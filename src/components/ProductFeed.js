import React from 'react'

function ProductFeed({ products }) {
    return (
        <div>
            <h1>Products here...</h1>
            {products.map(({id, title, description, category, image}) => (
                <p>{title}</p>
            ))}
        </div>
    )
}

export default ProductFeed