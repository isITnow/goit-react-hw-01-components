import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'
import Container from './Container';

import user from '../data_json/user.json';
import statistics from '../data_json/data.json';
import friends from '../data_json/friends.json'
import transactions from "../data_json/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

      <Container>
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      </Container>
      
      <Container>
        <Statistics title="Upload stats" stats={statistics} />
      </Container>

      <Container>
      <Statistics stats={statistics} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
};
