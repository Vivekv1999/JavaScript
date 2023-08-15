function primeNum(n){

    for(let i=2;i<n;i++){

        if(n%i===0){
            return console.log(n,"is not prime um");
        }
    }

    return console.log(n,"is prime number");

}


console.log(primeNum(25));