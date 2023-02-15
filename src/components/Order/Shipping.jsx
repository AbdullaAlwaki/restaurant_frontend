import React, { useState } from 'react';
import { FaPaypal,FaCcVisa } from 'react-icons/fa';
// import payPal from '../../images/payPal.jpg';
// import visa from '../../images/visa.png';
import Liferando from '../../images/lieferservice.svg';
import bar from '../../images/geld.svg';
// import pickUp from '../../images/pickUp.png';
function Shipping(props) {
    const [warning, setWarning] = useState(false);

    const submitOrderShipPay = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
          setWarning(false);
          props.setPage(3);
        } else {
          setWarning(true);
        }
      };
  return (
    <div className='shipping-info' onSubmit={submitOrderShipPay}>

        <div className="shipment">
             <h2>Shipping</h2>
             <div className="shipment-mode">
              <label>
            <input
            required
            type="radio"
            name="shipping"
            value="liferando"
            className='bar_img'
            />
             
         


        </label>
        <label className='picks'>
            <input
            required
            type="radio"
            name="shipping"
            value="pickUp"
            />
            <p className='pickUp'>PickUp in Shop</p>
         {/* <img className='payment-img'  src={pickUp} alt="pickUp" /> */}
        </label>
             </div>
        
        </div>
        <div className="payment">
             <h2>Payment</h2>

             <div className="payment-mode2">
                <label>
            <input
            required
            type="radio"
            name="payment"
            value="Paypal"
            />
            <FaPaypal className='paypal'/>
         {/* <img className='payment-img'  src={payPal} alt="payPal"/> */}
        </label>
        <label>
            <input
            required
            type="radio"
            name="payment"
            value="Bar-bezahlen"
            className='bar_img'
            />
    
<svg version="1.0" 
className='liefer-img'
  viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M719 4072 c-39 -20 -62 -41 -84 -77 -29 -47 -30 -51 -33 -202 l-3
-153 -207 0 c-196 0 -210 -1 -258 -24 -58 -27 -106 -80 -123 -135 -15 -52 -16
-2248 0 -2304 13 -49 73 -115 124 -138 38 -18 122 -19 1891 -19 1752 0 1853 1
1873 18 33 26 31 79 -3 109 l-27 23 -1835 0 -1835 0 -24 25 -25 24 0 1111 0
1111 25 24 24 25 351 0 351 0 26 26 c20 20 24 31 19 57 -10 52 -37 67 -122 67
l-74 0 0 133 c0 127 1 135 23 155 l23 22 2063 0 2062 0 24 -25 c24 -23 25 -30
25 -150 0 -120 1 -127 25 -150 31 -32 69 -32 100 0 24 23 25 29 25 152 0 70
-5 145 -11 166 -13 49 -73 115 -124 138 -38 18 -130 19 -2126 19 l-2087 0 -53
-28z"/>
<path d="M1165 3615 c-14 -13 -25 -36 -25 -50 0 -14 11 -37 25 -50 l24 -25
1616 0 1616 0 24 -25 25 -24 0 -1114 0 -1114 -23 -21 c-21 -20 -34 -22 -145
-22 -112 0 -123 -2 -148 -23 -36 -31 -38 -82 -4 -109 22 -18 38 -19 170 -16
143 3 148 4 195 33 36 22 57 45 77 84 28 53 28 54 28 247 l0 194 158 0 c144 0
161 2 208 24 58 27 106 80 123 135 8 27 11 265 11 825 l0 787 -25 24 c-31 32
-69 32 -100 0 l-25 -24 0 -786 0 -786 -25 -24 c-23 -24 -28 -25 -175 -25
l-150 0 0 868 c0 821 -1 869 -19 908 -23 49 -88 107 -140 122 -28 9 -457 12
-1655 12 l-1617 0 -24 -25z"/>
<path d="M711 3271 c-11 -11 -22 -41 -26 -72 -9 -70 -25 -107 -64 -152 -47
-53 -90 -76 -172 -92 -46 -8 -78 -20 -86 -31 -10 -14 -13 -139 -13 -595 0
-665 -8 -614 96 -628 136 -20 221 -104 239 -240 4 -31 15 -61 26 -72 18 -18
63 -19 1602 -19 1542 0 1584 0 1601 19 10 10 21 47 26 80 18 131 101 213 232
231 107 15 98 -42 98 627 0 665 7 614 -90 627 -69 9 -108 26 -155 67 -44 39
-85 119 -85 167 0 39 -23 87 -45 96 -9 3 -725 6 -1591 6 -1530 0 -1575 -1
-1593 -19z m3094 -178 c36 -123 146 -230 278 -272 l37 -13 -2 -480 -3 -481
-55 -19 c-108 -36 -212 -140 -248 -248 l-19 -55 -1481 -3 -1480 -2 -13 37
c-42 132 -149 242 -272 278 l-42 12 -3 481 -2 482 27 6 c42 10 134 60 170 91
44 38 98 122 118 183 l17 50 1480 -2 1481 -3 12 -42z"/>
<path d="M1125 2905 c-21 -20 -25 -34 -25 -79 l0 -54 -54 -31 c-93 -52 -147
-160 -132 -263 10 -66 62 -147 116 -180 25 -16 77 -34 115 -42 92 -18 103 -23
120 -57 51 -99 -43 -202 -141 -155 -24 11 -41 30 -57 63 -29 61 -62 81 -105
64 -41 -17 -53 -53 -36 -111 17 -59 72 -122 129 -150 l45 -22 0 -59 c0 -68 21
-99 69 -99 51 0 74 29 79 99 4 60 6 63 41 81 89 45 140 128 141 228 0 143 -88
242 -237 263 -78 11 -119 41 -129 95 -8 46 19 98 63 119 60 29 123 0 153 -69
31 -73 102 -80 139 -15 13 24 13 32 -4 75 -20 55 -99 140 -140 150 -23 6 -25
10 -25 66 0 49 -4 63 -25 83 -13 14 -36 25 -50 25 -14 0 -37 -11 -50 -25z"/>
<path d="M3406 2909 c-23 -18 -26 -28 -26 -80 0 -59 -1 -60 -34 -74 -152 -64
-204 -264 -103 -397 42 -56 116 -95 192 -104 49 -6 66 -13 93 -40 73 -73 12
-193 -93 -180 -44 5 -95 51 -95 85 0 24 -45 61 -74 61 -32 0 -64 -26 -71 -60
-13 -61 58 -170 138 -211 33 -17 37 -24 37 -58 0 -80 29 -121 84 -121 45 0 66
32 66 98 l0 59 40 18 c53 24 112 89 135 148 21 57 17 144 -10 201 -37 77 -130
145 -200 146 -16 0 -47 5 -68 11 -101 28 -101 179 1 209 59 18 102 -4 138 -71
20 -37 37 -55 56 -60 33 -9 69 9 85 42 27 56 -36 164 -120 209 -46 24 -47 26
-47 73 0 101 -59 147 -124 96z"/>
<path d="M2144 2706 c-130 -30 -255 -94 -352 -181 -46 -42 -55 -57 -55 -84 0
-42 32 -74 72 -73 22 0 47 14 84 47 66 58 186 120 268 140 183 43 394 -2 534
-114 82 -66 94 -73 122 -73 32 0 73 42 73 75 0 34 -115 137 -206 184 -128 67
-200 85 -349 89 -88 2 -150 -1 -191 -10z"/>
<path d="M2170 2401 c-80 -26 -136 -57 -186 -103 -52 -48 -59 -90 -21 -126 34
-32 68 -27 126 19 135 107 314 107 445 -1 55 -45 94 -52 126 -20 12 12 20 33
20 54 0 28 -9 42 -51 80 -55 49 -131 90 -200 105 -69 16 -197 12 -259 -8z"/>
<path d="M2248 2120 c-40 -12 -97 -49 -108 -70 -27 -50 3 -111 55 -112 17 0
46 9 65 21 44 27 70 27 105 -1 76 -60 164 22 109 101 -37 52 -152 83 -226 61z"/>
</g>
</svg>

        </label>
        <label>
            <input
            required
            type="radio"
            name="payment"
            value="Visa"
            className='visa_svg'
            />
            <FaCcVisa className='paypal'/>
        {/* <img className='payment-img'  src={visa} alt="visa"/> */}
        </label>
             </div>
      
        </div>
        {warning?(
        <h2>Please choose shipping and payment mode.</h2>
      ): null}
        <div className='pay-to'>
      <button className='menu-back'onClick={()=>{props.setPage(1)}}>Previous</button>
      <button className='menu-back' onClick={()=>{props.setPage(0)}}>Next</button>
      </div>

      
    </div>
  )
}

export default Shipping