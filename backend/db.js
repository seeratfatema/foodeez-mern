const mongoose = require('mongoose');

const mongoURI = 'mongodb://seerat786fatema:seerat@cluster0-shard-00-00.ksj7q.mongodb.net:27017,cluster0-shard-00-01.ksj7q.mongodb.net:27017,cluster0-shard-00-02.ksj7q.mongodb.net:27017/Foodeezmern?ssl=true&replicaSet=atlas-5h2dpn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

// // const mongoDB = async () => {
// //     await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result) => {
// //         if(err) console.log("---",err)
// //         else{
// //             console.log(("connected"));
// //             const fetched_data = await mongoose.connection.db.collection("food_items")
// //             fetched_data.find({}).toArray( async function( err,data){
// //                 const foodCategory =  await mongoose.connection.db.collection("foodCategory");
// //                 foodCategory.find({}).toArray(function(err,catData){
// //                     if(err) console.log(err);
// //                     else {
// //                        global.food_items = data;
// //                        global.foodCategory = catData;
                       
// //                     }
// //                 })
               
                 
// //             })
       
// //         }
        
// //     })
   
// // }

// // module.exports = mongoDB;

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected");

        // Fetch data from 'food_items' collection
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        global.food_items = fetchedData;

        // Fetch data from 'foodCategory' collection
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = foodCategory;
        
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
}

module.exports = mongoDB;
