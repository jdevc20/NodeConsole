let id = Symbol("id");

const libraryA = {
    id: "uniqueID",
    // ... other properties
  };
  
  const libraryB = {
    id: "uniqueID", // This would overwrite libraryA's id if using strings
    // ... other properties
  };


  console.log(libraryA);
  console.log(libraryB);

  libraryB.id = "NewId";

 //Symbols Hidden Properties
 let user = { // belongs to another code
    name: "John"
  };
  
let user_id = Symbol("id");

user[user_id] = 1;

//alert( user[user_id] ); // we can access the data using the symbol as the key



//Declaring symbols
let x = {
    a: 1,
}

let y = Symbol("external_id");
x[y] = 1820571
x[Symbol("external_id2")] = 1696;

