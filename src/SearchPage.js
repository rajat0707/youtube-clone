import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                channel="rajat"
                verified
                subs="670k"
                noOfVideos={230}
                description="imageimageimageimageimageimageimageimageimageimageimageimageimageimage"
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
            <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            /> <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            /> <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            /> <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            /> <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            /> <VideoRow
                views="1.4M"
                subs="700K"
                title="Lets Crack it"
                timestamp="2hour ago"
                channel="Technical Rajjo"
                description="Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase servicconst firebaseConfig"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
        </div>
    )
}

export default SearchPage
