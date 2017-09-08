// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(el, i) {
    if (el === "Waldo") {
      found(el, i);
    }
  });
}

function actionWhenFound(arr, i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);