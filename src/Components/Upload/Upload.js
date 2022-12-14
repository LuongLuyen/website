import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Upload.css'
function Upload() {
    const urlupload='https://server-97i3.onrender.com/api/posts/upload'
    const urladd='https://server-97i3.onrender.com/api/posts/add'
    const [upload,setUpload]=useState()
    const [name,setName]=useState('')
    const [title,setTitle]=useState('')
    const [fileName,setFileName]=useState('')

    useEffect(()=>{
        //xóa img video (file) củ khỏi bộ nhớ khi set img video mới 
        return ()=>{
            //lần đầu img và video là undefined
            upload && URL.revokeObjectURL(upload.preview)
        }
    },[upload])
    // xem trước (img video)
    const handleUpload= (e)=>{
        const file = e.target.files[0]
        console.log(file)
        // lấy filename
        setFileName(file.name)
        file.preview=URL.createObjectURL(file)
        setUpload(file)
    }
    const handleSubmit =()=>{
        axios.post(urladd, {name,title,fileName})
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
        console.log({name,title,fileName})
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

                <div className='upload'>
                    <label className='upload_title'>Thể loại phim</label>
                        <select  
                        onChange={e=> setTitle(e.target.value)} 
                        className='upload_item' 
                        htmlFor="lang-select">
                            <option value="">--Chọn thể loại phim--</option>
                            <option value="Hành động">----Hành động----</option>
                            <option value="Phiêu lưu">----Phiêu lưu----</option>
                            <option value="Hoạt hình">----Hoạt hình----</option>
                            <option value="Kung fu">----Kungfu----</option>
                            <option value="Kinh dị">----Kinh dị----</option>
                        </select>
                </div>
            </form>
            <form action={urlupload} method='POST' encType="multipart/form-data">
                    <div className='upload' >
                        <label className='upload_title' >Thêm Video</label>
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