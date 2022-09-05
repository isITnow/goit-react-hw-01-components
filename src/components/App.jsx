import Profile from './profile/profile';
import Statistics from './statistics/statistics'
import FriendList from './friendList/friendList';
import user from '../data_json/user.json';
import statistics from '../data_json/data.json'
import friends from '../data_json/friends.json'

console.log(friends);



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      {/* <Statistics stats={statistics} /> */}
      <FriendList friends={friends} />
    </div>
  );
};
