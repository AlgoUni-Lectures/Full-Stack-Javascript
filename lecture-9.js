// GET

// async function getTodos() {
//   const response = await fetch("http://localhost:3000/todos");
//   const data = await response.json();
//   console.log(data);
// }

// getTodos();

// --------

// POST

// async function addTodo(url, payload) {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       "Content-Type": "application/json",
//       body: JSON.stringify(payload),
//     });

//     if (response.status !== 201) {
//       throw new Error("Todo couldnt be added");
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// addTodo("http://localhost:3000/todos", {
//   task: "Read a lecture",
//   completed: true,
// });

// -------

// PUT

// async function changeTodo(url, payload) {
//   const response = await fetch(url, {
//     method: "PUT",
//     "Content-Type": "application/json",
//     body: JSON.stringify(payload),
//   });

//   const data = await response.json();
//   console.log(data);
// }

// changeTodo("http://localhost:3000/todos/1", {
//   task: "Learn Programming",
//   completed: true,
// });

// ----------

// PATCH

// async function changeTodo(url, payload) {
//   const response = await fetch(url, {
//     method: "PATCH",
//     "Content-Type": "application/json",
//     body: JSON.stringify(payload),
//   });
//   const data = await response.json();
//   console.log(data);
// }

// changeTodo("http://localhost:3000/todos/26e8", {
//   completed: false,
// });

// DELETE

// async function deleteTodo(id) {
//   const response = await fetch(`http://localhost:3000/todos/${id}`, {
//     method: "DELETE",
//   });
//   const data = await response.json();
//   console.log(data);
// }

// deleteTodo("3924");

// Qeury String

async function getCompletedTodo() {
  const response = await fetch("http://localhost:3000/todos?completed=true");
  const data = await response.json();
  console.log(data);
}

getCompletedTodo();
