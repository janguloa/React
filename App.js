import React, {useState} from 'react';
import Navigation from "./app/navigations/Navigation"

export default function App() {

  const [users, setUsers] = useState(usersData)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button></Button>
    </View>
  );
}