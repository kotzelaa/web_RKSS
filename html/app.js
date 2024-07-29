import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import{ getFirestore , collection , getDocs } from"https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBzBABPMcjhZ7KFKpnhk3B6zmPFt9j-lFM",
    authDomain: "rkss-admin-webapp.firebaseapp.com",
    projectId: "rkss-admin-webapp",
    storageBucket: "rkss-admin-webapp.appspot.com",
    messagingSenderId: "133651595077",
    appId: "1:133651595077:web:f76779d4dbfdd5015dc82c",
    measurementId: "G-7KW27MZXYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const table = document.getElementById("table_order")

//product
//order
async function getOrder(db){
    const orCol = collection(db,'order')
    const orSnapshot = await getDocs(orCol)
    return orSnapshot
}

function showData(order){
    const row = table.insertRow(-1)
    const idCol = row.insertCell(0)
    const dateCol = row.insertCell(1)
    const statusCol = row.insertCell(2)
    const cusNameCol = row.insertCell(3)
    const proNameCol = row.insertCell(4)
    const sumCol = row.insertCell(4)
    const pCol = row.insertCell(4)



    idCol.innerHTML = order.data().or_id
    // dateCol.innerHTML = order.data().or_date
    statusCol.innerHTML = order.data().or_status
    cusNameCol.innerHTML = order.data().or_cusName
    proNameCol.innerHTML = order.data().or_productName
    sumCol.innerHTML = order.data().or_sum
    pCol.innerHTML = order.data().or_tprice







}

// pull document
const data = await getOrder(db)
data.forEach(order=>{
    showData(order)
})

// authentication

