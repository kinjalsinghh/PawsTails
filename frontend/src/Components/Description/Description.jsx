import './Description.css'

function Description(){
    let x = Math.floor((Math.random() * 1000) + 1);
   return(
     <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">Reviews {x}</div>
        </div>
        <div className='descriptionbox-description'>
            <p>kdjeoiedlweldlwldlwl</p>
            <p>hkjskskhuukjn</p>
        </div>
     </div>
   )
}
export default Description