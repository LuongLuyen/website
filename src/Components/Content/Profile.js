import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Profile.css'
function Profile() {
    const [items, setItems] = useState(false)
    useEffect(() => {
      const items = JSON.parse(sessionStorage.getItem('items'))
      if (items) {
       setItems(items)
      }
    }, [])
    const deleteUser=()=>{
        axios.delete(`${process.env.REACT_APP_URL_SERVER}/api/posts/delete-user/${items}`)
        .then(res => {
            console.log(res.data)
        }) 
    }
    return (
    <div>
        <div className='profile'>
        <h1 className='profile_title'>HỒ SƠ</h1>
            <ul>
                <li className='profile_item-username'>{items}</li>
                <Link className='profile_item' to='../help'>
                    Trợ giúp
                </Link>
                <Link className='profile_item' to='../notification'>
                    Thông báo
                </Link>
                <li className='profile_item'>Cài đặt</li>             
                <li className='profile_item'>Sữa hồ sơ</li> 
                <Link to ='/admin'
                className= {`${items==='admin123'? 'profile_item':'no_film'}`}>
                    Quản lý người dùng
                </Link> 
                <Link to ='/login'
                onClick={deleteUser}
                className= {`${items!=='admin123'? 'profile_item':'no_film'}`}>
                    Xóa
                </Link> 
                <div className='profile_wrap'>                        
                    <Link className= {`${'admin123'===items? 'them_film':'no_film'}`} to='/upload'>
                        Thêm Film
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