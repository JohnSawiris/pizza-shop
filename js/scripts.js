//Backend Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
Pizza.prototype.calculatePrice = function() {
  if (this.size === 0) {

    if (this.topping.length === 1) {
      return price = "Price is " + 8;
    } else if (this.topping.length === 2) {
      return price = "Price is " + 10;
    } else if (this.topping.length === 3) {
      return price = "Price is " + 12;
    } else {
      return price = "Price is " + 15;
    }

  } else if (this.size === 1){

    if (this.topping.length === 1) {
      return price = "Price is " + 10;
    } else if (this.topping.length === 2){
      return price = "Price is " + 12;
    } else if (this.topping.length === 3) {
      return price = "Price is " + 14;
    } else {
      return price = "Price is " + 17;
    }

  } else {
    if (this.topping.length === 1) {
      return price = "Price is " + 12;
    } else if (this.topping.length === 2) {
      return price = "Price is " + 14;
    } else if (this.topping.length === 3) {
      return price = "Price is " + 16;
    } else {
      return price = "Price is " + 20;
    }
  }
}

//Frontend Logic
$(document).ready(function() {
  var toppings = [];
  var size;
  $("#order").submit(function(event) {
    event.preventDefault();
    if($("input[type=radio]").is(":checked")) {
      size = parseInt($("input[type=radio]:checked").val());
      $("input[type=checkbox]:checked").each(function() {
      toppings.push($(this).attr("value"));
      });
    } else {
      alert("selected a size")
    }
    var newOrder = new Pizza(toppings, size);
    // $(this).fadeOut(800);
    alert(newOrder.calculatePrice());
  });//Submit ends

});//Ready ends
