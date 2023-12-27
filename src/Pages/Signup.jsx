import React from 'react'

const Signup = () => {
  return (
    <div style={{background:"#FBFCFF",height:"100vh"}}>
        <img className='ab_img' src='/images/Circle (1).svg' alt=''/>
        <div className='Signup_flex'>
            <div><img className='signup_img' src='/images/sign_up.png' alt=''/></div>
            <div className='content_part'>
                <h4 className='text-center'>Signup</h4>
                <div className='fields_flex'>
                <div className='item_fields pr_4'>
                <div className='pb-4 pr_4'> <label for="fname">First name</label><br></br>
  <input className='input_cls' type="text" id="fname" name="fname"/></div>
  <div className='pb_4'>
  <label for="lname">Last name:</label><br></br>
  <input className='input_cls' type="text" id="lname" name="lname"/>
  </div>
            </div>
            <div>
                <div className='pb-4'> <label for="fname">Email</label><br></br>
  <input className='input_cls' type="text" id="fname" name="fname"/></div>
  <label for="lname">Phone No</label><br></br>
  <input className='input_cls' type="text" id="lname" name="lname"/>
            </div>
                </div>
                <div className='fields_flex pt-0'>
                <div className='item_fields_2 pr-4'>
                <div className='pr-4 pb_4'> <label for="fname">Password</label><br></br>
  <input className='input_cls' type="text" id="fname" name="fname"/></div>
  <div className='pb_4 cpad'>  <label for="lname">Confirm Password</label><br></br>
  <input className='input_cls' type="text" id="lname" name="lname"/></div>
            </div>
                </div>
                <div className='btn'><button className='signup_btn'>Signup</button></div>
                </div>
                
        </div>
    </div>
  )
}

export default Signup