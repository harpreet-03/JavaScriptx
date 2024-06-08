
//1
var result = null;
console.log(result);

// 2
try {
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

//3

var x = {};

//4


try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
