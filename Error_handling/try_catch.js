try {
  console.log(a + b); //  throw refernece error!
} catch (err) {
  console.log("Error: " + err.message);
  console.log("The error was saved in the error log");
}

console.log("My Program does not stop");

/**
Error: a is not defined
The error was saved in the error log
My Program does not stop
 */
