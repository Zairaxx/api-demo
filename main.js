console.log("Hello world!");

// Alternativ 1: .Then-kedja / Promise chain
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => {
//     data.forEach(todo => {
//         let todoItem = document.createElement("p");
//         todoItem.innerText = `Todo #${todo.id} - ${todo.title}`
//         document.body.append(todoItem);
//     }
//     )
// })

// Alternativ 2: Async/Await

let renderData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(response);
    let data = await response.json();
    console.log(data);
    data.forEach(todo => {
        let todoItem = document.createElement("p");
        todoItem.innerText = `Todo #${todo.id} - ${todo.title}`
        document.body.append(todoItem);
    });
}

renderData();