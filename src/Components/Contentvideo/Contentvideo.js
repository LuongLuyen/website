import './Contentvideo.css'
function Video(value) {
    const dataVideo= value.value
    console.log(dataVideo)
    return ( 
        <div className='product_video'>
            {dataVideo.map((item)=>(
                <video key={item._id}
                className='product_video-item'
                src={item.video} type='video/mp4'
                controls
                />
            ))}
            <div className='chat'>
                <div className='content_chat'>
                    <span>chat</span>
                </div>
            </div>
        </div>
    )
}


export default Video;