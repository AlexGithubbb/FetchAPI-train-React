import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state ={
        posts: [],
        selectedID: null,
        error: false
    }
    // componentDidMount is best for getting the API data
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/postswww')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post =>{
                return{
                    ...post,
                    author:'Alex',
                    country: 'China'
                }
            });
            this.setState({ posts: updatePosts})
        })
        .catch(err => {
            this.setState({ error: true },
                console.log(err)
        )}
        )
    }

    showFullPostHandler = (id) => {
        this.setState({selectedID: id})
    }
    render () {
        let posts = <h1>oopps, sth went wrong</h1>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title}
                    author={post.author} country={post.country}
                    clicked={() => this.showFullPostHandler(post.id)} />
            })
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;