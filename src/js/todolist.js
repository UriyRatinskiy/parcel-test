import { refs } from "./revs";
import storage from "./storage";

let data = {};
const KEY_LOCAL = 'todo-save';

refs.formRef.addEventListener("submit", renderTodo);

refs.formRef.addEventListener("input", onSaveTodo);
function onSaveTodo (event) {
    const {name, value} = event.target;
    data[name] = value;
    console.log(data);
    storage.save(KEY_LOCAL, data);
}
function renderTodo(event) {
    event.preventDefault();
//     if (email.value === '' || message.value === '') {
//     return alert('Всі поля мають бути заповненні');
//   }
    const markup = `<li>todo: ${data.text}, priority: ${data.priority}
    <button type="button" class="todo__delete" id=Math.random().toFixed(4)}></button>
</li>`;
    refs.listRef.insertAdjacentHTML('beforeend', markup);
    clearData();
}
function initData() {
    const storData = storage.load(KEY_LOCAL);
    if (storData) {
        for (const key in storData) {
            refs.formRef[key].value = storData[key];
            data[key] = storData[key];
        }
    }
}
initData();
function clearData() {
    refs.formRef.reset();
    storage.remove(KEY_LOCAL);
    data = {};
}