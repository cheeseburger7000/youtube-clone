import React, { useEffect, useState } from 'react';
import './index.css';
import VideoCard from '../VideoCard';

function RecommendedVideos() {
    useEffect(() => {
        // HTTP Request
        // fetch('/api/getRecommendedVideos')
        //     .then();
        const recommendedVideos = [
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/95eRBzTxm3M/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATGgDrQysgGikpwxZwqsJ2fp3VRw',
            },
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/-KwgEEvIP_M/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAmEpNo0Vk-deTwd8fQqEsqeMJ0xA',
            },
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/95eRBzTxm3M/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATGgDrQysgGikpwxZwqsJ2fp3VRw',
            },
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/95eRBzTxm3M/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATGgDrQysgGikpwxZwqsJ2fp3VRw',
            },
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/95eRBzTxm3M/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATGgDrQysgGikpwxZwqsJ2fp3VRw',
            },
            { 
                title: 'Doomfist Community Montage',
                views: '2.3M Views',
                timestamp: '3 days age',
                channelImage: 'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
                channel: 'Luca Young',
                image: 'https://i.ytimg.com/vi/95eRBzTxm3M/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATGgDrQysgGikpwxZwqsJ2fp3VRw',
            },
        ];
        setRecommendedVideos(recommendedVideos);
    }, []);

    const [recommendedVideos, setRecommendedVideos] = useState([]);

    const renderRecommendedVideosTable = () => {
        return recommendedVideos.map(({ title, views, timestamp, channelImage, channel, image }) => (
            <VideoCard 
                title={title}
                views={views}
                timestamp={timestamp}
                channelImage={channelImage}
                channel={channel}
                image={image}
            />
        ));
    }

    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {renderRecommendedVideosTable()}
            </div>
        </div>
    )
}

export default RecommendedVideos;
