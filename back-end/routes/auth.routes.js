const express =require("express")
const router =express.Router()
const authication =require("firebase/auth")
const app =require('../config')
const firestore =require('firebase/firestore');

const auth = authication.getAuth(app);
const db = firestore.getFirestore(app);

router.post('/',async(req,res,next)=>{   
 const data = req.body
await authication.createUserWithEmailAndPassword(auth,data.email, data.password)
  .then((userCredential) => {
  try {
    const frankDocRef = firestore.doc(db, "users", userCredential.user.uid);
    firestore.setDoc(frankDocRef,{uid:userCredential.user.uid,...data});
    } catch (e) {
      res.status(501).send('Erreur lors de la création du firestore de l\'utilisateur.'+error);
    }
    
  })
  .catch ((error)=> {
    
    // Récupérer le code d'erreur Firebase
    const errorCode = error.code; 
    // Gérer différentes erreurs Firebase
    switch (errorCode) {
      case 'auth/email-already-in-use':
        res.status(409).send('Cet e-mail est déjà utilisé.'+errorCode);
        break;
      case 'auth/weak-password':
        res.status(400).send('Le mot de passe est trop faible.'+errorCode);
        break;
      default:
        res.status(500).send('Erreur lors de la création de l\'utilisateur.'+errorCode);
    }
})
next()
   }
)
//

router.get("/",(req,res)=>{
   const data = []
  authication.onAuthStateChanged(auth,(user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      
      const querySnapshot = firestore.getDocs(firestore.collection(db, "users"));
      querySnapshot.docs.forEach()  
      
      const docRef = firestore.doc(db, "users", "8E7M3TZzLiTsgrtEfHQujPsoO8g1");
      const docSnap =  firestore.getDoc(docRef);
      data = data.push(docSnap.data())
    } else {
      
    }
    res.send(data)
  });
})

module.exports=router;

