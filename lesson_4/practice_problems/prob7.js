["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
}); // outputs [undefined, 'bear']

// map always returns an array
// the condition evaluates to true for the element 'bear', so 'bear' gets return
// for the 1st element, 'ant', the condition evalues to false and elem isn't returned
// when a function doesn't explicitly return something, it implicitly returns 'undefined'
