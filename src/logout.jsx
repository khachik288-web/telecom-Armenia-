import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, get, child } from "firebase/database";
import { signOut } from "firebase/auth";

export default function LogOut() {
    const [userData, setUserData] = useState(null);
    const [isGoogleUser, setIsGoogleUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const googleName = localStorage.getItem("userName");
        const googleEmail = localStorage.getItem("userEmail");
        const googlePhoto = localStorage.getItem("userPhoto");

        if (googleEmail) {
            // юзер вошёл через Google
            setIsGoogleUser(true);
            setUserData({
                name: googleName,
                email: googleEmail,
                photo: googlePhoto,
            });
            return;
        }

        // юзер зарегистрировался через телефон/email форму
        const userId = localStorage.getItem("userId");
        if (userId) {
            const dbRef = ref(db);
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                }
            });
        }
    }, []);

    const handleLogOut = async () => {
        if (isGoogleUser) {
            await signOut(auth);
        }
        localStorage.removeItem("isRegistered");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhoto");
        navigate("/reg");
    };

    return (
        <div className="w-[720px] h-[500px] border border-black rounded-3xl flex flex-row overflow-hidden">
            <div className="w-1/2">
                <img
                    src={isGoogleUser && userData?.photo ? userData.photo : "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* aj koxm */}
            <div className="w-1/2 flex flex-col justify-center p-8 gap-6 bg-white">
                {isGoogleUser && userData?.name && (
                    <div>
                        <label className="block text-xs text-slate-500 mb-1">
                            Անուն
                        </label>
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
                        էլեկտրակայան հասցե/Հեռախոսահամար
                    </label>
                    <p className="text-slate-800 font-medium text-lg border-b border-slate-200 pb-2">
                        {userData ? (userData.email || userData.phone || "Нет данных") : "մեկ վարկյան․․․"}
                    </p>
                </div>

                {!isGoogleUser && (
                    <div>
                        <label className="block text-xs text-slate-500 mb-1">
                            Գաղտնաբառ
                        </label>
                        <p className="text-slate-800 font-medium text-lg border-b border-slate-200 pb-2">
                            {userData ? userData.password : "մեկ վարկյան․․․"}
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