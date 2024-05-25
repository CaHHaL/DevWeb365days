function Hello(){
    console.log("Hello!");
}
function bye(){
    console.log("Bye Bye!");
}
function formSubmit(event){
    event.preventDefault();
    console.log("Form submitted");

}

export default function Button(){
    return (
        <div>
            
            <button onClick={Hello}>Click me!</button>
        <p onClick={bye}>Click me to say bye!</p>
        <p onMouseOver={bye}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, laboriosam. Minima corrupti non blanditiis nostrum possimus? Asperiores quis amet, a fugiat quae consequuntur error recusandae voluptates officiis ad nemo quos.</p>
        <form >
        <input type="text" />
        <button onClick={formSubmit}>Submit</button>
        </form>
        
        </div>
    );
}