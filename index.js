var cake = {
  name: "German Chocolate Cake",
  ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
  topping: "coconut frosting",
  bakeTemp: "425 degrees",
  bakeTime: "45 minutes",
  customer: "Tommy",
  decorate: (updateFunction) => {
debugger
    var status = "Decorating with " + this.topping + ". Ready to eat soon!"
    updateFunction(status)
    setTimeout(() => {
      updateFunction(serve.apply(this, ["Happy Eating!", this.customer]))
    }, 2000)
  }
}

var pie = {
  name: "Apple Pie",
  ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
  topping: "streusel",
  bakeTemp: "350 degrees",
  bakeTime: "75 minutes",
  customer: "Tammy"
}

function makeCake() {
debugger
  var updateCakeStatus = () => updateStatus(this);
  mix.call(cake, updateCakeStatus)
}

function makePie() {
debugger
  var updatePieStatus = () => updateStatus(this);
  pie.decorate = () => cake.decorate
  mix.call(pie, updatePieStatus)
}

function updateStatus(statusText) {
debugger
  this.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
debugger
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  setTimeout(() => {
    cool.call(this, updateFunction)
  }, 2000)
}

function mix(updateFunction) {
debugger
  var status = "Mixing " + this.ingredients.join(", ")
  setTimeout(() => {
    bake.call(this, updateFunction)
  }, 2000)
  updateFunction(status)
}

function cool(updateFunction) {
debugger
  var status = "It has to cool! Hands off!"
  setTimeout(() => {
    this.decorate(updateFunction)
  }, 2000)
  updateFunction(status)
}

function makeDessert() {
  //add code here to decide which make... function to call
  //based on which link was clicked
  
  //const pie = new RegExp('pie', 'gi');
  //const cake = new RegExp('cake', 'gi');
  
  //pie.test(this.innerHTML) ? makePie() : makeCake()
  debugger
  if(this.parentNode.id === "cake") {
  	makeCake.call(this.parentNode)
  } else {
  	makePie.call(this.parentNode)
  }
  
}

function serve(message, customer) {
  //you shouldn't need to alter this function
debugger
  return(customer + ", your " + this.name + " is ready to eat! " + message)
}

document.addEventListener("DOMContentLoaded", function(event) {
  //you shouldn't need to alter this function
  var cookLinks = document.getElementsByClassName("js-make")
  for(var i=0; i<cookLinks.length; i++) {
    cookLinks[i].addEventListener("click", makeDessert)
  }
});
