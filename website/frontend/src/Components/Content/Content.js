import Avt from '../../data/img/1.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Video from '../Contentvideo'
import './Content.css'
function Content(props) {
    const data =props.props
    console.log(data)
    
    const [show,setShow] =useState(false)
    const [product,setProduct] = useState(data)
    const [video,setVideo] = useState(data)

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
        <div className='app'>
            <div className='header'>
                <div className='header_home'>
                    <div className='header_title'>
                        <h1>Phim BờRồ</h1>
                    </div>
                    <div className='header_user'>
                        <span>Thông báo</span>
                        <span>Trợ giúp</span>
                        <Link to='/content/login'>
                            <img className='header_avt' src={Avt} alt='/'/>
                        </Link>
                    </div>
                </div>
                <div className='header_search'>
                    <input
                    className='header_search-input'
                    type = 'text'
                    placeholder='Tìm kiếm'
                    />
                </div>
                <div className='header_category'>
                    <div className='header_list'>
                        <button onClick={()=>filterFilm('hanhdong')} className='header_list-item'>Hành động</button>
                        <button onClick={()=>filterFilm('phieuluu')} className='header_list-item'>Phiêu lưu</button>
                        <button onClick={()=>filterFilm('hoathinh')} className='header_list-item'>Hoạt hình</button>
                        <button onClick={()=>filterFilm('kungfu')} className='header_list-item'>Kungfu</button>
                        <button onClick={()=>filterFilm('kinhdi')} className='header_list-item'>Kinh dị</button>
                    </div>
                </div>
            </div>
            <div className='product'>
                {show && <Video value={video}/>}
                <div className='product_wrap'>
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
                                <span >
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Content;