import React from 'react';
import Data from './data.json';
import Post from './post';

function Main() {

    return(
        <Post/>
    )
    // let postHTML = Data.map(function(){
    //     return <Post/>
    // })
    // return (<>
    //     {postHTML}
    // </>
    // )
}

export default Main