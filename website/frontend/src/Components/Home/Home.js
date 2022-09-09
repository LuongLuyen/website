import bgVideo from '../../data/video/v1.mp4'
import imgTrailer from '../../data/img/trailer.jpg'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return ( 
        <div className='home'>
            <div>
                <div>
                    <video className='home_trailer'
                    autoPlay loop muted
                    src={bgVideo} type='video/mp4'
                    />
                </div>
            </div>
            <div className='wrap'>
                <div className='home_wrap'>
                    <div>
                        <h1>HOME</h1>
                    </div>
                    <div className='home_user'>
                        <spam>Đăng kí</spam>
                        <spam>Đăng nhập</spam>
                    </div>
                </div>
                <div className='home_content'>
                    <h1>Trailer Film</h1>
                </div>
                <div className='home_item'>
                    <p>
                    YASUO KẺ BẤT DUNG THỨ YASUO KẺ BẤT DUNG THỨ
                    </p>
                    <p>
                    Khi còn nhỏ, Yasuo thường tin vào điều những người trong làng đồn đại về mình:
                    trường hợp tốt nhất, sự tồn tại của anh là sơ suất của thần linh;
                    trường hợp xấu nhất, anh là sai lầm không thể cứu vãn
                    </p>
                    <p>
                    Khi còn nhỏ, Yasuo thường tin vào điều những người trong làng đồn đại về mình:
                    trường hợp tốt nhất, sự tồn tại của anh là sơ suất của thần linh;
                    trường hợp xấu nhất, anh là sai lầm không thể cứu vãn
                    </p>
                    <div>
                        <Link className='home-to-content' to='/content'>XEM NGAY</Link>
                    </div>
                </div>
                <div className='trailer_wrap'>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                    <img className='trailer_item' src={imgTrailer} alt='/'/>
                </div>
            </div>
        </div>
     );
}

export default Home;