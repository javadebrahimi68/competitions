import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = ({ data }) => {
    return (
        <>
            {data && data.map((item) => {
                <ProductItem item={item} />
            })}
   </>
    )
}
