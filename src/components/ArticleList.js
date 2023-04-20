import React from "react";
import Article from "./Article";


function ArticleList({posts}) {
    const postArt = posts.map(post => 
    {return<Article key={post.id} 
    title={posts.title}
    date={posts.date}
    preview={posts.preview}/>})
    return (
        <main>
            {postArt}
        </main>
    )
}


export default ArticleList;