function checkPrime(n){
    let count = 0 ;
    for(let i =1; i<=n ; i++)
     if ( n % i === 0){
       count++
     }
  if ( count === 2){
    return "It's a prime number"
  }
  }
  
  function PrimeNumberGenerator(n){
    result =[]
    for( let i =1; i<=n; i++){
      if (checkPrime(i) === "It's a prime number"){
        result.push(i)
      }
    }
    return result
  }


  function generate(){
    
    document.getElementById("result").innerHTML = PrimeNumberGenerator(document.getElementById("A").value)
  }
