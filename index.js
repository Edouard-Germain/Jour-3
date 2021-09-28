//Exercice 1 

var fruits=["mango", "lemon","blueberry"]
console.log(fruits)
console.table(fruits)

// Exercice 2

var ingredients=["butter","eggs","milk"]
console.log(ingredients[2])
console.log(ingredients[0])

// Exercice 3

var objects=["pen","book","lamp"]
objects.unshift("chair")
console.log(objects)
objects.pop("lamp")
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)

// Exercice 4 

var number =[ 4,10,8,12,6]
number.reverse()
console.log(number)
number.sort((a,b)=>a-b)
console.log(number)

// Exercice 5

var total = 0
var limit = 10

for(var i = total; i<=limit; i++){
    total= total+i
    console.log(total)
}

// exercice 6 

var sentence = "Hello Konexio !"
var inverse = ""
for(var i =sentence.length-1; i>=0; i--){
   inverse = inverse + sentence.charAt(i)
   console.log(inverse)
}


// Bonus I
for(var i = 0; i<=100; i++){
    if (i % 3 === 0) {
    console.log("fizz")
    } else if (i % 5 === 0) {
            console.log("buzz")
    } else if (i % 3 === 0) && (i % 5 === 0){
        console.log("fizzbuzz")
    }
    
    
    else { 
        console.log(i)
    }
    
}

// Bonus 2 
