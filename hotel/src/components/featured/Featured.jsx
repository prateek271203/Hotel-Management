import { useNavigate } from "react-router-dom";
import "./Featured.css"

const data = [
   23, 98, 34
];


const Featured = () => {
   const navigate = useNavigate();

   const handleclick = () => {
      navigate("/hotels/hyderabad")
   }
   const handleclick1 = () => {
      navigate("/hotels/mumbai")
   }
   const handleclick2 = () => {
      navigate("/hotels/banglore")
   }

   return (
      <div className="featured">

         <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_15BPlbzyI3dmLUm9n_sbtmHEFD-UPzkOA&usqp=CAU"
               alt=""
               className="featuredImg"
               onClick={handleclick}
            />
            <div className="featureTitles">
               <h1>Hyderabad</h1>
               <h2>{data[0]} Properties</h2>
            </div>
         </div>

         <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzk9_B3pc-H1-UluOx9t2RbJolPP44SAylw&usqp=CAU"
               alt=""
               className="featuredImg"
               onClick={handleclick1}
            />
            <div className="featureTitles">
               <h1>Mumbai</h1>
               <h2>{data[1]} Properties</h2>
            </div>
         </div>

         <div className="featuredItem">
            <img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/05/shrutisuman13-wikicommons.jpg"
               alt=""
               className="featuredImg"
               onClick={handleclick2}
            />
            <div className="featureTitles">
               <h1>Bangalore</h1>
               <h2>{data[2]} Properties</h2>
            </div>
         </div>

      </div>
   )
}
export default Featured