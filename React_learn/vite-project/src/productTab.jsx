import Product from './product.jsx';
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        <div style={styles}>
       
            <Product title="Asus Vivobook 15x" idx={0}/>
            <Product title="Asus Vivobook 15 " idx={1}/>
            <Product title="Asus Vivobook 14 " idx={2}/>
            <Product title="Asus Vivobook 13 " idx={3}/>
        </div>
    );
}
export default ProductTab;