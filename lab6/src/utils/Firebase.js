import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkRp2sLklt4_7cZbOqblyZxZTLAIWZE38",
  authDomain: "pizzeria-c7781.firebaseapp.com",
  projectId: "pizzeria-c7781",
  storageBucket: "pizzeria-c7781.appspot.com",
  messagingSenderId: "749987134502",
  appId: "1:749987134502:web:fb7844840c852942223ae7",
  measurementId: "G-G61Y61G2Z6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const firestore = firebase.firestore();

export const auth = firebase.auth();

export const addUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .set({
      ...userData,
    });
};

export const getUserData = async (user) => {
  return firestore.collection("users").doc(user.uid).get();
};

export const updateUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .update({
      ...userData,
    });
};

export const getPizzas = async () => {
  return firestore.collection("pizzas").get();
};

export const sendOrder = async (user, order, price) => {
  return firestore.collection("archivedOrders").add({
    user: user.uid,
    order: order,
    price: price,
  });
};

export const getOrderHistory = async (user) => {
  const docsRef = firestore.collection("archivedOrders");
  return docsRef.where("user", "==", user.uid).get();
};
