import React from 'react';
import Data from './data.json'


function Post() {



    return (
        Data.map((element) => {
            let mediaElement = <img width={300} src={element.mediaURL} alt=""></img>;

            if (element.type === 'video') {
                mediaElement = (
                    <video width='500px' height='300px' controls>
                        <source src={element.mediaURL} type="video.mp4"></source>
                    </video>
                );
            }


            return (
                <>
                    {mediaElement}
                    {/* <img src={element.mediaURL} style={{ height: "300px" }} alt=""></img> */}
                    <video></video>
                    <p>{element.caption}</p>
                </>


            );

        })

    )







}

export default Post

