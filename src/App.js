import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';


export default function App(){
    return(
        <div>
            <Profile />
            <Statistics />
            <FriendList />
            <TransactionHistory />
        </div>
    );
}