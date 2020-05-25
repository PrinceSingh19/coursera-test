(function(){
  'use strict';

  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buyList = this;
    buyList.items = ShoppingListCheckOffService.getItems();

    buyList.removeItem = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }




  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.boughtArray = ShoppingListCheckOffService.getBought();
  }


  function ShoppingListCheckOffService() {
    var service=this;
    var items = [
      {name: "cookies", quantity:"10"},
      {name: "chocolates", quantity:"20"},
      {name: "Toffee", quantity:"30"},
      {name: "bread", quantity:"40"},
      {name: "cupcakes", quantity:"50"}
    ];

    var boughtArray = [];

    service.getItems = function(){
      return items;
    };

    service.getBought = function () {
      return boughtArray;
    }

    service.removeItem = function(itemIndex){
      boughtArray.push(items[itemIndex]);
      items.splice(itemIndex,1);
    };


  }



})();
