// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyBKidczQfetHMpo4HNi5bJ27seiytmO3iw",
	authDomain: "notificaciones-385a6.firebaseapp.com",
	projectId: "notificaciones-385a6",
	storageBucket: "notificaciones-385a6.firebasestorage.app",
	messagingSenderId: "62596368224",
	appId: "1:62596368224:web:f710f27f7a3e65ec200005"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/logo192.png",
	};

	// eslint-disable-next-line no-restricted-globals
	return self.registration.showNotification(
		notificationTitle,
		notificationOptions
	);
});
