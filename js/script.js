Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },
            ],
           contactIndex : -1,
           userMessage : "",
           ricerca : "",
            
         
        },
        // mounted() {
        //    this.autofocus();
        // },
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
               
            },
            returnImg : function(index){
                return ("./img/avatar" +this.contacts[index].avatar + ".jpg");

            },
            sentOrReceived : function(index) {
                return ("message" + " " + this.contacts[1].messages[index].status);
            
                
            },
            updateIndex : function(index){
                this.contactIndex = index;
            },
            getCurrentDateTime: function() {
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");

            },
            receivedMessage: function (){
                this.contacts[this.contactIndex].messages.push({
                    date : this.getCurrentDateTime(),  
                    text : "ok",
                    status: "received",   
                });
            },
            sendMessage: function(){
                this.contacts[this.contactIndex].messages.push({
                    date : this.getCurrentDateTime(),  
                    text : this.userMessage,
                    status: "sent",
                });

                this.userMessage = "";

                setTimeout(() => {
                  this.receivedMessage();
                    
                },1000)
            },
            removeMessage: function(index){
                
                this.contacts[this.contactIndex].messages.splice(index,1);
                 
            },
            



    }
    
});
  

