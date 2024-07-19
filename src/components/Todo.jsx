import React, {useState} from 'react'

const Todo = () => {

    const [data, setData] = useState("")
    const [iteam, setIteam] = useState([])
    const [edititem, setEditItem] = useState(null)
    const [togglebtn, setTogglebtn] = useState(true)

    const handleonChange = (e)=>{
        setData(e.target.value);
    }

    const onsubmit = ()=>{
     // console.log("hi")
      //setIteam((pre)=>([...pre, {id: new Date().getTime().toString(), name: data}])) 
      if(!data){
        alert("fill the data")
      }
      else if(data && !togglebtn){
        setIteam(iteam.map((curr)=>{
          if(curr.id === edititem){
            return {...curr, name: data}
          }
          return curr
        })
        )

        setTogglebtn(true)
        setData("")
        setEditItem(null)

      }
      else{
        const alldata = {id: new Date().getTime().toString(), name: data}
        setIteam([...iteam, alldata])
        setData("")
      }

      //setData("")
      //console.log(iteam)
      
    }

    const removeitem = (id)=>{
      //console.log(id)
      const newitem = iteam.filter((ele)=>{
        return ele.id !== id;
      })

      setIteam(newitem)
    }

    //console.log(iteam)

    const editItem = (id)=>{
      //console.log(id)
      const setinput = iteam.find((ele)=>{
        return ele.id === id;
      })

      //console.log(setinput)
      setTogglebtn(false)
      setData(setinput.name)
      setEditItem(id)
    }

    


  return (
    <div>
      <div className='pt-20'>
        
        <input type="text" value={data} onChange={handleonChange}/>
        { togglebtn ?
        <button onClick={onsubmit} type='submit'>submit</button>
        :
        <button onClick={onsubmit} type='submit'>Update</button>
        }
        
    </div>
      

        <br />
        <br />
        <br />
        <br />
        
        {
          iteam && iteam.map((iteam, index)=>{
            return (
              <div className='item' key={iteam.id}>
                <span><b>{iteam.name}</b></span>
                <div>
                <span onClick={()=>{editItem(iteam.id)}} className='edititem'>EDIT</span>
                <span onClick={()=>{removeitem(iteam.id)}} className='removeitem'>REMOVE</span>
                </div>
              </div>
            )
          })
        }


    </div>
  )
}

export default Todo;
