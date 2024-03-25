function divide(parameter2000, parameter100) {
    console.log(`divide ${parameter2000}`);
    console.log(`divide ${parameter100}`);
    return parameter2000 / parameter100;
}
divide(2000,100); //=> 20

const square = (parameter5) => {
    console.log(`multiply ${parameter5}`);
    console.log(`multiply ${parameter5}`);
    return parameter5 * parameter5;
}
square(5,5); //=> 25



const add = (parameter3, parameter4) => {
    console.log(`Adding ${parameter3}`);
    console.log(`Adding ${parameter4}`);
    return parameter3 + parameter4;
  }
  add(3,4); //=> 7