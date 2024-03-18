// Getting started with mongoDB
//Understanding the BSON format
//The difference of JSON and BSON format
//JSON----UTF-8 encoding,Data supported--string,boolean,number,array,object,null---human readable form ---key and value pair
//BSON ---binary encoding, Data supported--string,boolean,BinData and many more,machine readable form(binary)
//BSON has collection and documents
//db's are saved in the form of arrays[] and it generates automatic id's for each inserations
//db.collection.insertOne({})----for inserting single row
//db.collection.insertMany([{},{},{}])---for inserting multiple rows
//db.collection.find()---to show all the data in the collection--Shows the cursor that's the data refernce--[{}]
//db.collection.findOne()---to show only single row----Shows the original document---{}
