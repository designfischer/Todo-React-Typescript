interface Todo {
    index: number
    description: string    
    removeTodo: (id: number) => void    
}

interface Todos {
    index: number
    description: string    
}