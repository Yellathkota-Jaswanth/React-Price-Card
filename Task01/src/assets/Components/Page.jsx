// Page.jsx (assuming this is where your Page component is defined)
import React from 'react';
function Page() {
  return (
    <>
            <h1 style={{textAlign:'center'}}>React Price Card Task</h1>

      <div className='object'>
      <div className="box">
        <div className='box1'>
        <h4>FREE</h4>
        <h3>$0/month</h3>
        <h4>
          ✔️Single <br />
          ✔️50GB Storage<br />
          ✔️Unlimited Public Projects<br />
          ✖Umlimited Private Projects<br />
          ✖Free Subdomain<br />
          <button style={{color:'white', backgroundColor:'blue', }}>BUTTON</button>
        </h4>
      </div>
      <div className="box2">
        <h4>PLUS</h4>
        <h3>$9/month</h3>
        <h4>
          ✔️% Users <br />
          ✔️50GB Storage<br />
          ✔️Unlimited Public Projects<br />
          ✔️Umlimited Private Projects<br />
          ✔️Free Subdomain<br />
          <button style={{color:'white', backgroundColor:'blue', }}>BUTTON</button>
        </h4>
      </div>
      <div className="box3">
        <h4>PLUS</h4>
        <h3>$49/month</h3>
        <h4>
          ✔️% Unlimited Users <br />
          ✔️50GB Storage<br />
          ✔️Unlimited Public Projects<br />
          ✔️Umlimited Private Projects<br />
          ✔️Free Subdomain<br />
          <button style={{color:'white', backgroundColor:'blue', }}>BUTTON</button>

        </h4>
      </div>
      </div>
      </div>
    </>
  );
}

export default Page;
