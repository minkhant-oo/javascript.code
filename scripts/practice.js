const todolist=[];


renderTodolist();

function renderTodolist(){
let todoHtml = '';

for(let i=0 ; i<todolist.length ; i++){
const todo = todolist[i];
const html = `<div class="todo-item">
        <span>${todo.input} - ${todo.date}</span>
        <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
      </div>`;
todoHtml += html;

}

document.querySelector('.js-todo-list').innerHTML = todoHtml;
}

function deleteTodo(i){
  todolist.splice(i , 1)
renderTodolist();

}

function handlekeydown(event){
  if (event.key === 'Enter'){
    addTodo();
  }

}





function addTodo(){

  const inputElement = document.querySelector('.js-todoInput');
  const input = inputElement.value;
  const dateElement = document.querySelector('.js-tododate');
  const date = dateElement.value;
  todolist.push ({ input, date});
  renderTodolist();
}