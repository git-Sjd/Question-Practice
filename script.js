// Q1.
var str1 = 'Today is';
var str2 = ' a beautiful day '
var str3 = ' In Hawaii. '

console.log(str1 + str2 + str3.trim())

// Q2

var mStr = 'Mo Tu We Th Fr Sa Su'
var mStrUpper = mStr.toUpperCase()
console.log(mStrUpper.slice(' '))

console.log(mStrUpper.split(' '))
console.log(typeof(mStrUpper.split(' ')))

// Q3

var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
var slicedmStr = mStr.split('.')
console.log(slicedmStr)

console.log(slicedmStr[0].length)
console.log(slicedmStr[1].length)
console.log(mStr.indexOf("This"))
console.log(mStr.lastIndexOf("This"))
console.log(mStr.slice(0,12))
console.log(mStr.slice(-12,-1))

// Q4

console.log(undefined == null)
console.log(undefined === null)

// Q5

var length=200;
var breadth=200;

if (length === breadth){
    console.log("This is a square")
}
else{
    console.log("This is a not square")
}

// Q5
var num1=5, num2=8, num3=20;

if (num1>num2 && num1>num3){
    console.log(num1 +" is the greatest.")
}else if(num2>num1 && num2>num3){
    console.log(num2 + " is the greatest.")
}else{
    console.log(num3 + " is the greatest.")
}

// Q6
var numberOfItemPurchased = 8

var totatcost = numberOfItemPurchased * 1000

if (totatcost > 10000){
    var price = 0.9 * totatcost
    console.log("Discounted price is "+ price)
}
else{
    console.log("Final Amount is "+ totatcost)
}

// Q7

var marks = 62

switch (true ){
    case marks >= 80 && marks <=100:{
        console.log("Grade A")
        break
    }

    case marks >= 70 && marks <80:{
        console.log("Grade B")
        break
    }
    case marks >= 60 && marks <70:{
        console.log("Grade C")
        break
    }
    case marks >= 50 && marks <60:{
        console.log("Grade D")
        break
    }
    default :console.log("Grade F")
}

// Q8

var num1=60, num2=8, num3=20;

switch(num1, num2, num3){
    case num1>num2 && num1>num3:{
        console.log(num1+" is greates")
        break
    }
    case num2>num1 && num2>num2:{
        console.log(num2 + " is the greatest")
        break
    }
    default:console.log(num3 + " is the greatest")
}

var monthNumber = 2;

switch(monthNumber){
    case  1:{
        console.log("Month is Jan and 31 days")
        break
    }
    case  2:{
        console.log("Month is Feb and 28 or 29 days")
        break
    }
    case 3:{
        console.log("Month is Mar and 31 days")
        break
    }
    case  4:{
        console.log("Month is Apr and 30 days")
        break
    }
    case 5:{
        console.log("Month is May and 31 days")
        break
    }
    default:console.log("Enter a valid month")
}

// Q9

var enteredAlphabet = 'd'

switch(enteredAlphabet){
    case 'd': {
        console.log("Vowel")
    }
    default:console.log("Not a Vowel")
}

var marks =67
switch(true){
  case marks <= 25 :
    console.log('Grade is F')
    break;
  case marks >= 25 && marks< 45:
    console.log('Grade is E')
    break;
  case marks >= 45 && marks< 50: 
    console.log('Grade is D')
    break; 
  case marks >= 50 && marks< 60:   
    console.log('Grade is C')
    break;
  case marks >= 60 && marks< 80: 
    console.log('Grade is B')
    break;
  default:
    console.log('Grade is A')
}
