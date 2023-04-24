import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCk2I8IxcVtXDX5mogHZf1aLLY9z5ogiqU',
	authDomain: 'hackathon2023-2693a.firebaseapp.com',
	projectId: 'hackathon2023-2693a',
	storageBucket: 'hackathon2023-2693a.appspot.com',
	messagingSenderId: '409071758292',
	appId: '1:409071758292:web:10610fb3f4e0ced9fdc441',
}

export const app = initializeApp(firebaseConfig)
export const store = getFirestore(app)
