import React from 'react'
import './Creant.css';
import img from '../Img/m1.jpg'; 
const Creant = () => {
  return (
    <div id="Creant">
      <div className="Container1">
        <ul>
          <li>
            <h1>Mauris id Teilus convallis,</h1>
            <h1>eleifend ipsum eget</h1>
          </li>

          <li>
            <h3>ELEIFEND IPSUM EGET , MAURIS TEMPUS LACUS</h3>
            <p>
              fjdlajf ajflka jflas alfas a fklsdj jfal asjfla fjalsjf asjflas
              jfals f
            </p>
          </li>
        </ul>
      </div>

      <div className="Container2">
        <ul>
          <li>
            <h1>LOREM IPSUM SIT AMET</h1>
          </li>
          <li>
            <p>Consumer adapindjsfj sdkfjsaljf jfkalsjf jfdsfja</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={img} alt="Image not loaded" />
          </li>
          <li>
            <img src={img} alt="Image not loaded" />
          </li>
          <li>
            <img src={img} alt="Image not loaded" />
          </li>
        </ul>
      </div>

      <div className="container3">
        <ul>
          <li>
            <ul>
              <li>
                <img src={img} alt="not loaded" />
              </li>
              <li>
                <h1>DONEC VITAE METUS</h1>
              </li>
              <li>
                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>

                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <img src={img} alt="not loaded" />
              </li>
              <li>
                <h1>DONEC VITAE METUS</h1>
              </li>
              <li>
                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>

                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <img src={img} alt="not loaded" />
              </li>
              <li>
                <h1>DONEC VITAE METUS</h1>
              </li>
              <li>
                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>

                <h3>aksjflasjflksadjflsadjflksajflsjf</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="container4">
        <ul>
          <li>
            <img src={img} alt="not loaded" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Creant


// create a webpage in react with Creant.js and Creant.css file. in creant.css put css of page. in Creat.js page put react code and import 
// file . Page description . first component has 2 paragraph of 2 lines. each paragraph has a little space between them . 2nd para
// graph has 3 images in one row with space around.  3rd container has 3 cards in one row. one card has a image , a h1 tag paragraph and p tag paragraph vertically one below another with minor space
// 4 th container has one image then one text para then another image then another paragraph in one row with little space. 
// lastly page has a footer 
//kindly understand the requirement sincerely. use any URL of image from internet for image section. Give a beautifull page. Give Creant prefix to each classname of element of html. 