import React from 'react';
import './index.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow';
import VideoRow from '../VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="//yt3.ggpht.com/a/AATXAJwB01eAxHGcgJQlK0f6KWCgoMpLrWV9GwV1yOTr=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Overwatch Pro Players Reloaded"
                verified
                subs="660K"
                noOfVides={382}
                description="Helping you get better! Learn from the pro's how to improve your gameplay. It's hard to always catch streams when they go live, ..."
            />
            <hr/>

            <VideoRow 
                views="1.4M"
                subs="654K"
                description="https://www.twitch.tv/iddqd Insane Ashe Gameplay By IDDQD -Educational- #iddqd #ashe #aim #"
                timestamp="59 seconds age"
                channel="Overwatch Pro Players Reloaded"
                title="Overwatch IDDQD Showing His Ashe Gameplay Skills"
                image="https://i.ytimg.com/vi/TX2hvhUa1g0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAV8nydGM1zZUW4K7Lx9bv-XKXxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="654K"
                description="https://www.twitch.tv/iddqd Insane Ashe Gameplay By IDDQD -Educational- #iddqd #ashe #aim #"
                timestamp="59 seconds age"
                channel="Overwatch Pro Players Reloaded"
                title="Overwatch IDDQD Showing His Ashe Gameplay Skills"
                image="https://i.ytimg.com/vi/TX2hvhUa1g0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAV8nydGM1zZUW4K7Lx9bv-XKXxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="654K"
                description="https://www.twitch.tv/iddqd Insane Ashe Gameplay By IDDQD -Educational- #iddqd #ashe #aim #"
                timestamp="59 seconds age"
                channel="Overwatch Pro Players Reloaded"
                title="Overwatch IDDQD Showing His Ashe Gameplay Skills"
                image="https://i.ytimg.com/vi/TX2hvhUa1g0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAV8nydGM1zZUW4K7Lx9bv-XKXxaw"
            />
            <VideoRow 
                views="1.4M"
                subs="654K"
                description="https://www.twitch.tv/iddqd Insane Ashe Gameplay By IDDQD -Educational- #iddqd #ashe #aim #"
                timestamp="59 seconds age"
                channel="Overwatch Pro Players Reloaded"
                title="Overwatch IDDQD Showing His Ashe Gameplay Skills"
                image="https://i.ytimg.com/vi/TX2hvhUa1g0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAV8nydGM1zZUW4K7Lx9bv-XKXxaw"
            />
        </div>
    )
}

export default SearchPage;
