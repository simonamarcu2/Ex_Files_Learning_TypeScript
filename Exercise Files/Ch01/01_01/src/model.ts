let displayName = "Bob Smith";
let inventoryType = "Furniture";
let trackingNumber = "12345";
let createDate = new Date();
let originalCost = 425;

function getInventoryItem(trackingNumber) {

}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
