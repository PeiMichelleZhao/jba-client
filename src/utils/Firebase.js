import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAmR2WMDgjSC2QY9P-p2-IUnnIFnDnx63w',
  authDomain: 'vod-client.firebaseapp.com',
  databaseURL: 'https://vod-client.firebaseio.com',
  projectId: 'vod-client',
  storageBucket: 'vod-client.appspot.com',
  messagingSenderId: '765881715622'
}

firebase.initializeApp(config)
