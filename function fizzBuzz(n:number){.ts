function fizzBuzz(n:number){
    if (n%5===0 && n%3===0){
    return "FizzBuzz";
    }
    else if(n%3===0){
        return "Fizz";
    }
    else if(n%5===0){
        return "Buzz"
    }
    else {
        return n;
        
    }
}
 console.log(fizzBuzz(5));
 console.log(fizzBuzz(3));
 console.log(fizzBuzz(10));