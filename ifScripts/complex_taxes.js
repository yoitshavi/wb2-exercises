var payRate = 12.5;
var hoursWorked = 40;
var grossWeeklyPay = payRate * hoursWorked;
var grossYearlyPay = grossWeeklyPay * 52;
var filingStatus = "Single";

var taxRate;
var taxWithholdings = taxRate * grossWeeklyPay;
var netPay = grossWeeklyPay - taxWithholdings;
if (filingStatus == "Single") {
  if (grossYearlyPay < 12000) {
    taxRate = 0.05;
  } else if (grossYearlyPay < 25000) {
    taxRate = 0.1;
  } else if (grossYearlyPay <= 24999.99) {
    taxRate = 0.1;
  } else if (grossYearlyPay <= 74999.99) {
    taxRate = 0.15;
  } else grossYearlyPay > 75000;
  {
    taxRate = 0.2;
  }

  console.log("You worked", hoursWorked, "hours this period.");
  console.log("Because you earn $", payRate, "per hour");
  console.log("your gross pay is $", grossWeeklyPay);
  console.log("Your filing status is", filingStatus);
  console.log("Your tax withholdings this period is $", taxWithholdings);
  console.log("Your net pay is $", netPay);
}
