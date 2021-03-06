// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


function fibGenerator(max){
	var start = 1;
	var temp = 1;
	var arr = [];
  if(max < 0){ return []};
  max === 0 ? arr.push(0) : arr.push(0, start, temp);
  if(max === 2){ arr.push(2)};
	for(var i = 2; i < max; ){
		arr.push(i);
		temp = i;
		i = i + start;
		start = temp;
	}
	return arr;
}

function sumEven(arr){
  return arr.filter((element)=>{
    return element % 2 === 0;
  }).reduce((pre, curr) =>{
    return pre + curr;
  }, 0);
}

function fibSolution(){
  return sumEven(fibGenerator(4000000));
}

module.exports = {
  fibGenerator: fibGenerator,
  sumEven: sumEven,
  fibSolution: fibSolution
};
