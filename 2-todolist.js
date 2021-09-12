const MyToDoList = document.getElementById("ToDoList");

const ArrTodoList=[]

const ButtonAdd=document.getElementById("addToDo");
ButtonAdd.addEventListener("click",()=>{
    const newToDo= new myToDo();
    MyToDoList.appendChild(newToDo.$container)
    ArrTodoList.push(newToDo)
})

const ButtonDelAll=document.getElementById("clearToDo");
ButtonDelAll.addEventListener("click",()=>{
    ArrTodoList.forEach((a)=>{
        a.handldDelAll();
    })
})


class myToDo{
    $text;
    $btnDel;
    $container;
    $checkV;
    $btnAddMoreTextLine;

    constructor(){
        this.$container=document.createElement("div");

        this.$text=document.createElement("input")
        this.$text.style.width="300px"

        this.$btnDel=document.createElement("button")
        this.$btnDel.innerHTML="X"
        this.$btnDel.addEventListener('click',this.handleDel)

        this.$checkV=document.createElement("input")
        this.$checkV.setAttribute('type','checkbox')


        this.$container.appendChild(this.$checkV)
        this.$container.appendChild(this.$text)
        this.$container.appendChild(this.$btnDel)
    }

    handleDel=()=>{
        this.$container.remove();
    }

    handldDelAll=()=>{
        this.$container.remove();
    }
}