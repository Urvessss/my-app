import { configure } from "@testing-library/react";
import empReducer from './EmpSlice'
const store =configure(
    {
        reducer:{
            emp:empReducer
        }
    }
)
export default store;