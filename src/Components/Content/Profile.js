import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
function Profile() {
    const [items, setItems] = useState([])
    useEffect(() => {
      const items = JSON.parse(sessionStorage.getItem('items'))
      if (items) {
       setItems(items)
      }
    }, [])
    return (
    <div>
        <div className='profile'>
        <h1 className='profile_title'>profile</h1>
            <ul>
                <li className='profile_item-username'>{items}</li>
                <li className='profile_item'>Trợ giúp</li>             
                <li className='profile_item'>Cài đặt</li>             
                <li className='profile_item'>Thông báo</li> 
                <li className='profile_item'>Xóa Tài khoản</li> 
                <div className='profile_wrap'>                        
                    <Link className='them_film' to='/upload'>
                        Them film
                    </Link>
                    <Link className='them_film' to ='/login'>
                        Đăng xuất
                    </Link>                        
                </div>            
            </ul>
        </div>
    </div>);
}

export default Profile;