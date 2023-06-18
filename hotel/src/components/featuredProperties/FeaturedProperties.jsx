// import { CircularProgress } from "@material-ui/core"
// import useFetch from "../../hooks/useFetch"
import "./featuredProperties.css"
import I1 from './images/i1.jpeg'
import I2 from './images/i2.jpeg'
import I3 from './images/i3.jpeg'
import I4 from './images/i4.jpeg'



const data = [
  {
    id: 1,
    photos: I1,
    name: 'Taj Hotel',
    city: 'Mumbai',
    desc: '10 minutes from andheri airport',
    cheapestPrice: '28,382 Rupees',
    rating: '4'
  },
  {
    id: 2,
    photos: I2,
    name: 'Shaan Hotel',
    city: 'Mumbai',
    desc: '10 minutes from bandra station',
    cheapestPrice: '14,382 Rupees',
    rating: '5'
  },
  {
    id: 3,
    photos: I3,
    name: 'Udipi Hotel',
    city: 'Mumbai',
    desc: '10 minutes from andheri airport',
    cheapestPrice: '18,382 Rupees',
    rating: '3'
  },
  {
    id: 4,
    photos: I4,
    name: 'Maheshwari Hotel',
    city: 'Mumbai',
    desc: '10 minutes from andheri airport',
    cheapestPrice: '34,382 Rupees',
    rating: '5'
  },

];

const FeaturedProperties = () => {
  // const {data,loading,error}=useFetch("/hotels?featured=true&limit=4")

  return (
    <div className="fp">

      {data.map(item => (

        <div className="fpItem" key={item.id}>
          <img src={item.photos} alt="photos" className="fpImg" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpCity">{item.desc}</span>
          <span className="fpPrice">Starting from Rs {item.cheapestPrice}/-</span>
          {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>

          </div>}

        </div>))}

    </div>

  )
}
export default FeaturedProperties