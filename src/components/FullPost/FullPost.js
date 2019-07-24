import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPost:null
    }
    componentDidUpdate(){
        if(this.props.id){ // check if it is valid id
            if( !this.state.loadedPost || (this.state.loadedPost.id && this.props.id !== this.state.loadedPost.id)){
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then(response => {
                    this.setState({ loadedPost: response.data })
                })
            }
        }
        }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(req => console.log(req))
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if(this.props.id){
        post = <p style={{ textAlign: "center" }}>Loading!</p>;
        }
        if(this.state.loadedPost){
            const { title, body } = this.state.loadedPost;
            post = (
                <div className="FullPost">
                    {/* <h1>{this.state.loadedPost.title}</h1> */}
                    <h1>{title}</h1>
                    <p>{body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;