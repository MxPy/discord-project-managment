"use client"

import React from 'react'
import { sendMessage } from '../lib/actions/comment'

    

export default function ui() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <form onSubmit={sendMessage}>
        <input type="text" placeholder="Type here" id="messageText" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary">Send</button>
        </form>
        
      </div>
    </div>
  )
}
