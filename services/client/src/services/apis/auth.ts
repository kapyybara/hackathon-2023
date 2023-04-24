import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore'
import { app, store } from '.'

export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
	if (!auth.currentUser)
		try {
			const res = await signInWithPopup(auth, googleProvider)
			const user = res.user
			const q = query(collection(store, 'users'), where('uid', '==', user.uid))
			const docs = await getDocs(q)
			if (docs.docs.length === 0) {
				await addDoc(collection(store, 'users'), {
					uid: user.uid,
					name: user.displayName,
					authProvider: 'google',
					email: user.email,
				})
			}
			auth.onAuthStateChanged(user => {
				if (user) {
				}
			})
		} catch (err: any) {
			console.error(err)
			alert(err.message)
		}
}

export const signOutGoggle = async () => {
	console.log(auth)
	auth.signOut()
}
