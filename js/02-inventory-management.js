/* eslint-env browser */

// Gloabals

var i, product1, product2, product3, product4, product5, products = [], key, value, sku, info, inventory = [], record, quantity;

// PRODUCTS: product[sku,name,quantity,price]

product1 = [];
product1[0] = parseInt(2233, 10);
product1[1] = String("Hat");
product1[2] = parseInt(12, 10);
product1[3] = "$" + parseFloat(9.99);

product2 = [];
product2[0] = parseInt(4824, 10);
product2[1] = String("Shirt");
product2[2] = parseInt(10, 10);
product2[3] = "$" + parseFloat(15.99);

product3 = [];
product3[0] = parseInt(9382, 10);
product3[1] = String("Jacket");
product3[2] = parseInt(5, 10);
product3[3] = "$" + parseFloat(49.99);

product4 = [];
product4[0] = parseInt(3223, 10);
product4[1] = String("Socks");
product4[2] = parseInt(36, 10);
product4[3] = "$" + parseFloat(9.99);

product5 = [];
product5[0] = parseInt(6343, 10);
product5[1] = String("Jeans");
product5[2] = parseInt(22, 10);
product5[3] = "$" + parseFloat(39.99);

products.push(product1, product2, product3, product4, product5);

// INVENTORY: item[sku, [info]]

function setInventory() {
    "use strict";
    var item;
    for(i = 0; i < products.length; i += 1) {
        sku = products[i][0];
        info = [products[i][1], products[i][2], products[i][3]];
        item = [sku, info];
        inventory.push(item);
    }
    inventory = inventory.sort();
}

setInventory();

// STORAGE: record: key, value

function setStorage() {
    "use strict";
    for(i = 0; i < inventory.length; i += 1) {
        key = inventory[i][0];
        value = inventory[i][1];
        localStorage.setItem(key, value.join(" | ")); // to convert an string with separator
    }
}

setStorage();

// VIEW STORAGE

function viewStorage() {
    "use strict";
    var result;
    
    for(i = 0; i < inventory.length; i += 1) {
        key = inventory[i][0];
        result = "SKU " + key + ": " + localStorage.getItem(key);
        window.console.log(result);
    }
}

// UPDATE INVENTORY / STORAGE 

function updateProduct() {
    "use strict";
    
    sku = window.prompt("Enter a SKU:");
    sku = parseInt(sku,10);
    
    if(typeof sku === "number") {
        for(i = 0; i < inventory.length; i += 1) {
            if (sku === inventory[i][0]) {
                key = sku;
            }
        }
    } else {
        window.alert("That is not a valid SKU.");
    }
    
    quantity = window.prompt("Enter a new quantity:");
    quantity = parseInt(quantity,10);
    
    if(typeof quantity === "number") {
        for (i = 0; i < inventory.length; i += 1) {
            if(key === inventory[i][0]) {
                inventory[i][1][1] = quantity;
                record = [inventory[i][1][0], inventory[i][1][1], inventory[i][1][2]];
            }
        }
    } else {
        window.alert("That is not a valid number");
    }
    
    record = record.join(" | ");
    
    localStorage.removeItem(key);
    localStorage.setItem(key, record);
}

// MENU

function menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

// COMMANDS

function commands() {
    "use strict";
    var command;

    while (true) {
        command = window.prompt("Enter a command");
        if (command !== null) {
            if (command === "view") {
                viewStorage();
            } else if (command === "update") {
                updateProduct();
            } else if (command === "exit") {
                break;
            } else {
                window.console.log("That is not a valid command. Please, indicate your choice:");
            }
        } else {
            break;
        }
    }
    window.console.log("Program has been terminated");
}

// RUN FUNCTIONS

menu();
commands();




