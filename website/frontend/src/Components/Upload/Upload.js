import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Upload.css'
function Upload() {
    const urlupload='http://localhost:5000/api/posts/upload'
    const urladd='http://localhost:5000/api/posts/add'
    const [upload,setUpload]=useState()
    const [name,setName]=useState('')
    const [title,setTitle]=useState('')
    const [video,setVideo]=useState('')
    useEffect(()=>{
        //xóa img video củ khỏi bộ nhớ khi set img video mới
        return ()=>{
            //lần đầu img và video là undefined
            upload && URL.revokeObjectURL(upload.preview)
        }
    },[upload])
    const handleUpload= (e)=>{
        const file = e.target.files[0]
        console.log(file)
        file.preview=URL.createObjectURL(file)
        setUpload(file)
    }
    const handleSubmit =()=>{
        axios.post(urladd, {name,title,video})
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
        console.log({name,title,video})
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
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                </div>
             
                <div className='upload' >
                    <label className='upload_title'>Tên Film</label>
                    <input 
                    className='upload_item'  
                    placeholder="hanhdong,phieuluu,hoathinh,kungfu,kinhdi"
                    type="text"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                </div>
                <div className='upload' >
                    <label className='upload_title'>Tên file</label>
                    <input 
                    className='upload_item'  
                    type="text"
                    value={video}
                    onChange={e=> setVideo(e.target.value)}
                    />
                </div>
            </form>
            <form action={urlupload} method='POST' encType="multipart/form-data">
                    <div className='upload' >
                        <label className='upload_title' >Ảnh</label>
                        <input className='upload_item-file'name='file' onChange={handleUpload} type="file"/>
                        <div>
                            {upload && (<img className='upload_img' src={upload.preview} alt=''/>)}
                            {upload && (<video className='upload_video' src={upload.preview} />)}
                        </div>
                    </div>
                <div>
                    <button  onClick={handleSubmit} type='submit' className='button'>Thêm phim</button>
                </div>
            </form>
        </div>
    )
}

export default Upload;