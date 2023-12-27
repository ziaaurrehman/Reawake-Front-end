import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_1'>
            <div>
                <img src='/images/awake2.svg' alt=''/>
            </div>
            <div className='footer_p'>Embrace a new era of productivity and<br></br> creativity. Join Reawaken and discover<br></br> the limitless possibilities that unfold<br></br> when tasks are approached with<br></br> intention and inspiration.</div>
        </div>
        <div className='footer_2'>
            <div className=''>
                <img src='/images/Title.svg' alt=''/>
            </div>
            <div className='footer_p pt-3 pl-1'>Home</div>
            <div className='footer_p pt-1 pl-1'>About</div>
            <div className='footer_p pt-1 pl-1'>Blog</div>
            <div className='footer_p pt-1 pl-1'>Pricing</div>
            <div className='footer_p pt-1 pl-1'>Contact</div>
            <div className='footer_p pt-1 pl-1'>Services</div>
        </div>
        <div className='footer_2'>
            <div className=''>
                <img src='/images/Group 388.svg' alt=''/>
            </div>
            <Link to="https://www.facebook.com">
            <div className='d-flex pt-1'>
                <img className='icon2' src='/images/fb.svg' alt=''/>
                <div className='footer_p pt-2 pl-2'>Facebook</div>
            </div>
            </Link>
            <Link to="https://www.linkedin.com/">
            <div className='d-flex pt-1'>
                <img className='icon2' src='/images/in.svg' alt=''/>
                <div className='footer_p pt-1 pl-2'>Linkedin</div>
            </div>
            </Link>
            <Link to="https://www.instagram.com/">
            <div className='d-flex pt-1'>
                <img className='icon2' src='/images/insta.svg' alt=''/>
                <div className='footer_p pt-1 pl-2'>Instagram</div>
            </div>
            </Link>
            <Link to="https://www.youtube.com/">
            <div className='d-flex pt-1'>
                <img className='icon2' src='/images/you.svg' alt=''/>
                <div className='footer_p pt-1 pl-2'>Youtube</div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer