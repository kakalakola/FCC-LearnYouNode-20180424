//Still nothing too fancy...
var intSum=0;

process.argv.forEach(function(argument,index,array){
  if(index>1){intSum+=parseInt(argument)}
});
console.log(intSum);