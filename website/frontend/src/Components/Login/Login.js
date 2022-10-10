import './Login.css'
function Login() {
    return (
        <div className='login'>
            <div className='login_title'>
                <h1>Login</h1>
            </div>
            <div>
                <form>
                    <div className='login_wrap'>
                        <label className='login_name'>Tên đăng nhập</label>
                        <input
                        className='login_input'
                        type='text'
                        placeholder='username'
                        />
                    </div>
                    <div className='login_wrap'>
                        <label className='login_name'>Mật Khẩu</label>
                        <input
                        className='login_input'
                        type='text'
                        placeholder='password'
                        />
                    </div>
                    <div className='login_wrap'>
                        <button className='login_button' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;