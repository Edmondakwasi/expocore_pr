import React from 'react'

const Rating = () => {
  return (
    <>
    <div className="rating">
        <div>
            <p className="mr-2 ">(4.0)</p>
            <div>
                <p>2.5k rating</p>
            </div>
        
        </div>
       
        
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  
</div>
 
    </>
  )
}

export default Rating