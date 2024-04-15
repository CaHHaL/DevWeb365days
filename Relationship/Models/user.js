const mongoose =require("mongoose");
const {Schema}=mongoose;

main().then(()=>{
    console.log("connection.successful!");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            //_id is used to mention that do we need id
        location:String,
        city:String,
},],
});

const User = mongoose.model("User",userSchema);


const addUsers = async()=>{
    let user1 = new User({
        username:"sherlockholmes",
        addresses:[{
            location:"Gelakey Sivasagar",
            city:"Sivasagar",
        }]
    });
    user1.addresses.push({location:"Jorhat near pnb bank",city:"Jorhat"});
    let result=await user1.save();
    console.log(result);
};
addUsers();