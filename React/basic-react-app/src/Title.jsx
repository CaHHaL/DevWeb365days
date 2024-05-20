import "./Title.css";
function Title({title}){
    let name="Cahal";
    let styles={backgroundColor:"cyan"};
    return (<div className="TitleTab" >
    <h3 style={styles}>{title}</h3>
    <h6>Learning React by {name}</h6>
    <p></p>
    <button>Sell</button>
     </div>)}
export default Title;
// export {Title}; to export multiply values with name 