import './product.css';
import Price from "./price.jsx";
function Product({title,idx}){
    let oldPrice=["62,999","60,199","53,499","48,999"];
    let newPrice=["61,999","59,199","52,499","47,999"];
    let description=[["intel i7 13th Gen processor","16 GB RAM","FigerPrint Sensor"],["intel i7 11th Gen processor","16 GB RAM","FigerPrint Sensor"],["intel i5 12th Gen processor","8 GB RAM","FigerPrint Sensor"],["intel i5 11th Gen processor","8 GB RAM","22 hrs battery backup"]];
    return(
        <>
           <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>{description[idx][2]}</p>
            <p><Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/></p>
           </div>
        </>
    );
}
export default Product;