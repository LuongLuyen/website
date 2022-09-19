import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Upload.css'
function Upload() {
    const url='http://localhost:5000/api/posts/add'
    const [img,setImg]=useState()
    const [video,setVideo]=useState()
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const handleSubmit =()=>{
        axios.post(url, {title,content})
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
        console.log({title,content})
    }

    useEffect(()=>{
        //xóa img video củ khỏi bộ nhớ khi set img video mới
        return ()=>{
            //lần đầu img và video là undefined
            img && URL.revokeObjectURL(img.preview)
            video && URL.revokeObjectURL(video.preview)
        }
    },[img, video])
    const handleImg= (e)=>{
        const file = e.target.files[0]
        console.log(file)
        file.preview=URL.createObjectURL(file)
        setImg(file)
    }
    const handleVideo= (e)=>{
        const file = e.target.files[0]
        file.preview=URL.createObjectURL(file)
        setVideo(file)
    }         
    return ( 
        <div className='upload_wrap'>
            <form onSubmit={e=>{
                e.preventDefault()
            }}>
                <div className='title'>
                    <h1>Thêm phim</h1>
                </div>
                <div className='upload' >
                    <label className='upload_title'>Tên Film</label>
                    <input 
                    className='upload_item'  
                    placeholder="Nhập tên phim"
                    type="text"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                </div>
                <div className='upload' >
                    <label className='upload_title'>Content</label>
                    <input 
                    className='upload_item'  
                    placeholder="Nhập tên phim"
                    type="text"
                    value={content}
                    onChange={e=> setContent(e.target.value)}
                    />
                </div>
                <div className='upload' >
                    <label className='upload_title' >Ảnh</label>
                    <input className='upload_item-file' onChange={handleImg} type="file"/>
                    <div>
                        {img && (<img src={img.preview} alt='/'/>)}
                    </div>
                </div>
                <div className='upload' >
                    <label className='upload_title'>Video</label>
                    <input className='upload_item-file' onChange={handleVideo} type="file" />
                    <div>
                        {video && (<video className='upload_video' src={video.preview} alt='/'/>)}
                    </div>
                </div>
                <div className='upload'>
                    <label className='upload_title'>Ghi chú</label>
                    <textarea className='upload_item'></textarea>
                </div>
                <div>
                    <button onClick={handleSubmit} className='button'>Thêm phim</button>
                </div>
            </form>
        </div>
     );
}

export default Upload;