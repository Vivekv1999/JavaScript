const money=100
let totalApple=0

function buyApple(x) {
    if(x>0){
        console.log("money",money,"========>",totalApple," apple");
        buyMore(x)
    }
    else{
        console.log("i don't have more money",totalApple);
    }
}


function buyMore(x){
    totalApple++
    buyApple(x-10) ///here 10 is price of Apple
}

console.log(buyApple(money),"====");