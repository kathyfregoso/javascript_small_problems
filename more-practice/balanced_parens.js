/*
// UNDERSTANDING THE PROBLEM
- INPUT: number (0 and up)
- OUTPUT: array
 - list of string representing ways to balance n pairs of parens
  parens
- RULES: 
 - if input is 0 or null (any type of falsy) return [""]
 - if input is 1 or more, start with "()"
 - "()".repeat(n) = first elemnent (idx 0)
 - "()()".split("").sort() = last element

// EXAMPLES/EDGE CASES: 
n = 1
["()"]

n = 2
["()()","(())"]
"()".repeat(2) = element 0
"()()".split("").sort() = last element

// DATA STRUCTURE(S): 

// ALGORITHM:
*/
balancedParens(0); // [""]
balancedParens(1); // ["()"]
balancedParens(2); // ["()()","(())"]
balancedParens(3); // ["()()()","(())()","()(())","(()())","((()))"]
