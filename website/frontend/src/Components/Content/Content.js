import{data} from '../../data'
import { useState } from 'react'
import Video from '../Contentvideo'
import './Content.css'
function Content() {
    const [show,setShow] =useState(false)
    const [product,setProduct] = useState(data)
    const [video,setVideo] = useState(data)
    console.log(product)
    //filter film
    const filterFilm = (title)=>{
        setProduct(
            data.filter((item) => {
                return item.title === title
            })
        )
    }
    // play content video
    const filterVideo = (id)=>{
        console.log(id)
        setVideo(
            data.filter((item) => {
                return item.id === id
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
                        <h1>Phim Bờ Rồ</h1>
                    </div>
                    <div className='header_user'>
                        <span>Thông báo</span>
                        <span>Trợ giúp</span>
                        <img src="Avt" alt='/'/>
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
                {show && <Video value = {video}/>}
                <div className='product_wrap'>
                    {product.map((item) =>(
                        <div 
                        key={item.id}
                        onClick={()=>filterVideo(item.id)}
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