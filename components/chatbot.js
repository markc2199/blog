'use client'
import Script from "next/script"

export default function Chatbot() {
    return(
        <div>
            <Script src="/chatbot.js"
            strategy="lazyOnload"
            onLoad={() => initializeChatbot()}/>
        </div>
    )
}