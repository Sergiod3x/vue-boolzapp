Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
           todoList: [
            "comprare il latte",
            "comprare il pane",
            "pulire l'auto",
            "portare fuori l'umido",
            
           ],
           newTask:"",
         
        },
        mounted() {
           this.autofocus();
        },
        methods:{
            autofocus : function(){
                const element = document.getElementById("newTaskElement");
                element.focus();
            },
            addTask: function(){
                this.todoList.push(this.newTask);
                this.newTask="";
            },
            deleteTask: function(index){
                console.log(index);
                this.todoList.splice(index,1);
               
            }

    }
    
});
  

