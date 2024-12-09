function compareStrings(str1, str2) {
  if (str1.length === str2.length) {
    return "Строки равны по длине";
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return str1;
  }
}

console.log(compareStrings("JavaScript", "Java"));
console.log(compareStrings("Java", "Ruby"));
console.log(compareStrings("Rust", "Python"));
console.log(compareStrings("Rust", "Python"));
