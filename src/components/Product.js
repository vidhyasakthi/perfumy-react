import perfume1 from "./images/perfume1.jpg"
import perfume2 from "./images/perfume2.jpg"
import perfume3 from "./images/perfume3.jpg"
// Product Component
function Product(){
  return(<div className="products">
           
            <div className="box">
                
                        <img src={perfume1} alt="one"/>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
               
            
            <div className="box">
                <img src={perfume2} alt='two'/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src={perfume3} alt='three'/>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

        
        </div>)
}
export default Product