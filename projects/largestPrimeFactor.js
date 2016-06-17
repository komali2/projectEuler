// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

export default function prime(){
  return primeSolution();
}

function primeFinder(target){
  if(target < 2){
    return [];
  }
  var primeFactors = [];
  var checkMe = sieve(target);
  for(var i = Math.ceil(Math.sqrt(target)); i >= 0; i--){
    if(target % element === 0){
      return element;
    }
  };
  return primeFactors[primeFactors.length-1];

}

//generate an array of primes using Sieve of Eratosthenes
function sieve(n){
  var array = [];
  var upper = Math.sqrt(n);
  var arrayOut = [];

  //make array from 2 to (n - 1)
  for(var i = 0; i < n; i++){
    array.push(true);
  }

  //remove multiples of primes starting from 2, 3, 5...
  for(var i = 2; i <= upper; i++){
    if(array[i]){
      for(var j = i * i; j < n; j += i){
        array[j] = false;
      }
    }
  }

  //all array[i] set to true are primes
  for(var i = 2; i < n; i++){
    if(array[i]){
      arrayOut.push(i);
    }
  }
  return arrayOut;
}

function primeSolution(){
  return primeFinder(600851475143);
}

//
// export default {
//   sieve: sieve,
//   primeFinder: primeFinder,
//   primeSoultion: primeSolution
// };
