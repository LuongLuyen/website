import video from '../../data/video/v1.mp4'
function Video() {
    return ( 
        <div className='product_video'>
                <video
                className='product_video-item'
                src={video} type='video/mp4'
                controls
                />
        </div>
    )
}

export default Video;