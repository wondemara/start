const express = require('express');
const router = express.Router();
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const app = require('../config');

const db = getFirestore(app);

router.get('/', async (req, res) => {
    const data = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'publication'));
        querySnapshot.forEach((doc) => data.push(doc.data()));
    } catch (e) {
        console.log('Error:', e);
    }
    res.send(data);
});

module.exports = router;