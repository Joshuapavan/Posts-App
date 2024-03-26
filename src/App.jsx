import Post from './components/Post/Post'
import CreatePost from './components/CreatePost/CreatePost'

import { useState } from 'react'

function App() {

	const [posts, setPosts] = useState([]);

	const addPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	const deletePost = (index) => {
		const updatedPosts = [...posts];
		updatedPosts.splice(index, 1);
		setPosts(updatedPosts);
	};



	return (
	<>
		<CreatePost addPost={addPost}/>
		{
			posts.map((post, index)=> (
				<Post key={index} post={post} deletePost={deletePost} />
			) )
		}
	</>
	)
}

export default App
