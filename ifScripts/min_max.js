a = 101;
b = 30;
c = 10;

var min;
if (a <= b && a <= c) {
  min = a;
} else if (b <= a && b <= c) {
  min = b;
} else {
  min = c;
}
console.log("the min is", min);

var max;
if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}
console.log("the min is", max);
