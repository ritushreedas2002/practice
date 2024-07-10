import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        tasks:[],
    },
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload);
        },
        updateTask:(state,action)=>{
            const {id,title,description}=action.payload;
            const existing=state.tasks.find((task)=>task.id===id);
            if(existing){
                existing.title=title;
                existing.description=description;
            }
        },
        deleteTask:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload);
        },
        moveTask: (state, action) => {
            const { id, newType } = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
              existingTask.type = newType;
            }
          },
    },
});

export const {addTask,updateTask,deleteTask,moveTask}=taskSlice.actions;
export default taskSlice.reducer;
