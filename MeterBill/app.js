const records = [];

function calcBill(unit) {
  const first = 30;
  const second = 20;
  const third = 25;
  const fourth = 25;
  const fifth = 50;
  const sixth = 50;
  const tax = 500;

  const one = first * 35;
  const two = second * 50;
  const three = third * 70;
  const four = fourth * 90;
  const five = fifth * 110;
  const six = sixth * 120;

  if (unit <= 30) {
    result = unit * 35;
  } else if ((unit > 30, unit <= 50)) {
    a = unit - first;
    b = a * 50;
    result = one + b ;
    total = result + tax ;
  } else if ((unit > 50, unit <= 75)) {
    a = unit - first;
    b = a - second;
    c = b * 70;
    result = one + two + c;
    total = result + tax ;
  } else if ((unit > 75, unit <= 100)) {
    a = unit - first; // 90-30 = 60
    b = a - second; // 60 - 20 =40
    c = b - third; // 40 -25 = 15
    d = c * 90; // 15 * 90
    result = one + two + three + d;
    total = result + tax ;
  } else if ((unit > 100, unit <= 150)) {
    a = unit - first;
    b = a - second;
    c = b - third;
    d = c - fourth;
    e = d * 110;
    result = one + two + three + four + e;
    total = result + tax ;
  } else if ((unit > 150, unit <= 200)) {
    a = unit - first;
    b = a - second;
    c = b - third;
    d = c - fourth;
    e = d - fifth;
    f = e * 120;
    result = one + two + three + four + five + f;
    total = result + tax ;
  } else if (unit > 200) {
    a = unit - first;
    b = a - second;
    c = b - third;
    d = c - fourth;
    e = d - fifth;
    f = e - sixth;
    g = f * 125;
    result = one + two + three + four + five + six + g;
    total = result + tax ;
  }

  const recordObj = {
    unit: unit + " unit",
    result: result + " kyats",
    total : total + " kyats"
  };
  records[records.length] = recordObj;

  return total + " kyats";
}

console.log(calcBill(124));
console.log(calcBill(112));
console.log(calcBill(79));
console.log(calcBill(79));
console.log(calcBill(84));
console.log(calcBill(99));
console.log(calcBill(240));

console.table(records);
