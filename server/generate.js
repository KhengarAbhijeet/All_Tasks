var faker = require('faker');
var database = { products: []};

for (var i = 1; i<= 30; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    brand: faker.commerce.department(),
    description: faker.lorem.sentences(),
    imageUrl: "../src/assets/web/images/c7bde508f128d7b1fd10a224d18a5333.png",
    price: faker.commerce.price(),
    quantity: faker.random.number(),
    rating: 4,
    reviews:faker.lorem.sentences()
  });
}

console.log(JSON.stringify(database));
