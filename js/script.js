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
            this.tasks.unshift({
                text: this.todoText,
                done: false,
            });
            this.todoText = '';
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
    },
    mounted(){
        // this.audio.play();
    },
    // contiene funzioni che possono essere richiamate solo se viene modificato un dato
    computed: {

    },
}).mount('#app')


