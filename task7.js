// API URL
const apiURL = "https://fakestoreapi.com/products";

// Fetch all products
fetch(apiURL)

    // Convert response into JSON
    .then(response => response.json())

    // Get the products
    .then(products => {

        console.log("========== ALL PRODUCTS ==========");

        // Display title, price and category
        products.forEach(product => {

            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------------");

        });


        // =====================================
        // MAP()
        // =====================================

        // Create a new array containing
        // only title and price
        const productDetails = products.map(product => {

            return {
                title: product.title,
                price: product.price
            };

        });

        console.log("========== MAP RESULT ==========");
        console.log(productDetails);


        // =====================================
        // FILTER()
        // =====================================

        // Find products with price > $100
        const expensiveProducts = products.filter(product => {

            return product.price > 100;

        });

        console.log("========== PRODUCTS ABOVE $100 ==========");
        console.log(expensiveProducts);


        // =====================================
        // FIND()
        // =====================================

        // Find first electronics product
        const electronicsProduct = products.find(product => {

            return product.category === "electronics";

        });

        console.log("========== FIRST ELECTRONICS PRODUCT ==========");
        console.log(electronicsProduct);


        // =====================================
        // REDUCE()
        // =====================================

        // Calculate total price
        const totalPrice = products.reduce((total, product) => {

            return total + product.price;

        }, 0);

        console.log("========== TOTAL PRICE ==========");
        console.log(`$${totalPrice.toFixed(2)}`);


        // =====================================
        // SORT()
        // =====================================

        // Sort from highest price to lowest
        const sortedProducts = [...products].sort((a, b) => {

            return b.price - a.price;

        });

        console.log("========== HIGHEST TO LOWEST ==========");

        sortedProducts.forEach(product => {

            console.log(`${product.title} - $${product.price}`);

        });

    })

    // Handle API error
    .catch(error => {

        console.log("Something went wrong!");
        console.log(error);

    })

    // Always executes
    .finally(() => {

        console.log("========== API PROCESS COMPLETED ==========");

    });


//==============Task 2====================//



// Function to display dashboard
function displayDashboard(products) {

    console.log("===== PRODUCT DASHBOARD =====");
    console.log("");


    // Total products
    console.log(`Total Products: ${products.length}`);
    console.log("");


    // =====================================
    // CATEGORY COUNT
    // =====================================

    const electronics = products.filter(product => {

        return product.category === "electronics";

    });

    const jewelery = products.filter(product => {

        return product.category === "jewelery";

    });

    const mensClothing = products.filter(product => {

        return product.category === "men's clothing";

    });

    const womensClothing = products.filter(product => {

        return product.category === "women's clothing";

    });


    console.log(`Electronics: ${electronics.length}`);
    console.log(`Jewelery: ${jewelery.length}`);
    console.log(`Men's Clothing: ${mensClothing.length}`);
    console.log(`Women's Clothing: ${womensClothing.length}`);

    console.log("");


    // =====================================
    // HIGHEST PRICE
    // =====================================

    const sortedProducts = [...products].sort((a, b) => {

        return b.price - a.price;

    });

    const highestPrice = sortedProducts[0].price;

    console.log(`Highest Price: $${highestPrice}`);


    // =====================================
    // LOWEST PRICE
    // =====================================

    const lowestPrice = sortedProducts[sortedProducts.length - 1].price;

    console.log(`Lowest Price: $${lowestPrice}`);


    // =====================================
    // AVERAGE PRICE
    // =====================================

    const totalPrice = products.reduce((total, product) => {

        return total + product.price;

    }, 0);

    const averagePrice = totalPrice / products.length;

    console.log(`Average Price: $${averagePrice.toFixed(2)}`);

}


// Fetch products
fetch(apiURL)

    .then(response => response.json())

    .then(products => {

        displayDashboard(products);

    })

    .catch(error => {

        console.log("API Error:", error);

    })

    .finally(() => {

        console.log("");
        console.log("Dashboard completed.");

    });


    //=================Task 3================

    const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";


// =====================================
// FETCH USERS
// =====================================

fetch(usersURL)

    .then(response => response.json())

    .then(users => {

        console.log("========== USERS ==========");


        // =====================================
        // DISPLAY ALL USER NAMES
        // =====================================

        console.log("User Names:");

        users.forEach(user => {

            console.log(user.name);

        });


        // =====================================
        // DISPLAY NAME + EMAIL
        // =====================================

        console.log("");
        console.log("Name + Email:");

        users.forEach(user => {

            console.log(`${user.name} - ${user.email}`);

        });


        // =====================================
        // FIND USER ID 5
        // =====================================

        const user5 = users.find(user => {

            return user.id === 5;

        });

        console.log("");
        console.log("User with ID 5:");
        console.log(user5);


        // =====================================
        // FILTER USERS BY CITY
        // =====================================

        const cityUsers = users.filter(user => {

            return user.address.city === "South Christy";

        });

        console.log("");
        console.log("Users from South Christy:");

        cityUsers.forEach(user => {

            console.log(user.name);

        });

    })

    .catch(error => {

        console.log("User API Error:", error);

    })

    .finally(() => {

        console.log("User API completed.");

    });


// =====================================
// FETCH POSTS
// =====================================

fetch(postsURL)

    .then(response => response.json())

    .then(posts => {

        console.log("");
        console.log("========== POSTS ==========");


        // =====================================
        // POSTS CREATED BY USER ID 1
        // =====================================

        const user1Posts = posts.filter(post => {

            return post.userId === 1;

        });


        console.log("Posts written by User ID 1:");

        user1Posts.forEach(post => {

            console.log(post.title);

        });


        // =====================================
        // COUNT POSTS
        // =====================================

        console.log("");
        console.log(`User ID 1 created ${user1Posts.length} posts.`);


        // =====================================
        // FIND FIRST POST
        // WITH TITLE MORE THAN 50 CHARACTERS
        // =====================================

        const longTitlePost = posts.find(post => {

            return post.title.length > 50;

        });


        console.log("");
        console.log("First post with title > 50 characters:");

        console.log(longTitlePost);

    })

    .catch(error => {

        console.log("Post API Error:", error);

    })

    .finally(() => {

        console.log("Post API completed.");

    });


    //===============Task 4================

    

// =====================================
// FUNCTION TO SEARCH PRODUCTS
// =====================================

function searchProducts(products, category, maxPrice) {

    // Filter using BOTH conditions
    const result = products.filter(product => {

        return product.category.toLowerCase() === category.toLowerCase()
            && product.price <= maxPrice;

    });


    console.log("");
    console.log("========== SEARCH RESULT ==========");


    if (result.length === 0) {

        console.log("No products found.");

    } else {

        result.forEach(product => {

            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------------");

        });

    }

}


// =====================================
// ASK USER CATEGORY
// =====================================

const category = prompt("Enter product category:");


// =====================================
// ASK MAXIMUM PRICE
// =====================================

const maxPrice = Number(prompt("Enter maximum price:"));


// =====================================
// FETCH PRODUCTS
// =====================================

fetch(apiURL)

    .then(response => response.json())

    .then(products => {

        searchProducts(products, category, maxPrice);

    })

    .catch(error => {

        console.log("API Error:", error);

    })

    .finally(() => {

        console.log("Search completed.");

    });



//===============Task 5==============//


// Shopping cart array
let cart = [];


// =====================================
// FETCH PRODUCTS
// =====================================

fetch(apiURL)

    .then(response => response.json())

    .then(products => {

        console.log("========== AVAILABLE PRODUCTS ==========");


        // =====================================
        // DISPLAY PRODUCTS
        // =====================================

        products.forEach(product => {

            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );

        });


        // =====================================
        // SELECT PRODUCT IDs
        // =====================================

        const id1 = Number(prompt("Enter first product ID:"));
        const id2 = Number(prompt("Enter second product ID:"));


        // =====================================
        // FIND PRODUCTS
        // =====================================

        const product1 = products.find(product => {

            return product.id === id1;

        });


        const product2 = products.find(product => {

            return product.id === id2;

        });


        // =====================================
        // ADD TO CART
        // =====================================

        if (product1) {

            cart.push(product1);

        }

        if (product2) {

            cart.push(product2);

        }


        // =====================================
        // DISPLAY CART
        // =====================================

        console.log("");
        console.log("========== CART ==========");


        cart.forEach((product, index) => {

            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log("");

        });


        // =====================================
        // CALCULATE TOTAL
        // =====================================

        const total = cart.reduce((sum, product) => {

            return sum + product.price;

        }, 0);


        console.log(`Total: $${total.toFixed(2)}`);


        // =====================================
        // DISCOUNT
        // =====================================

        let discount = 0;


        if (total > 200) {

            discount = 20;

        } else if (total > 100) {

            discount = 10;

        }


        console.log(`Discount: ${discount}%`);


        // =====================================
        // CALCULATE DISCOUNT AMOUNT
        // =====================================

        const discountAmount = total * discount / 100;


        // =====================================
        // FINAL AMOUNT
        // =====================================

        const finalAmount = total - discountAmount;


        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);

    })


    // =====================================
    // ERROR HANDLING
    // =====================================

    .catch(error => {

        console.log("Something went wrong:", error);

    })


    // =====================================
    // FINALLY
    // =====================================

    .finally(() => {

        console.log("Shopping cart process completed.");

    });

//===============Task 6==============//


// =====================================
// FETCH API
// =====================================

fetch(apiURL)

    // =====================================
    // CONVERT RESPONSE TO JSON
    // =====================================

    .then(response => response.json())

    // =====================================
    // WORK WITH PRODUCTS
    // =====================================

    .then(products => {


        console.log("========== PRODUCT REPORT ==========");
        console.log("");


        // =====================================
        // TOTAL PRODUCTS
        // =====================================

        console.log(`Total Products: ${products.length}`);
        console.log("");


        // =====================================
        // DISPLAY ALL PRODUCTS
        // forEach()
        // =====================================

        console.log("========== ALL PRODUCTS ==========");

        products.forEach(product => {

            console.log(`${product.title} - $${product.price}`);

        });

        console.log("");


        // =====================================
        // PRODUCT NAMES
        // map()
        // =====================================

        const productNames = products.map(product => {

            return product.title;

        });


        console.log("Product Names:");

        productNames.forEach(name => {

            console.log(`- ${name}`);

        });

        console.log("");


        // =====================================
        // PRODUCTS ABOVE $100
        // filter()
        // =====================================

        const expensiveProducts = products.filter(product => {

            return product.price > 100;

        });


        console.log("Products Above $100:");

        expensiveProducts.forEach(product => {

            console.log(`- ${product.title} : $${product.price}`);

        });

        console.log("");


        // =====================================
        // FIND ELECTRONICS PRODUCT
        // find()
        // =====================================

        const electronicsProduct = products.find(product => {

            return product.category === "electronics";

        });


        console.log("Electronics Product:");

        console.log(
            `${electronicsProduct.title} - $${electronicsProduct.price}`
        );

        console.log("");


        // =====================================
        // TOTAL PRODUCT VALUE
        // reduce()
        // =====================================

        const totalPrice = products.reduce((total, product) => {

            return total + product.price;

        }, 0);


        console.log("Total Product Value:");

        console.log(`$${totalPrice.toFixed(2)}`);

        console.log("");


        // =====================================
        // SOME()
        // =====================================

        const hasProductAbove500 = products.some(product => {

            return product.price > 500;

        });


        console.log(`Any Product Above $500: ${hasProductAbove500}`);

        console.log("");


        // =====================================
        // EVERY()
        // =====================================

        const allProductsAbove1 = products.every(product => {

            return product.price > 1;

        });


        console.log(`All Products Above $1: ${allProductsAbove1}`);

        console.log("");


        // =====================================
        // SORT()
        // HIGHEST TO LOWEST
        // =====================================

        const sortedProducts = [...products].sort((a, b) => {

            return b.price - a.price;

        });


        console.log("Highest → Lowest:");

        sortedProducts.forEach(product => {

            console.log(`${product.title} - $${product.price}`);

        });


        console.log("");
        console.log("========== REPORT COMPLETED ==========");

    })


    // =====================================
    // CATCH()
    // =====================================

    .catch(error => {

        console.log("API Error:");
        console.log(error);

    })


    // =====================================
    // FINALLY()
    // =====================================

    .finally(() => {

        console.log("");
        console.log("API request finished.");

    });


