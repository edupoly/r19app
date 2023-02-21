import { useFormik } from "formik"

function checkForm(values){
  var errors={};
  if(!values.firstname){
    errors.firstname='first name is madatory'
  }
  if(!values.dob){
    errors.dob='We would like to know your birthday'
  }
  return errors;
}

function Studentdetails() {
  var formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      dob:''
    },
    validate:checkForm,
    onSubmit:(values)=>{
      console.log("onsubmit",values)
    }
  })
  console.log(formik.touched)
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h1>Studentdetails</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <div>{formik.touched.firstname && formik.errors.firstname}</div>
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <div>{formik.touched.lastname && formik.errors.lastname}</div>
        <label htmlFor="db">Date of Birth</label>
        <input type="text" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <br></br>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}
export default Studentdetails