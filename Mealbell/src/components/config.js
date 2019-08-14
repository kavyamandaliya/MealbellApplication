import Firebase from 'firebase';

// Maybe check this out https://docs.expo.io/versions/latest/sdk/sqlite/

const config = {
  apiKey: 'AIzaXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
  databaseURL: 'rnfirebXXX-XXXX.firebaseapp.com',
  projectId: 'rnfirebase-XXXX',
  storageBucket: 'rnfirebase-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX',
};

export const addItem = (item) => {
  db.ref('/items').push({
    name: item,
  });
};

export const getItems = () => {
  return db.ref('/items');
};

const app = Firebase.initializeApp(config);
export const db = app.database();
