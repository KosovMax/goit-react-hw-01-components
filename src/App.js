import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './json/user.json';
import friends from './json/friends.json';
import statisticalData from './json/statistical-data.json';
import transactions from './json/transactions.json';

import './base.css'


export default function App(){
    return(
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <FriendList friends={friends} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <TransactionHistory items={transactions} />
        </div>
    );
}