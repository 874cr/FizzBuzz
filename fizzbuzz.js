function fizzbuzz(n){
  for(let i=1; i<=n;  i++){

   if(i%15===0){
     console.log("FizzBuzz");

    }else if(i%3===0){
     console.log("Fizz");

    }else if(i%5===0){
     console.log("Buzz");

    }else{
      console.log(i);
    }
  
  }
} 


if(import.meta.url === `file://${process.argv[1]}`){

  fizzbuzz(30);

}

export default fizzbuzz;
