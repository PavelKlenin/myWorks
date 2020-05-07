import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsActions';

import Post from './Post';

class PostList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const posts = this.props.posts.map((post, index) => {
            return (
                <Post key={index} {...post}/>
            );
        });
        
        return (
            <div>
                <h1>Blogs</h1>
                {posts}
            </div>
        );    
    }

    componentDidMount () {
        this.props.dispatch(fetchPosts());
    }
}

const mapStateToProps = (state) => ({posts: state.posts.posts,})

export default connect(mapStateToProps)(PostList);