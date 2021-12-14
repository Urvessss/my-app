import { createSlice } from "@reduxjs/toolkit";


const EmpSlice =createSlice({
    name:'emp',
    initialState:{
        empState:{
            eid:1011,
            firstName:'Urvesh',
            salary:2500
        },
        reducer:{
            getEmpById:(state,action)=>{
                state.empState=action.paylode;
            }

            
        }
    }
    
});
export const {getEmpById}=EmpSlice.actions;
export default EmpSlice.reducer;