import { useState } from "react"

function StudentForm() {
  var [student,setStudent]=useState({
    firstname:'',
    lastname:'',
    gender:'',
    dob:'',
    country:'',
    pincode:''
  })
  function addStudent(){
    console.log(student)
  }
  function handleSubmit(e){
    e.preventDefault();
    
    addStudent();
  }
  function handlePincode(e)
  {
    if(e.target.value>999999 || e.target.value<=100000){
      e.target.style.border='2px solid red'
      return
    }
    else{
      e.target.style.border=''
      setStudent({...student,pincode:e.target.value})
    }
  }
  return (
    <div>
      <h1>StudentForm</h1>
      <form onSubmit={handleSubmit}>
        <table width="50%" align="center">
          <tr>
            <td>Firstname:</td>
            <td><input type="text" required onChange={(e)=>{setStudent({...student,firstname:e.target.value})}}/></td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td><input type="text" onChange={(e)=>{setStudent({...student,lastname:e.target.value})}} /></td>
          </tr>
          <tr>
            <td>gender</td>
            <td>
              <input type="radio" name="gen" id="" value="male" onChange={(e)=>{setStudent({...student,gender:e.target.value})}} />:Male
              <input type="radio" name="gen" id="" value="female" onChange={(e)=>{setStudent({...student,gender:e.target.value})}} />:Female
              <input type="radio" name="gen" id="" value="others" onChange={(e)=>{setStudent({...student,gender:e.target.value})}} />:Others
            </td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>
              <input type="date" name="" id="" onChange={(e)=>{setStudent({...student,dob:e.target.value})}} />
            </td>
          </tr>
          <tr>
            <td>Country</td>
            <td>
              <select name="country" id=""  onChange={(e)=>{setStudent({...student,country:e.target.value})}} >
                <option value="IND">India</option>
                <option value="PAK">Pakistan</option>
                <option value="SRL">Srilanka</option>
                <option value="SA">Southafrica</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>
              <input type="number" maxlength="3" onBlur={handlePincode} />
            </td>
          </tr>
          <tr>
            <td colspan={2} align='center'>
              <button>Add Student</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
export default StudentForm