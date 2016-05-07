export default function(){
  //generate fibonacci sequence up to 4mil
    //track a prev and cur (use reduce? and push into the array? )
    
    var pre = 1,
    nex= 2;
    do{
      var temp = nex;
      nex = pre + nex;
      pre = temp;
      //push this into the array
    }
    while(nex <= 4000000);
  //sum the even numbers
}
