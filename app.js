const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry no name added"]
    },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating:10,
  review: "Pretty solid as a fruit."
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "great fruit."
});

mango.save();
Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Updated JOhn fav fruit");
  }
})
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});
const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});
const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "634abbea21dca54552f7d9d3"}, {name: "Peach"}, function(err)
// {if(err){
//   console.log(err);
//
// }else {
//   console.log("Succefully updated ");
// }
// })

// Fruit.deleteOne({name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleetd the doc");
//   }
// })

Person.deleteMany({name: "John"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Succesfully delete all the doc");
  }
})





//     const option={ordered: true};
//
//     const result=await fruitsCollection.insertMany(docs,option)
//
//     console.log(`${result.insertedCount} documents were inserted`);
//     //finding that element which have score greater than 5
//     const query = { score: {$gt:5} }
//
//     const product = await fruitsCollection.findOne(query)
//     console.log("Found the document");
//     console.log(product)
//     //     if ((await cursor.count()) === 0) {
//     //       console.log("No documents found!")
//     //     }
//
//     await cursor.forEach((fruit) => {
//       //To print the inserted data
//       // console.log(fruit)
//     })
//     database.collection("posts").countDocuments(
//       {}, // filters
//       {}, // options
//       function (error, result) {
//         //   console.log(result)
//       }
//      )
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
//
// run().catch(console.dir)
