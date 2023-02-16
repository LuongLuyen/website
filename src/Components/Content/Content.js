import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Video from './Contentvideo'
import Chat from './Chat'
import './Content.css'
function Content(props) {
    const data =props.props
    console.log(data)

    const [show,setShow] =useState(false)
    const [showChat,setShowChat] =useState(false)
    const [product,setProduct] = useState(data)
    const [video,setVideo] = useState(data)
    const [inputText, setInputText] = useState("")

    //thanh search
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
        console.log(lowerCase)
    }
    const filterData = data.filter((prevData) => {   
        if (inputText === '') {
            return prevData
        }
        else {
            return prevData.title.toLowerCase().includes(inputText)
        }
    })
    console.log(filterData)
    const handleSearch = ()=>{
        setProduct(filterData)
    }
    const handleEnter= function(e){
        if(e.keyCode===13){
            handleSearch()
        }
    }

    //scrollTop
    const refTop = useRef(null)
    const handleClick = ()=>{
        refTop.current?.scrollIntoView({behavior: 'smooth'})
    }

    //filter film
    const filterFilm = (title)=>{
        setProduct(
            data.filter((item) => {
                return item.title === title
            })
        )
    }

    // play content video
    const filterVideo = (_id)=>{
        console.log(_id)
        setVideo(
            data.filter((item) => {
                return item._id === _id
            })
        )
    }

    //mount content video
    const mountVideo=()=>{
        setShow(()=>{
            return true
        })
    }
    return ( 
        <div ref={refTop} className='app'>
            <div 
            onClick={()=>setShowChat(false)}
            className='header'>
                <div className='header_home'>
                    <div className='header_title'>
                        <h1>Phim BờRồ</h1>
                    </div>
                    <div className='header_user'>
                        <span>Thông báo</span>
                        <span>Trợ giúp</span>
                        <Link className='dangnhap' to='/login'>
                            Đăng nhập
                        </Link>
                        <div className='user'>
                            <ul>
                                <li className='user_item'>Tên</li>
                                <li className='user_item'>Cài đặt</li>
                                <li className='user_item'>Trợ giúp</li>
                                <li className='user_item'>Đăng xuất</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='header_search'>
                    <input
                    className='header_search-input'
                    type = 'text'
                    placeholder='Tìm kiếm'
                    onChange={inputHandler} 
                    onKeyDown={handleEnter}
                    />
                </div>
                <div className='header_category'>
                    <div className='header_list'>
                        <button onClick={()=>filterFilm('Hành động')} className='header_list-item'>Hành động</button>
                        <button onClick={()=>filterFilm('Phiêu lưu')} className='header_list-item'>Phiêu lưu</button>
                        <button onClick={()=>filterFilm('Hoạt hình')} className='header_list-item'>Hoạt hình</button>
                        <button onClick={()=>filterFilm('Kung fu')} className='header_list-item'>Kungfu</button>
                        <button onClick={()=>filterFilm('Kinh dị')} className='header_list-item'>Kinh dị</button>
                    </div>
                </div>
            </div>
            <div 
            onClick={()=>setShowChat(false)}
            className='product'>
                {show && <Video value={video}/>}
                <div onClick={handleClick} className='product_wrap'>
                    {product.map((item,index) =>(
                        <div 
                        key={index}
                        onClick={()=>filterVideo(item._id)}
                        className='product_film'>
                            <img 
                            onClick={()=>mountVideo()} 
                            className='product_img' 
                            src={item.img} 
                            alt={item.title}
                            />
                            <div className='product_item'>
                                <span>
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {showChat && <Chat value ={showChat}/>}
            </div>
            <div  className='messenger'>
            <div
            onClick={()=>setShowChat(!showChat)}>
                Messenger
            </div>
            </div>
        </div>
    )
}


export default Content;