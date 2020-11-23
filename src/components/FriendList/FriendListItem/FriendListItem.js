import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem(){
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src="" alt="" width="48" />
            <p class="name">Name</p>
        </li>
    )
}

FriendListItem.defaultProps = {

};

FriendListItem.propTypes = {

}