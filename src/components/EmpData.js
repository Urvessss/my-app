import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getEmpById } from "./redux/EmpSlice";


const EmpData =(props)=>{

    const [empState,setEmp]=useState(new Employee());
    const dispatch=useDispatch();

    const empDataFromstore=useSelector((state)=>state.emp.empState);

    const handleEmp=(e)=>{
        setEmp({
            ...emp,
            [e.target.name]:e.target.value
        });
    }

    const submitGetEmpById=(evt)=>{
        evt.preventDefault();
        axios.get('emp/getempbyid/${emp.eid}')
        .then((response) => {
            dispatch(getEmpById(response.data));
            setEmp({ eid: '' });
        })
        .catch(() => {
            alert("Employee not found.");
            setEmp({ eid: '' });
            dispatch(getEmpById(emp));
        });
    }
    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Employee Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find employee by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetEmpById}>
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Enter eid to search" autoFocus />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
                </form>
                <p>Data from store: {empDataFromstore.eid} {empDataFromstore.firstName} {empDataFromstore.salary}</p>
            </div>

        </div>
    );
}
export default EmpData;