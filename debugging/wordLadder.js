let ladder = ""[("head", "heal", "teal", "tell", "tall", "tail")].forEach(
  (word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  }
);

console.log(ladder); // expect: head-heal-teal-tell-tall-tail

/* 
Upon first glance, Gemma's code below looks like it should work. 
But it throws a TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

Answer:
Simply because Gemma forgot to include a semicolon at the end of the ladder variable declaration.
JS silently adds the semicolon on line 9, thus, JS assumes that the code starting w/ the "" empty
string as well as the invocation of forEach method are the assigned value of ladder. The array 
caller is not parsed as an array, but as an accessor on the empty string. Since the empty str
doesn't contain this property, the result is undefined, on which forEach is called, resulting in an
error.

Always use semicolons to avoid automatic inseration, do not let the machine take control.
Semicolons should always terminate a statement, without them, JS sometimes sees the next statement
as part of the former statement. 


*/
