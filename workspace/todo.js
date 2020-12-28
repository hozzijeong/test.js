const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


/*
    1. todoList를 저장할 배열 생성
    2. 할 일을 추가할 때마다 배열 안에 해당 업무를 추가 (고유 식별 번호 함께 추가.)
    3. 해당 배열을 localStorage에 저장 (Json을 통해 String 형태로 변형)
    4. 나중에 localStorage에서 불러오기 (JSon forEach를 통해 각각의 Object들을 array에 담아주기  )

    5. X 버튼을 클릭했을때 해당 리스트(toDos)가 지워져야함. 
        5-1. html 에서 지워져야 하고
        5-2. localStorage에서 지워져야함 (filter 사용)

*/
let toDos = [];

function removeList(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveData();
}

function saveData(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.innerText ="Ⅹ";
    delBtn.addEventListener("click",removeList);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveData();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; 
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();