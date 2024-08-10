import './Cards.css'

function Cards(props){
    
    return(
      <div className='card' style={{backgroundColor: props.backColor}}>
        <img className='Icon' src={props.Icon}/>
        <div className='content'>
            <div className='header'>
                <label className='heading'>{props.Text}</label>
                <img className='menu' src={props.Img}/>
            </div>
            <div className='body'>
             <label className='durationHours'>{props.TimeHours}</label>
             <label className='durationWeeks'>{props.Weeks}</label>
            </div>
        </div>
      </div>
    )
}
export default Cards