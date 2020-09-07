import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title=""
                    views=""
                    timestamp=""
                    channelImage=""
                    channel=""
                    image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fwhite-transparent-leaf-on-mirror-260nw-577160911.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fimage&tbnid=saXt3gObqm30jM&vet=12ahUKEwiJrL_CldTrAhXVGbcAHe8ICQ8QMygBegUIARDNAQ..i&docid=QooZsUX3wOLfLM&w=382&h=280&q=image&ved=2ahUKEwiJrL_CldTrAhXVGbcAHe8ICQ8QMygBegUIARDNAQ" />
            </div>
        </div>
    )
}

export default RecommendedVideos;
