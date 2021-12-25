var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study JavaScript",
    "eat healthy"
];

//for (var i=0; i < todos.length; i++) {
//    todos[i] = todos[i] + "!";
//    console.log(todos)
//}

function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);

// var counterOne = 10;
// while (counterOne < 10) {
//     console.log(counterOne)
//     counterOne--
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo < 10);