var displayName = "Bob Smith";
var inventoryType = "Furniture";
var trackingNumber = "12345";
var createDate = new Date();
var originalCost = 425;

function getInventoryItem(trackingNumber) {

}

function saveInventoryItem(item) {

}

var inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
