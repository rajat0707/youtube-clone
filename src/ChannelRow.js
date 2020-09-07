import React from 'react'
import { Avatar } from "@material-ui/core"
import "./ChannelRow.css"
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"
function ChannelRow(
    { image,
        channel,
        subs,
        noOfVideos,
        description,
        verified }
) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>

                <p>{subs} subscriber . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
