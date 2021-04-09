// programma che stampa numeri da 1 a 100
var numeri_random = Math.floor((Math.random() * 100) + 1);
console.log(numeri_random);


if(numeri_random % 3 == 0){
    console.log("Fizz");
} else if(numeri_random % 5 == 0){
    console.log("Buzz");
}else{
    console.log(numeri_random);
}

