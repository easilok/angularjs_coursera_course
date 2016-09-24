(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {

  var toBuyList = this;

  toBuyList.newItemName ="";
  toBuyList.newItemQuantity = "";

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.addToBuyItem = function () {
    ShoppingListCheckOffService.addToBuyItem(toBuyList.newItemName, toBuyList.newItemQuantity);
  };

  toBuyList.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.moveToBought(itemIndex);
  };

};


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {

  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

};


function ShoppingListCheckOffService() {
  var service = this;

  // Lists of shopping items
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "bottles of juice", quantity: 2 },
    { name: "Cereal Boxes", quantity: 3 },
    { name: "Chocolate bars", quantity: 5 },
    { name: "Spaghetti", quantity: 4 },
    { name: "Rice", quantity: 3 },
    { name: "Water Bottles", quantity: 10 },
  ];
  var itemsBought = [];

  service.addToBuyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
  };

  service.moveToBought = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    service.removeToBuyItem(itemIndex);
  }

  service.removeToBuyItem = function (itemIdex) {
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
