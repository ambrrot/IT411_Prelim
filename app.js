const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\Enter a Grade? ', (answer) => {
  // TODO: Log the answer in a database
  
  var grade = parseInt(answer);
  computeGrade(grade,3);
  computeGrade(grade,2);
  computeGrade(grade,5);
  rl.close();
});

function computeGrade(grade){
    
    var jhay = grade + increment;
    
    
if(jhay < 75)
  console.log('Your new Grade is : '+jhay);


else if(jhay =>75)
  console.log('Your new Grade is : '+jhay);





}