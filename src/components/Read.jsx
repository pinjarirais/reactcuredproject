import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser, showUser } from '../features/userdetailSlice';
import './CustomModal.css'
import CustomModal from './CustomModal';

const Read = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [showpopup, setShowPopup] = useState(false);
    const [rdoData, setRdoData] = useState("")

    const {users, loading, searchData} = useSelector((state)=> state.app)
    useEffect(()=>{
        dispatch(showUser());
    }, []);


    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <div>
      {showpopup && <CustomModal id={id} showpopup={showpopup} setShowPopup={setShowPopup} />}
      <h2>All data</h2>
      <input
        className="form-check-input"
        name="gender"
        checked = {rdoData === ""}
        type="radio"
        onChange={(e)=>{setRdoData("")}}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        checked = {rdoData === "Male"}
        value="Male"
        type="radio"
        onChange={(e)=>{setRdoData(e.target.value)}}
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"        
        type="radio" 
        checked = {rdoData === "Female"}  
        onChange={(e)=>{setRdoData(e.target.value)}}     
      />
      <label className="form-check-label">Female</label>
      <div>
       
        {
            users && 
            users.filter((ele)=>{
              if(searchData.length === 0){
                return ele;
              }else{
                return ele.name.toLowerCase().includes(searchData.toLowerCase())
              }
            }).filter((ele)=>{
              if(rdoData === "Male"){
                return ele.gender === rdoData;
              }else if(rdoData === "Female"){
                return ele.gender === rdoData;
              }else{
                return ele;
              }
            })
            .map((ele)=>(
                <div className="card w-50 mx-auto my-2" key={ele.id}>
                    <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                    <p className="card-text">{ele.gender}</p>
                    <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(true)]}>
                        View
                    </button>
                    <Link to={`/edit/${ele.id}`}className="card-link">
                        Edit
                    </Link>
                    <Link onClick={() => dispatch(deleteUser(ele.id))} className="card-link" >
                        Delete
                    </Link>
                    </div>
                </div>

            ))
        }


        
           
      </div>
    </div>
  )
}

export default Read
