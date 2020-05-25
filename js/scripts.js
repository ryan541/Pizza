var totalPrice=0;
var totalSize=0;
var totalCrust=0;
var totalToppings=0;



function Pizza(type, size,crust,toppings,number){
    this.type =type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;


}


$(document).ready(function(){
    $("#values").click(function(event){

        event.preventDefault();
        var inputPizza = $(".which").val();
        var inputSize = $("#pizzaSize").val();
        var inputCrust =  $("input[name='typo']:checked").val();
        var inputToppings= $("#pizzaToppings").val();
        var inputNumber = parseInt($("#noPizza").val());
        var deliveryFee =  $("input[name='delivery']:checked").val();
         
        var newPizza = new Pizza( inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee )
        total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee);
        $(".typeOfPizza").text(newPizza.type );
        $(".crustresult").text(newPizza.crust+" : "+totalCrust);
        $(".sizeResult").text(newPizza.size+" : "+totalSize);
        $(".toppingsResult").text(newPizza.toppings+" : "+totalToppings);
        $(".numberResult").text(newPizza.number);
        $(".total").text(totalPrice)
        
        

        totalPrice=0;
        totalSize =0;
        totalCrust = 0;
        totalToppings =0;

       
        //alert(totalPrice);
    });
});

function total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee){
    
    switch (inputPizza) {        
        case ("Hawaian"):
            switch(inputSize) {
                case ("small"):
                    price = 550;
                    totalSize=(totalSize+price)*inputNumber;
                    if (inputCrust === "crispy") {
                       totalCrust = (totalCrust+100)*inputNumber;
                       
                    }else if (inputCrust ==="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                    } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                    }
                    
                    break;
                    case  ("medium"):
                        price = 750;
                        totalSize=(totalSize+price)*inputNumber;
                        if (inputCrust === "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust ==="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;                      }
                      break;
                      case ("large") :
                        price = 1100;
                        totalSize=(totalSize+price)*inputNumber;
                        if (inputCrust == "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust =="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                      }
                      break;
                      case ("extraLarge") :
                        price = 1200;
                        totalSize=(totalSize+price)*inputNumber
                        if (inputCrust == "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust =="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                      }
                    }
                      break;
            case ("MeatDeluxe"):
                switch(inputSize) {
                    case ("small"):
                    price = 550;
                    totalSize=(totalSize+price)*inputNumber;
                    if (inputCrust === "crispy") {
                       totalCrust = (totalCrust+100)*inputNumber;
                       
                    }else if (inputCrust ==="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                    } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                    }
                    
                    break;
                    case  ("medium"):
                        price = 750;
                        totalSize=(totalSize+price)*inputNumber;
                        if (inputCrust === "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust ==="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;                      }
                      break;
                      case ("large") :
                        price = 1100;
                        totalSize=(totalSize+price)*inputNumber;
                        if (inputCrust == "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust =="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                      }
                      break;
                      case ("extraLarge") :
                        price = 1200;
                        totalSize=(totalSize+price)*inputNumber
                        if (inputCrust == "crispy") {
                            totalCrust = (totalCrust+100)*inputNumber;
                      }else if (inputCrust =="stuffed") {
                        totalCrust = (totalCrust+50)*inputNumber;
                      } else {
                        totalCrust = (totalCrust+120)*inputNumber;
                      }
                    }
                      break;
                    case ("chickenbacon"):
                         switch(inputSize) {
                            case ("small"):
                                price = 550;
                                totalSize=(totalSize+price)*inputNumber;
                                if (inputCrust === "crispy") {
                                   totalCrust = (totalCrust+100)*inputNumber;
                                   
                                }else if (inputCrust ==="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                }
                                
                                break;
                                case  ("medium"):
                                    price = 750;
                                    totalSize=(totalSize+price)*inputNumber;
                                    if (inputCrust === "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust ==="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;                      }
                                  break;
                                  case ("large") :
                                    price = 1100;
                                    totalSize=(totalSize+price)*inputNumber;
                                    if (inputCrust == "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust =="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                  }
                                  break;
                                  case ("extraLarge") :
                                    price = 1200;
                                    totalSize=(totalSize+price)*inputNumber
                                    if (inputCrust == "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust =="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                  }
                                }
                                  break;
                                 
                    case ("Vegeterianpizza"):
                        switch(inputSize) {
                            case ("small"):
                                price = 550;
                                totalSize=(totalSize+price)*inputNumber;
                                if (inputCrust === "crispy") {
                                   totalCrust = (totalCrust+100)*inputNumber;
                                   
                                }else if (inputCrust ==="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                }
                                
                                break;
                                case  ("medium"):
                                    price = 750;
                                    totalSize=(totalSize+price)*inputNumber;
                                    if (inputCrust === "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust ==="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;                      }
                                  break;
                                  case ("large") :
                                    price = 1100;
                                    totalSize=(totalSize+price)*inputNumber;
                                    if (inputCrust == "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust =="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                  }
                                  break;
                                  case ("extraLarge") :
                                    price = 1200;
                                    totalSize=(totalSize+price)*inputNumber
                                    if (inputCrust == "crispy") {
                                        totalCrust = (totalCrust+100)*inputNumber;
                                  }else if (inputCrust =="stuffed") {
                                    totalCrust = (totalCrust+50)*inputNumber;
                                  } else {
                                    totalCrust = (totalCrust+120)*inputNumber;
                                  }
                                }
                                  break;
                 

      
    }



switch (inputToppings){
    case ("pepperoni"):
        totalToppings =(totalToppings + 150)*inputNumber;
        break;
        case ("mushroom"):
            totalToppings=(totalToppings +100)*inputNumber;
            break;
            case ("onion"):
                totalToppings=(totalToppings +100)*inputNumber;
                break;
                case ("sausages"):
                    totalToppings =(totalToppings+150)*inputNumber;
                    break;
                case ("Bacon"):
                totalToppings =(totalToppings + 200)*inputNumber;
                break;
                case ("cheese"):
                totalToppings =(totalToppings+ 150)*inputNumber;
                break;
                case ("olive"):
                    totalToppings =(totalToppings+ 100)*inputNumber;
                    break;

}
switch (deliveryFee){
    case ("yes"):
    if (deliveryFee === "yes"){
        var dev = prompt("Please enter your delivery address");
        alert("Your delivery will be made to "+dev+" Thank you! Happy meals");
    } 
    break;
    case("no"):
 if (deliveryFee === "no") {
        alert(" Happy meals !Come for your food at our nearest station");
    }
}

totalPrice= totalSize+ totalCrust + totalToppings;
 

}