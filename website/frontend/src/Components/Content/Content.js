import{data} from '../../data'
import { useState } from 'react'
import Video from '../Contentvideo'
import './Content.css'
function Content() {
    const [show,setShow] =useState(false)
    const [product,setProduct] = useState(data)
    //loc ten phim
    const filterFilm = (title)=>{
        setProduct(
            data.filter((item) => {
                return item.title === title
            })
        )
    }
    //mounted content video
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
                        <spam>Thông báo</spam>
                        <spam>Trợ giúp</spam>
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
                {show && <Video />}
                <div className='product_wrap'>
                    {product.map((item,index) =>(
                        <div className='product_film'>
                            <img 
                            key={index}
                            onClick={()=>mountVideo()} 
                            className='product_img' 
                            src={item.img} 
                            alt={item.title}
                            />
                            <div className='product_item'>
                                <spam>{item.video}</spam>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Content;