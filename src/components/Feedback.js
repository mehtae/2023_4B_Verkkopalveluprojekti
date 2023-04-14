import React, {useState} from "react"
import  StarRateIcon  from '@mui/icons-material/StarRate';
import "../styles/feedback.css"

const Feedback = () => {
    const [rating, setRating] = useState(0);

    return ( 
        <div>
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i +1;

                return ( <label> 
                    <input
                    type="radio"
                    name="rating" 
                    value={ratingValue}
                    onClick={() => setRating = (ratingValue)}/>

                    <StarRateIcon className="star"
                    color={ ratingValue === rating ? "#ffc107" : "#e4e5e9" }
                    fontSize={"large"}/>
                     </label>
                     )
            })}
        </div>
    )
}
export default Feedback

