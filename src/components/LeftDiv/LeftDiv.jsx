import './LeftDiv.css'
import Img1 from '../../assets/image-jeremy.png'


function LeftDiv() {
    return(
      <div id="infoDiv">
        <div id="profileInfo">
            <div id='imgDiv'>
            <img src={Img1}/>
            </div>
            <div id='topDiv'>
                <label className='text'>Report for</label>
                <label className='name'>Jeremy Robson</label>
            </div>
            </div>
            <div id='date'>
                <label className='time'>Daily</label>
                <label className='time'>Weekly</label>
                <label className='time'>Monthly</label>
            </div>
        
      </div>
    )
}
export default LeftDiv