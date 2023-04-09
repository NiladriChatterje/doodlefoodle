import './App.css'
import React from 'react'
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header />
      {/*<section className="features">
      <div className="container">
  
         <img src="assets/images/plate-2.png" className="feature-img" />  
  
  
         <div className="row">
  
          <div className="col-md-4">
              <div className="box">
                  <img src="assets/images/chef.png" />
                  <h3>Best Chef</h3>
                   <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum.</p>
              </div>   
         </div>
  
           <div className="col-md-4">
              <div className="box">
                  <img src="assets/images/fresh-food.png"/>
                  <h3>Fresh Food </h3>
                   <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum.</p>
              </div>   
         </div>
  
           <div className="col-md-4">
                  <div className="box">
                  <img src="assets/images/fast-delivery.png"/>
                  <h3>Fast Delivery</h3>
                   <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum.</p>
              </div>          
         </div>
  
      </div>
      </div>   
  </section>
  <section className="about">
    <a id="about"></a>
      <div className="container">
          <div className="row">
  
          <div className="col-md-6">
                   <img src="assets/images/plate3.png" />
          </div>
  
          <div className="col-md-6">
              <h3>About Us</h3>
                   <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                   <p className="green">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor </p>
                  <button type="button" className="btn btn-secondary">LEARN MORE</button>
          </div>
  
           </div>   
         </div>
     </section>
   <section className="blog" >
    <a id="blog"></a>
      <div className="container">
          <h3>Our Blog</h3>
          <div className="row" style={{maxHeight:'500px', display:'flex', overflow: 'auto'}}>
  
                  <div className="col-md-6" style="margin-bottom: 15px;">
                      <div className="card">
                          <img src="assets/images/icecream.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                              <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-md-6" style="margin-bottom: 15px;">
                      <div className="card">
                          <img src="assets/images/biriyani.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                              <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6" style="margin-bottom: 15px;">
                    <div className="card">
                        <img src="assets/images/icecream.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style="margin-bottom: 15px;">
                  <div className="card">
                      <img src="assets/images/biriyani.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                      </div>
                  </div>
              </div>
                <div className="col-md-6" style="margin-bottom: 15px;">
                  <div className="card">
                      <img src="assets/images/icecream.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                      </div>
                  </div>
              </div><div className="col-md-6" style="margin-bottom: 15px;">
                <div className="card">
                    <img src="assets/images/icecream.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6" style="margin-bottom: 15px;">
              <div className="card">
                  <img src="assets/images/biriyani.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                      <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                  </div>
              </div>
          </div>
                <div className="col-md-6" style="margin-bottom: 15px;">
                    <div className="card">
                        <img src="assets/images/biriyani.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
                        </div>
                    </div>
                </div>
                
                
                
  
           </div>   
         </div>
     </section>
   <section className="comment">
    <a id="comment"></a>
      <div className="container">
          
        <div className="row">
          <div className="col-md-6">
                   <img src="assets/images/grilled.png" />
          </div>
  
          <div className="col-md-6">
              <h3>What people say about doodlefoodle</h3>
              <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor fdjala hdtwrwj iipsum. amet,consectetur adipisinhdtwrwj iipsum Lorem ipsum dolar sit amet,consectetur adipisinLorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor .</p>
  
              <div className="faced">
    
              <img src="assets/images/face.png" />
              <p>Lorem ipsum dolar sit amet,consectetur adipisin sed do eiusmod tempor </p>        
  
              </div>
          </div>
          </div>
     
         </div>
     </section>
   <section className="deal">
    <a id="deal"></a>
      <div className="container">
        <h3>Deal of the Week</h3>
          <div className="row">
            <div className="box">
              <div className="col-md-6">
                
                  <img src="assets/images/grilled2.png" />
                </div>
            </div>
  
            <div className="col-md-6 sale" style="overflow: clip;">
                  <div className="box" >
                    
               <h1>Sale up to 20% 0ff</h1>
               <h1>ORGANIC COUSINE</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed doLorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do</p>
              <p> .      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
               .      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
               .      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
               .      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
               </div>
               <div style="display: flex;">
                 <div><p><b style="color: yellow;font-size:25px;">RS 250</b> Onwards</p></div><div style="position: absolute; right: 10px; ">
                <img src="assets/images/cart.png" />
               </div>
               </div>
              </div>
              
          </div>
    </div>
  </section>
  
  <div style=" margin-top: 35px;">
    <a id="dessert"></a>
        <img src="./assets/images/ice_cream1.png" style="width:11%;position: absolute;left: 10px;"/>
        <img src="./assets/images/ice_cream2.png" style="width:10%;position:absolute;right: 10px;"/>
        <div style="text-align: center; padding-top: 100px;background-image: linear-gradient(to bottom,rgb(238, 238, 94),rgb(255,255,210));">
          <p style="display: flex;justify-content: center;;"><b>SUBSCRIBE NOW</b>&nbsp;&nbsp; FOR COUPONS,NEWSLETTERS AND MORE!</p><br />
          <p style="display: flex;justify-content: center;"><input id="emailIn" type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />&nbsp;&nbsp;&nbsp;&nbsp;
          <button value="send" style="width: 40px; margin-top: 0.2%; height: 20px;border-style: none; border-radius: 2px; background-color: red;"></button>
          </p>
        </div>
  </div>
  <div style="background-color: black;text-align:center;padding:35px;color: white;display: flex;justify-content: center;">
      <div style="width: 33.33%;text-align:center;min-width: 150px;">
        <h5>Doode <b style="color: yellow;">Foodle</b></h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
           Rerum aliquid autem fugiat quidem amet recusandae iste ratione quis,<br/>
           saepe tempora expedita <br/>
           suscipit ex aperiam at odit laboriosam asperiores eum nulla!</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
            Recusandae impedit beatae vel numquam quis molestias iure. <br/>
           Tempora iusto unde vero,<br/>
             fugiat ratione alias voluptatum,<br/>
            soluta quae iste blanditiis eum beatae?</p>
            <h5>123 456 7895</h5><br/>
            <a href="https://www.gmail.com/" target="_blank" style="text-decoration: none; color: white;">www.doodefoodle.com</a>
  
      </div>
      <div style="width: 33.33%;text-align:center;min-width: 100px;">
        <h5 style="padding-left: 20px;">Quick <b style="color: yellow;">Links</b></h5>
          <ul className="end-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#desert">MENU</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#">PAGES</a></li>
         <li><a href="#">REACH</a></li>  
       </ul>
      </div>
      <div style="width: 33.33%;text-align:center;min-width: 150px;">
        <h5 style="padding-left: 20px;">Contact <b style="color: yellow;">Us</b></h5>
        <ul className="end-list">
         <li><img src="./assets/images/facebook.png" style="height: 10px;width: 10px;"/>&nbsp;<a target="_blank" href="https://www.facebook.com/">FACEBOOK</a></li>
          <li><img src="./assets/images/instagram.png" style="height:15px;width: 15px;"/>&nbsp;<a target="_blank" href="https://www.instagram.com/">INSTAGRAM</a></li>
          <li><img src="./assets/images/facebook.png" style="height: 10px;width: 10px;"/>&nbsp;<a target="_blank" href="https://www.twitter.com/">TWITTER</a></li>
        </ul>
      </div>
  </div>*/}
    </>
  );
};

export default App;
