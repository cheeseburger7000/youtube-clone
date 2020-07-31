import React from 'react';
import './index.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow'

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
        </div>
    )
}

export default SearchPage;
