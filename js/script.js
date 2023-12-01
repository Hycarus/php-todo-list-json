
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
            this.todoText = '';  
        },
        removeTask(index){
            const data = new FormData();
            data.append("removetask", index);
            axios.post(this.apiUrl, data)
            .then((response) => {
                this.list = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        updateTask(index){
            const data = new FormData();
            data.append("updatetask", index);
            axios.post(this.apiUrl, data)
            .then((response) => {
                console.log(response.data[index]);
                this.list[index].done = response.data[index].done;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        
        filteredTasks(){
            return this.list.filter((task)=>{
                if(this.filterValue === '2' && !task.done){
                    return true;
                } else if(this.filterValue === '1' && task.done){
                    return true;
                } else if(this.filterValue === ''){
                    return true;
                }
            });
        },
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
    created(){}
}).mount('#app')


