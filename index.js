//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let  veg = 'Rutabagas';
let  topic = 'Chemistry';
let combined = "";

if (veg.length == topic.length){

  for (let i=0; i < veg.length; i++) {
    combined= combined + (veg[i]);
    combined = combined + (topic[i]);
}
  console.log(combined);
}
