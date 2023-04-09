import { refs } from "./revs";

const data = {};

refs.formRef.addEventListener("input", onSaveTodo);
function onSaveTodo (event) {
    const {name, value} = event.target;
    data[name] = value;
    console.log(data);
}
