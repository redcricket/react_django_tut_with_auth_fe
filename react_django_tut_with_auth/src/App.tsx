import React, {useState} from 'react';
import './App.css';
import {fetchUser, User, UserCtx} from "./User";
import {useAsync} from "./ss-react-utils";

// const PageSelector = ({page}: { page: string }) => {
const AppLoaded = ({user}: {user: User}) => {
  return <div className="App">
    {user.userName}
  </div>;
};

const AppLoading = () => {
  return <div>Loading ...</div>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useAsync({
    op: fetchUser,
    onSuccess: setUser,
    deps: []
  });

  if (user !== null) {
    return <AppLoaded user={user} />;
  } else {
    return <AppLoading/>;
  }
}

export default App;
