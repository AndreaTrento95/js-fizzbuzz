// programma che stampa numeri casuali da 1 a 100
/* var numeri_random = Math.floor((Math.random() * 100) + 1);
console.log(numeri_random);
=============================================================== */

// stabilisco che per i numeri multipli di 3 e 5 venga inserito il valore alternativo
/* if(numeri_random % 3 === 0){
    console.log("Fizz");
} else if(numeri_random % 5 === 0){
    console.log("Buzz");
}else{
    console.log(numeri_random);
} */

/* for(i = 1; i < numeri_random.length; i++){
    if(numeri_random % 3 === 0){
        console.log("Fizz");
    } else if(numeri_random % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(numeri_random);
    }
} */
//==================================================================================



// creo un ciclo for creare numeri tra 1 e 100 compresi,sostituendo al volore dei multipli di 3 "Fizz" e "Buzz" ai multipli di 5

for( var num = 1; num <= 100; num++){
    if(num % 3 === 0){
        console.log("Fizz");
    } else if(num % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(num);
    }
}




