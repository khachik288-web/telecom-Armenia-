import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function Users() {
  const [users, setUsers] = useState([]);
  const currentUid = auth.currentUser?.uid;

  useEffect(() => {
    const usersRef = ref(db, "users");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([uid, info]) => ({ uid, ...info }))
        .filter((u) => u.uid !== currentUid);
      setUsers(list);
    });

    return () => unsubscribe();
  }, [currentUid]);

  return (
    <div className="max-w-2xl mx-auto mt-20 px-6">
      <h1 className="text-2xl font-bold text-[#00293c] mb-6">Օգտատերեր</h1>

      <div className="flex flex-col gap-2">
        {users.length === 0 && (
          <p className="text-slate-400 text-sm">Դեռ ոչ մի օգտատեր չկա</p>
        )}

        {users.map((user) => (
          <Link
            key={user.uid}
            to={`/chat/${user.uid}`}
            className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <img
              src={
                user.photoURL ||
                "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80"
              }
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-slate-800">{user.name || "Անանուն"}</p>
              <p className="text-sm text-slate-400">{user.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}