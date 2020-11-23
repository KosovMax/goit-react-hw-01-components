import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList(){
    return (
        <ul class="friend-list">
        {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
        <FriendListItem />
        </ul>
    )
}

FriendList.defaultProps = {

};

FriendList.propTypes = {

}