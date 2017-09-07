// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(element, i);   // execute callback
    }
  });
}



function actionWhenFound(element, i) {
  console.log("Found " + element + " at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);