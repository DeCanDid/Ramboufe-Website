import React from 'react';
import './Dynam.css';
import { Link } from 'react-router-dom';

// var Typed;
const Dynam = () => {

//   var typed = new Typed(".typing", {
//     strings: ["Programmer", "Developer", "Tech-Instructor", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

  return (
    <>
{/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">
      <img src={require ('../Images/chefHook-logo.jpg')}
      className='w-25' alt="" />
    </a>
    <ul>
      <li>MENUS</li>
      <li><Link to={'./Reservation'}>RESRVATION</Link></li>
      <li>RESTAURANT</li>
      <li>CATERING</li>
      <li>OUR TEAM</li>
      <li>ABOUT US</li>
      <li>CONTACT</li>
    </ul>
    
  </div>
</nav> */}
<div className='trans'>
    <div className='dashboard'>

      <div>
        <div className='mt-3 '>
          <h1 className='animate__animated animate__heartBeat'>_Welcome to <br />
          <span>Ramboufe_</span></h1>
        </div>
        <div>
        <h4>Savor the flavour of our Ramstatic delicacies... <span className='typing'></span></h4>
        </div>
      </div>
  </div>
    </div>

    <div>
    <h2 className='text-center py-2'>ABOUT US</h2>

    <div className='abt'>
      <div className='AboutText'>
      <p>It all started as a street food</p>

      <p>RamBoufe is a Nigerian based restaurant,
         with different varieties of ram dishes
      </p>
      <p>RamBoufe Kitchen is a down-to-earth restaurant
         serving modern Nigerian and diner fare. A definitive 
         neighborhood joints in Ibadan, RamBoufe offers a 
         laid-back dining experience in a casual setting to 
         guests from all walks of life. Honest food and honest 
         drinks set the foundation of RamBoufe’s menu. 
         While dishes have roots from all four corners of the country,
         we carefully integrate a range of far-flung flavors from across 
         the globe to keep palates guessing.
      </p>

      </div>

      <div className='aboutImage'>
        
      </div>
    </div>  
    </div>

    <div className="menus">
      <div>
        
      </div>
    </div>

    {/* <main>
      <div>
        <h3 className='mb-3x'>Explore in some of our varieties</h3>
      </div>
        <div className='flexy'>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>

          <aside className='col-3'>
            <img src={require ('../Images/ram-pasta.jpg')} alt="" />
            <aside>
              <b><p>Ram pasta</p></b>
            </aside>
          </aside>
        </div>
    </main> */}

    <div className='location'>
      <div className='branch-address mx-auto w-50 text-center mt-1 py-5'>
        <h3>Hours & Locations</h3>
        <div className='my-3'>
          <h5>Akala Branch</h5>
          <p>Kilometer 5 Alao Akala Expressway,</p>
             <p>Oluyole 200257, </p>
              <p>
             opposite fortune Plaza 

              </p>
              <p>Tuesday - Sunday 11 am - 10:00 pm</p>
             <a href="https://www.google.com/maps/place/Ram+Boufe/@7.3439179,3.8476067,17z/data=!4m19!1m12!4m11!1m3!2m2!1d3.8467806!2d7.3469239!1m6!1m2!1s0x10398d1cc531245d:0x6430f32b93cc00d9!2sRam+Boufe,+Kilometer+5+Alao+Akala+Expy,+Oluyole+200257,+opposite+fortune+plaza,+200001,+Ibadan,+Oyo!2m2!1d3.8503213!2d7.3439389!3m5!1s0x10398d1cc531245d:0x6430f32b93cc00d9!8m2!3d7.3439389!4d3.8503213!16s%2Fg%2F11t__rv705?entry=ttu" className='direction-link shadow'>Get Direction</a>
        </div>

        <div className='my-5  '>
          <h5>Bodija Branch</h5>
          <p>Favors junction, bodija,</p>
             <p>Beside paris hotel</p>
              
             <a href="https://www.google.com/maps/place/Ram+Boufe+Bodija/@7.344086,3.7677785,12z/data=!4m10!1m2!2m1!1sRam+Boufe+bodija!3m6!1s0x1039934ca67689b1:0x63a816c46114506c!8m2!3d7.4185936!4d3.9109753!15sChBSYW0gQm91ZmUgYm9kaWphWhIiEHJhbSBib3VmZSBib2RpamGSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11v19fh0l6?entry=ttu" className='direction-link shadow'>Get Direction</a>
        </div>

        <div>
          <h5>Ring Road Branch</h5>
          <p>Adeoti Plaza, (Behind Ibiza lounge)</p>
             <p>Opposite Matrix filling Station </p>
              <p>Adeoyo Roundabout, Off Ring Road Ibadan
              </p>
             <a href="https://www.google.com/maps/place/Ram+Boufe/@7.3595284,3.8667426,17z/data=!4m14!1m7!3m6!1s0x10398da10d74c0f3:0x76c9faf09626ccf3!2sRam+Boufe!8m2!3d7.3595231!4d3.8693175!16s%2Fg%2F11vc7z1367!3m5!1s0x10398da10d74c0f3:0x76c9faf09626ccf3!8m2!3d7.3595231!4d3.8693175!16s%2Fg%2F11vc7z1367?entry=ttu" className='direction-link shadow'>Get Direction</a>
        </div>
      </div>
    </div>

    <div className='landing-footer'>

      <div>
        <h3>Contact us via</h3>
        <li><i className="icofont-phone"></i>&nbsp; 0704 187 1382</li>
      </div>
      <div>
        <p>You can also reach out to us on social medials handles</p>
        <p>
        <a href="https://instagram.com/ramboufe?igshid=MzMyNGUyNmU2YQ=="><i class="icofont-instagram"></i></a>
        <a href=""><i className="icofont-facebook"></i></a>
        <a href="https://api.whatsapp.com/send?phone=2349139048653&text=Hi!%20I%20would%20like%20to%20place%20an%20order%20&source=&data="><i class="icofont-brand-whatsapp"></i></a>
        </p>
      </div>

      <div>
        <small>© Copyright © 2023 Ramboufe Restaurant</small>
      </div>
    </div>
    </>
  )
}

export default Dynam;