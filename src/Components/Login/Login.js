import './Login.css'
function Login() {
    const url ='https://luongluyen-film-server.herokuapp.com/api/posts/add'
    return (
        <div className='login'>
            <div className='login_title'>
                <h1>Login</h1>
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
                        type='text'
                        placeholder='Password:   admin123'
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