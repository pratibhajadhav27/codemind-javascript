console.log("===== fetch() API =======");
const responseData = await fetch("https://fakestoreapi.com/products");
const products = await responseData.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Count: ${product.rating.count}`);
}