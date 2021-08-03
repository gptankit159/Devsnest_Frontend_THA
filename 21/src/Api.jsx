import { useEffect , useState } from 'react';
import './App.css';

// const post = ()=>{
//     return(
//         <div className="post">

//         </div>
//     )
// }


const Api = () =>{
    const [posts , setPosts] = useState([]);
    const fetchItems = async() =>{
        const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        console.log(posts);
        setPosts(posts)
    }
    // useEffect(()=>{
    //     setPosts(posts);
    // },[posts]);

    return(
        <div className="api">
            
            
            <div className="main">
            {
                posts.map((item,index) => (
                    <div className="cont">
                        <h2 key ={index}> <p> {item.title}</p> </h2>
                        <p>{item.body}</p>
                    </div>
                ))
            }</div>
            <div className="btn">
            <button onClick={fetchItems}>Click Here to Load the posts</button>
            </div>
        </div>
    )
}

export default Api;
