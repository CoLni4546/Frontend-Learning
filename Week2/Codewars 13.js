//Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

//Example
//With the numbers 1, 2, and 3, here are some possible expressions:

//1 * (2 + 3) = 5
//1 * 2 * 3 = 6
//1 + 2 * 3 = 7
//(1 + 2) * 3 = 9
//The maximum value that can be obtained is 9.


function expressionMatter(a, b, c) {
  return Math.max(a * b *c, a + b + c, a + b * c, (a + b) * c, a * (b + c)); //узнал про Math.max и легко сделал перебрав все способы умножения/сложения чисел
}
