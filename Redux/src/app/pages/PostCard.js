import React from 'react';

import {connect} from 'react-redux';
import {fetchPostCard} from '../actions/postCardActions';

import Comment from '../components/Comment';
import Post from '../components/Post';

import style from '../style/PostCard.css';

class PostCard extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const comments = this.props.comments.map((comment, index) => {
            return (
                <Comment key={index} {...comment}/>
            );
        })
        return(
            <div>
                <Post {...this.props.post} author ={this.props.author}/>
                <hr/>
                <h3>Comments</h3>
                <hr/>
                {comments}
            </div>
        );
    }

    componentDidMount () {
        const postID = this.props.params.postID;
        this.props.dispatch(fetchPostCard(postID));
    }
}

const mapStatetoProps = (state) => ({
    post: state.postCard.post,
    comments: state.postCard.comments,
    author: state.postCard.author,
})

export default connect(mapStatetoProps)(PostCard);