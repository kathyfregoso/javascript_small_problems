function foo(param = "no") {
  return "yes"; // returns "yes"
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); // outputs "no"
// foo() arg evaluates to "yes" => bar("yes")
