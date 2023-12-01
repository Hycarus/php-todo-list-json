import {getIndex} from './utility.js';

const {createApp} = Vue
createApp({
    // contiene tutti i dati / le variabili 
    data(){
        return {
            apiUrl: 'server.php',
            // tasks: tasks,
            list: [],
            todoText: '',
            filterValue: '',
            // audio: new Audio('../audio/jingle-bells.mp3'),
            active: true,
        }
    },
    // contiene le funzioni e i metodi 
    methods: {
        addTask(){
            // this.tasks.unshift({
            //     text: this.todoText,
            //     done: false,
            // });
            // this.todoText = '';
            if(this.todoText == ''){
                return;
              }
              console.log(this.todoText);
        
              const data = new FormData();
              data.append("task", this.todoText);
              
              axios.post(this.apiUrl, data)
              .then((response) => {
                this.list = response.data;
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              })
        },
        removeTask(id){
            const index = getIndex(id, this.tasks)
            this.tasks.splice(index, 1);
        },
        todoInvert(id){
            const index = getIndex(id, this.tasks)
            this.tasks[index].done = !this.tasks[index].done
        },
        // getIndex(id){
        //     return this.tasks.findIndex((el) => el.id === id);
        // },
        // filteredTasks(){
        //     return this.tasks.filter((task)=>{
        //         if(this.filterValue === '2' && !task.done){
        //             return true;
        //         } else if(this.filterValue === '1' && task.done){
        //             return true;
        //         } else if(this.filterValue === ''){
        //             return true;
        //         }
        //     });
        // },
        // stopMusic(){
        //     this.audio.pause();
        //     this.active = false;
        // },
        // playMusic(){
        //     this.audio.play();
        //     this.active = true;
        // },
        readList(){
            axios.get(this.apiUrl).then((response) =>{
              // console.log(response.data);
              this.list = response.data;
      
            })
            .catch ((error) =>{
              console.log(error);
            })
            .finally(() => {
      
            })
          },
    },
    mounted(){
        // this.audio.play();
        this.readList();
    },
    // contiene funzioni che possono essere richiamate solo se viene modificato un dato
    computed: {

    },
}).mount('#app')


