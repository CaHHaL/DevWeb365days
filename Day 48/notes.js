//db.collection.updateOne({name:"value"},{$set:{age:25}})
//db.collection.updateMany({name:"value"},{$set:{age:25}})
// db.student.replaceOne({name:"Harsh"},{name:"Virat",marks:40})
// db.student.insertOne({name:"Avinash",performance:{marks:93,grade:"A"}})
//nested insertation
// db.student.find({"performance.marks":93})

//db.student.deleteOne({city:"Delhi"})
//deleting one with city==delhi

//db.student.deleteMany({marks:{$lt:50}})
// db.student.deleteMany({})
//to delete all the data

// db.dropdatabase
//to drop the database

//Getting started with Mongoose
//It's an library that creates an connection between mongodb and node.js run time environment
//It is a ODM(object data library) library
