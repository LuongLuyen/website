import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const url = process.env.REACT_APP_URL_LOGIN
    return (
        <div className='login'>
            <div className='header_home'>
                <Link className='header_title' to='/content'>
                    <h1>Phim BờRồ</h1>
                </Link>
            </div>
            <div className='login_title'>
                <h1>Đăng nhập</h1>
            </div>
            <div>
                <form method='POST' action={url}>
                    <div className='login_wrap'>
                        <label className='login_name'>Tên đăng nhập</label>
                        <input
                        className='login_input'
                        name='username'
                        type='text'
                        placeholder='Username:   admin123'
                        />
                    </div>
                    <div className='login_wrap'>
                        <label className='login_name'>Mật Khẩu</label>
                        <input
                        className='login_input'
                        name='password'
                        type='password'
                        placeholder='Password:   admin123'
                        />
                    </div>
                    <div className='login_submit'>
                        <button className='login_button' type='submit'>Đăng nhập</button>
                    </div>
                    <div className='login__1'>
                        <span>Ghi nhớ tôi</span>
                        <span>Bạn cần trợ giúp ?</span>
                    </div>
                    <div className='login__2'>
                        <span>Bạn mới tham gia Film Bờ Rồ</span>
                        <Link  to='/register'>
                            <button>Đăng ký</button>
                        </Link>
                    </div>
                    <div className='login__2'>
                        Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. Tìm hiểu thêm.
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;