import { Link } from 'react-router-dom'
import './Profile.css'
function Profile() {

    return (
    <div>
        <div className='profile'>
        <h1 className='profile_title'>profile</h1>
            <ul>
                <li className='profile_item'>Người dùng</li>
                <li className='profile_item'>Trợ giúp</li>             
                <li className='profile_item'>Cài đặt</li>             
                <li className='profile_item'>Thông báo</li> 
                <div className='profile_wrap'>
                    <Link className='them_film' to='/login'>
                        Them film
                    </Link>
                    <span className='them_film '>Đăng xuất</span>                         
                </div>            
            </ul>
        </div>
    </div>);
}

export default Profile;