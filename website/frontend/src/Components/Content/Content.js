import videoContent from '../../assets/video/video.mp4'
import imgContent from '../../assets/img/a.jpg'
import './Content.css'
function Content() {
    return ( 
        <div className='app'>
            <div className='header'>
                <div className='header_home'>
                    <div>
                        <h1>Phim Bờ Rồ</h1>
                    </div>
                    <div className='header_user'>
                        <spam>Thông báo</spam>
                        <spam>Trợ giúp</spam>
                        <img src="Avt" alt='/'/>
                    </div>
                </div>
                <div className='header_search'>
                    <input
                    className='header_search-input'
                    type = 'text'
                    placeholder='Tìm kiếm'
                    />
                </div>
                <div className='header_category'>
                    <ul className='header_list'>
                        <li className='header_list-item'>Hành động</li>
                        <li className='header_list-item'>Phiêu lưu</li>
                        <li className='header_list-item'>Hoạt hình</li>
                        <li className='header_list-item'>Kungfu</li>
                        <li className='header_list-item'>Kinh dị</li>
                    </ul>
                </div>
            </div>
            <div className='product'>
                <div className='product_video'>
                    <video
                    controls
                    className='product_video-item'
                    src={videoContent} type='video/mp4'
                    loop
                    />
                </div>
                <div className='product_wrap'>
                    <div className='product_film'>
                        <img className='product_img' src={imgContent} alt='/'/>
                        <p>Tập:</p>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div className='product_film'>
                        <img className='product_img' src={imgContent} alt='/'/>
                        <p>Tập:</p>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div className='product_film'>
                        <img className='product_img' src={imgContent} alt='/'/>
                        <p>Tập:</p>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div className='product_film'>
                        <img className='product_img' src={imgContent} alt='/'/>
                        <p>Tập:</p>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                    <div className='product_film'>
                        <img className='product_img' src={imgContent} alt='/'/>
                        <p>Tập:</p>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;