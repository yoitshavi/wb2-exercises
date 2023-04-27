var payRate = 12.50
var hoursWorked = 40

if(hoursWorked<=40){
   console.log( payRate * hoursWorked )
}else{
    console.log((payRate * 1.5)*(hoursWorked-40) + (payRate*40))
}