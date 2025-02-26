const todolist=[{
  name:'wash',
  duedate :'2000-9-8'
 } , {
  name:'dishes',
  duedate:'2000-9-8'}];


renderTodolist();


function renderTodolist(){
let todolisthtml = '';


for(i = 0 ; i < todolist.length ; i++ ){
const todoObject = todolist[i];
const {name , duedate} = todoObject;

const html = `
    <div>${name}</div> 
    <div>${duedate}</div>
    <button onclick="tododelete(${i})"
      class = "delete-buttton">Delete</button>`;

todolisthtml += html;
}
console.log(todolisthtml);


document.querySelector('.js-todo-list')
  .innerHTML = todolisthtml;
}

function tododelete(i){
  todolist.splice(i ,1);
  renderTodolist()
}

function handlekeydown(event){
  if(event.key === 'Enter'){
    addTodo()
  }

}

function addTodo(){
const inputelement =document.querySelector('.js-name-input');
const name= inputelement.value;
const dateInputelement = document.querySelector('.js-due-date-input')
const duedate = dateInputelement.value;
todolist.push({name , duedate});
inputelement.value = '';


renderTodolist();
}