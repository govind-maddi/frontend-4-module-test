import React,{ useEffect, useState } from 'react'

export default function FetchPost() {

    const [posts,setPosts] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(data => setPosts(data));


    })

    function printData(office) {
        const postimgurl=`https://picsum.photos/200?random=${office.id}`;
        return <li>{office.userId}<br/>{office.body}<br/>{office.title}<br/><img src={postimgurl} alt="" srcset="" /></li>
    }

  return (
    <div>
        <ul>
        {posts.map((office) => {
            return printData(office);
        })}
        </ul>
    </div>
  )
}
