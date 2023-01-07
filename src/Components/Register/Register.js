// chung css vs trang login
import { Link } from 'react-router-dom'

import '../Login/Login.css'
function Register() {
    const url='https://server-97i3.onrender.com/api/posts/register'
    return ( 
        <div className='login'>
            <div className='header_home'>
                <Link className='header_title' to='/content'>
                    <h1>Phim BờRồ</h1>
                </Link>
            </div>
            <div className='login_title'>
                <h1>Đăng ký</h1>
            </div>
            <div>
                <form method='POST' action={url}>
                    <div className='login_wrap'>
                        <label className='login_name'>Tên đăng ký</label>
                        <input
                        className='login_input'
                        name='username'
                        type='text'
                        placeholder='Username'
                        />
                    </div>
                    <div className='login_wrap'>
                        <label className='login_name'>Mật Khẩu</label>
                        <input
                        className='login_input'
                        name='password'
                        type='text'
                        placeholder='Password'
                        />
                    </div>
                    <div className='login_submit'>
                        <button className='login_button' type='submit'>Submit</button>
                        <Link  to='/login'>
                            <button className='login_button'>Đăng nhập</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Register;