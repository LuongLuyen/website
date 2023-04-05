import React, { useState, useEffect, useRef } from "react"
import socketIOClient from "socket.io-client"
import axios from 'axios'
import './Chat.css'
const host = process.env.REACT_APP_URL_SERVER


function Chat() {
  const [mess, setMess] = useState([])
  const [message, setMessage] = useState('')
  const socketRef = useRef()
  const messagesEnd = useRef()
  
  const [items, setItems] = useState([])
  
  //get api
  useEffect(() => {
      axios.get(process.env.REACT_APP_URL_MSG)
      .then((response) => {
          setMess(response.data)
      })
  }, []) 
    
    // get data localstorage
    useEffect(() => {
      const items = JSON.parse(sessionStorage.getItem('items'))
      if (items) {
       setItems(items)
      }
    }, [])

    useEffect(() => {
      socketRef.current = socketIOClient.connect(host)
      socketRef.current.on('sendDataServer', dataGot => {
        setMess(oldMsgs => [...oldMsgs, dataGot.data])
        scrollToBottom()
      })
      return () => {
        socketRef.current.disconnect()
      }
    }, [])

    const sendMessage = () => {
      if(message !== null) {
        const msg = {
          sender:items,
          content: message
        }
        socketRef.current.emit('sendDataClient', msg)
        setMessage('')
      }
    }

    const scrollToBottom = () => {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" })
    }
    
    const renderMess =  mess.map((m, index) => 
        <div key={index} className={`${m.sender===items? 'your-message' : 'other-people'} chat-item`}>
          [{m.sender}]:
          <br/>
          {m.content}
        </div>
      )

    const handleChange = (e) => {
      setMessage(e.target.value)
    }

    const onEnterPress = (e) => {
      if(e.keyCode === 13 && e.shiftKey === false) {
        sendMessage()
      }
    }

    return (
      <div className="chat box-chat">
        <div className="box-chat_message">
          {renderMess}
        <div style={{ float:"left", clear: "both" }}
            ref={messagesEnd}>
        </div>
        </div>

        <div className="send-box">
            <textarea 
              value={message}  
              onKeyDown={onEnterPress}
              onChange={handleChange} 
              placeholder="Nhập tin nhắn ..." 
            />
            <button className="chat_send" onClick={sendMessage}>
              Send
            </button>
        </div>
      </div>
    )
  }

export default Chat;