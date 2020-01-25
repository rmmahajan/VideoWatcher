import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar , VideoDetail , VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null,
    }

componentDidMount(){
    this.handleSubmit('pdf generation');
}

    onVideoSelect = (videos)=>
    {
        this.setState({ selectedVideo: videos });
    }

    handleSubmit = async (searchTerm)=>{

        const response = await youtube.get('search', {
        
        params: {

            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDMO44WpWJdoH8YxOo-NkfPU90IbuijLhE',
            q: searchTerm,
        }

    });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

        //console.log(response.data.items);

    }

    render(){
        const { selectedVideo , videos } = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = { this.handleSubmit } />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail videos={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>
        )
    }
}

export default App;


// import React, { useState } from "react";
// import { Grid, OutlinedInput } from "@material-ui/core";

// import { SearchBar, VideoList, VideoDetail } from "./components";

// import youtube from "./api/youtube";

// export default () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);


//   return (
//     <Grid style={{ justifyContent: "center" }} container spacing={10}>
//       <Grid item xs={11}>
//         <Grid container spacing={10}>
//           <Grid item xs={12}>
//             <SearchBar onSubmit={handleSubmit} />
//           </Grid>
//           <Grid item xs={8}>
//             <VideoDetail video={selectedVideo} />
//           </Grid>
//           <Grid item xs={4}>
//             <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );

//   async function handleSubmit(searchTerm) {
      
//     const { data: { items: videos } } = await youtube.get("search", {
//         params: {

//                         part: 'snippet',
//                         maxResults: 5,
//                         key: 'AIzaSyDMO44WpWJdoH8YxOo-NkfPU90IbuijLhE',
//                         q: searchTerm,
//                     }
//     });

//     setVideos(videos);
//     setSelectedVideo(videos[0]);
    
//   }

  
// }