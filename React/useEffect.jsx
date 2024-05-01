//useEffect(setup, dependencies?)

import { useEffect } from 'react';//Call useEffect at the top level of your component to declare an Effect:
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
};

export default ChatRoom;

//To see this example I will use the file InfexUE1 to demostrate some examples\

