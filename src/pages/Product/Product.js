const Product = ({match}) => {
    const {params} = match
    console.log(params.id)
    return (
        <h2>One target Product</h2>
     );
}

export default Product;