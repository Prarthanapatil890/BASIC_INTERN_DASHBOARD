
import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userRef = doc(db, "users", "2qImPyhs3Vk1MAtPosKb"); // 👈 Replace with actual ID
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Intern Info</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Referral Code:</strong> {user.referralCode}</p>
          <p><strong>Amount Raised:</strong> ₹{user.amountRaised}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
