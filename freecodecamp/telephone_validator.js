// Using regular expression evaluator you can easily apply step by step to obtain the patterns.

function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  
  return regex.test(str);
}

telephoneCheck("555-555-5555");

