//Backend Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
Pizza.prototype.calculatePrice = function() {
 var price;

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
     } else if (this.topping.length > 3){
       return  price = "Price is " + 20;
     }
   }
}

//Frontend Logic
$(document).ready(function() {
  var toppings = [];
  var size;

  $("#order").submit(function(event) {
    event.preventDefault();
    if ($("input[type=radio]").is(":checked") && $("input[type=checkbox]").is(":checked")) {
      size = parseInt($("input[type=radio]:checked").val());
      $("input[type=checkbox]:checked").each(function() {
        toppings.push($(this).attr("value"));
        $("#order").fadeOut(800, function() {
          $("#price").fadeIn(1000);
        });
      });
    } else if (!$("input[type=checkbox]").is(":checked") || !$("input[type=radio]").is(":checked")) {
        $(".overlay").fadeIn(700);
        $("#overlay-btn").click(function() {
          $(".overlay").fadeOut(700);
        });
      }
    var newOrder = new Pizza(toppings, size);
    $("#price").append(newOrder.calculatePrice() + "</br>" + "Enjoy Your Meal!");
  });//Submit ends
  $("#reset").click(function() {
    toppings = [];
    $("#price").empty();
  });//reset click ends
});//Ready ends
