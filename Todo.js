function Template(){
let todoApp={
    todos:[],
    count:1,
    addTask:function(text){
        if(this.todos.length==0){
            console.log(`No task added!`);
        }
     
        this.todos.splice(text);
        console.log(`This is ${text}`);       
    },
    deleteTask:function(id){
        if(this.todos.length==0){
            console.log(`No task avaliable.please add first task`);
        }
        else{
           this.todos.splice(id);}
    },
    updateTaskText:function(id,text){
        if(this.todos.length==0){
            console.log(`No task avaliable.please add first task`);
        }
        else{
        this.todos.splice(id,text);
        console.log(`This is Task1`)}
    },
    updateTaskAsDone:function(id){
        if(this.updateTaskText!=0){
            console.log(`This is task1 is done`);
        }
    },
    getAllTasks:function(){
        if(this.todos!==0){
            console.log("no task added!");
        }
        else{
        console.log(this.todos);
    }
    },

}
todoApp.getAllTasks();
todoApp.deleteTask(1);
todoApp.updateTaskAsDone(1);
todoApp.updateTaskText(1,"text 1");
todoApp.addTask("This is task1");
todoApp.getAllTasks();
todoApp.updateTaskAsDone(1);
todoApp.getAllTasks();
todoApp.updateTaskText(1,"task 1 text updated");
todoApp.getAllTasks();
todoApp.deleteTask();
todoApp.getAllTasks();

}
//Template();


let person={
    name : 'relevel',
    getName : () =>{
        return this.name;
    }
}
console.log(person.getName()); //undefine

let obj={name:'abc',age:1,id:1}
console.log(obj['name'],obj.name);

//how the array function work
let arr=[97,967,121,11,13];
arr.sort();
console.log(arr);

//it is working well
arr.sort((a,b)=>{return a-b});
console.log(arr);

//
let twoDarray =[[1,2,3],[4,5,6]];
for(let i=0;i<twoDarray[0].length;i++){
    for(let j=0;j<twoDarray.length;j++){
        console.log(twoDarray[j][i]);
    }
}

//
let obj1={name:'relevel'};
obj1['name']='relevel unacadmy'
console.log(obj1.name);
//console.log(obj1[name]);// name is not define

let setobj ={};
let nam ='kou';
setobj[nam] =setobj[nam]+1 || 1;
console.log(setobj[nam]);

//
let obj2={1:1,2:[1]}
Object.freeze(obj2);
obj[2].push(2);
console.log(obj);