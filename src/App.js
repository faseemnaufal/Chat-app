import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '997ed881-d9f2-48fb-9d34-ceefbd631631';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={'fsm'}
      userSecret={'fsm123'}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;



/*import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () =>{
  return(
    <ChatEngine
        height="100vh"
        projectID='5077379f-ecc3-401f-bab6-27d218d89953'
        userName="fsm"
        userSecret="admin123"
    />
  );
} 

export default App;
*/