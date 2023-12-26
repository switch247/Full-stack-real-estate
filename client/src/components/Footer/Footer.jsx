import React from "react";
import { footer } from "../../data/Data";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val,idx) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul key={idx}>
                {val.text.map((items,index) => (
                  <li key={index}> <a href={items.list}>{items.list}  </a></li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </footer>

      <div className='legal'>
        <span>© 2023 RealUP.</span>
        {/*  Designd By GorkCoder updated by abel(switch247). */}
      </div>
    </>
  )
}

export default Footer
