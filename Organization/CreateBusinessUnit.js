import React from 'react'
import { useFormik } from "formik";
import {Link} from "react-router-dom"
import styles from "./BusinessUnit.module.css"

const validate = values => {
    const errors = {};
  
    if (!values.buname) {
      errors.buname = 'Required !!';
    } 
    

    
    if (!values.buleadername) {
      errors.buleadername = 'Required !!';
    } 
  
    
    if (!values.buleaderemail) {
      errors.buleaderemail = 'Required !!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.buleaderemail)) {
      errors.buleaderemail = 'Invalid email address';
    }

    
    if (!values.buleadercontact) {
      errors.buleadercontact = 'Required !!';
    }

    if (!values.designation) {
      errors.designation = 'Required !!';
    }  
    
    if (!values.primary) {
      errors.primary = 'Required !!';
    } 


    if (!values.secondary) {
      errors.secondary = 'Required !!';
    } 

    if (!values.level) {
      errors.level = 'Required !!';
    } 

    if (!values.reportingto) {
      errors.reportingto = 'Required !!';
    } 
  
    

    return errors;
  };

function CreateBusinessUnit() {
    const formik = useFormik({
        initialValues: {
          buname: '',  
          buleadername: '',
          buleaderemail: '',
          buleadercontact: '',
          designation: '',
          primary: '',
          secondary: '',
          level: '',
          reportingto: ''
    
        },
        validate,
        onSubmit: values => {
          alert(values);
        },
      });
    return (
        <div className= {styles.pagebody}>
          <Link to = "/bu"> 
            <h2 className= {styles.bu}>Business Unit</h2>
                <form className={styles.forms}>
                <label htmlFor="buname">BU Name:</label>
                    <input
                    id="buname"
                    name="buname"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buname}
                    />
                    {formik.touched.buname && formik.errors.buname ? (
                    <span className={styles.valid} >{formik.errors.buname}</span>
                    ) : null}
            

                    <label htmlFor="buleadername">BU Leader Name:</label>
                    <input
                    id="buleadername"
                    name="buleadername"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buleadername}
                    />
                    {formik.touched.buleadername && formik.errors.buleadername ? (
                    <span className={styles.valid} >{formik.errors.buleadername}</span>
                    ) : null}

                    <label htmlFor="buleaderemail">BU Leader Email:</label>
                    <input
                    id="buleaderemail"
                    name="buleaderemail"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buleaderemail}
                    />
                    {formik.touched.buleaderemail && formik.errors.buleaderemail ? (
                    <span className={styles.valid} >{formik.errors.buleaderemail}</span>
                    ) : null}

                    <br/>

                    <label htmlFor="buleadercontact">BU Leader Contact Number:</label>
                    <input
                    id="buleadercontact"
                    name="buleadercontact"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buleadercontact}
                    />
                    {formik.touched.buleadercontact && formik.errors.buleadercontact ? (
                    <span className={styles.valid} >{formik.errors.buleadercontact}</span>
                    ) : null}

                    
                    <label htmlFor="designation">Designation:</label>
                    <input
                    id="designation"
                    name="designation"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.designation}
                    />
                    {formik.touched.designation && formik.errors.designation ? (
                    <span className={styles.valid} >{formik.errors.designation}</span>
                    ) : null}


                    <label htmlFor="primary">Primary Role:</label>
                    <input
                    id="primary"
                    name="primary"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.primary}
                    />
                    {formik.touched.primary && formik.errors.primary ? (
                    <span className={styles.valid} >{formik.errors.primary}</span>
                    ) : null}

                    <br/>

                    <label htmlFor="secondary">Secondary Role:</label>
                    <input
                    id="secondary"
                    name="secondary"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secondary}
                    />
                    {formik.touched.secondary && formik.errors.secondary ? (
                    <span className={styles.valid} >{formik.errors.secondary}</span>
                    ) : null}

                    
                    <label htmlFor="level">Level:</label>
                    <input
                    id="level"
                    name="level"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.level}
                    />
                    {formik.touched.level && formik.errors.level ? (
                    <span className={styles.valid} >{formik.errors.level}</span>
                    ) : null}


                      
                    <label htmlFor="reportingto">Reporting To:</label>
                    <input
                    id="reportingto"
                    name="reportingto"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reportingto}
                    />
                    {formik.touched.reportingto && formik.errors.reportingto ? (
                    <span className={styles.valid} >{formik.errors.reportingto}</span>
                    ) : null}




            
                </form>
            </Link>
            
        </div>
    )
}

export default CreateBusinessUnit
