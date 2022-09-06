import bgImage from '../../assets/video/video.mp4'
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
    return ( 
        <div className='home'>
            <div>
                <video className='home_trailer'
                autoPlay loop muted
                src={bgImage} type='video/mp4'
                />
            </div>
            <div className='home_wrap'>
                <div className='home-to-content'>
                    <Link to='/content'>Content</Link>
                </div>
                <div className='home_user'>
                    <spam>dang ki</spam>
                    <spam>dang nhap</spam>
                </div>
            </div>
            <div className='home_content'>
                <h1>Gozila</h1>
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
            </div>
        </div>
     );
}

export default Home;