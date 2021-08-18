/*
0-100
multiplos de 3 fizz
multiplos de 5 buzz
multiplos de ambos fizzbuzz
*/

for (let i=1; i<=100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log(`Numero ${i} FIZZBUZZ`);
    }else if(i%3 == 0){
        console.log(`Numero ${i} FIZZ`);
    }else if(i%5 ==0){
        console.log(`Numero ${i} BUZZ`);
    }else{
        console.log(`Numeo ${i}`);
    }
}