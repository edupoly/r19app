import { useFormik } from "formik"
import * as Yup from 'yup'


function StudentdetailsYup() {
  var formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      dob:''
    },
    validationSchema:Yup.object({
      firstname:Yup.string().max(8,"too big to spell").min(3,'too small').required('firstname is must'),
      lastname:Yup.string().max(10,"too big to spell").min(5,'too small').required('lastname is must')
    }),
    onSubmit:(values)=>{
      console.log("onsubmit",values)
    }
  })
  console.log(formik.touched)
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h1>Studentdetails with Yup</h1>
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
export default StudentdetailsYup