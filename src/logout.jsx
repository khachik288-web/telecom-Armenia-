import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, get } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function LogOut() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // никто не залогинен — отправляем на регистрацию/вход
        navigate("/reg");
        return;
      }

      const snapshot = await get(ref(db, `users/${user.uid}`));
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      }
      setLoading(false);
    });

    // отписка при размонтировании компонента, чтобы не было утечки
    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/reg");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500">Բեռնում է...</p>
      </div>
    );
  }

  return (
    <div className="w-[720px] h-[500px] border border-black rounded-3xl flex flex-row overflow-hidden mx-auto mt-20">
      <div className="w-1/2">
        <img
          src={
            userData?.photoURL ||
            "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center p-8 gap-6 bg-white">
        {userData?.name && (
          <div>
            <label className="block text-xs text-slate-500 mb-1">Անուն</label>
            <p className="text-slate-800 font-medium text-lg border-b border-slate-200 pb-2">
              {userData.name}
            </p>
          </div>
        )}

        <div>
          <label className="block text-xs text-slate-500 mb-4 text-[20px]">
            ձեր Տվյալները
          </label>
          <label className="block text-xs text-slate-500 mb-1">
            Էլ. հասցե
          </label>
          <p className="text-slate-800 font-medium text-lg border-b border-slate-200 pb-2">
            {userData?.email || "Нет данных"}
          </p>
        </div>

        {userData?.phone && (
          <div>
            <label className="block text-xs text-slate-500 mb-1">
              Հեռախոսահամար
            </label>
            <p className="text-slate-800 font-medium text-lg border-b border-slate-200 pb-2">
              {userData.phone}
            </p>
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={handleLogOut}
            className="w-full bg-[#e8615a] hover:bg-[#dd534c] text-white font-medium rounded-full py-3 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}