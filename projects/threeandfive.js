export default function(n){

  function summer(n){
  	var arr = [];
  	for(var i = 0; i < n; i++){
  		if(i % 3 === 0 || i % 5 === 0){
  			arr.push(i);
  		}
  	}
  	return arr.reduce((p, c) => {return p + c});
  };

  return summer(n);

}
