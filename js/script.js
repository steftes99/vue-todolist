const app = new Vue ({
    el : '#app',
    data: {
        nuovoTodo : '' ,
        todo : [
            'fare gli esercizi',
            'allenarsi',
            'fare la spesa',
            'pulire la camera',
            'portare a spasso il cane'
        ]
    },
    methods: {
        addTodo(){
            this.todo.push(this.nuovoTodo);
            this.nuovoTodo = '';
        },
        removeTodo(indice){
            this.todo.splice(indice,1)
        }
    }
})