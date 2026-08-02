import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { db, auth, googleProvider } from "./firebase";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Reg() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Записывает публичный профиль юзера в базу под его uid
  const saveUserProfile = async (uid, data) => {
    await set(ref(db, `users/${uid}`), {
      ...data,
      createdAt: new Date().toISOString(),
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await saveUserProfile(user.uid, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError("Սխալ Google-ով մուտքի ժամանակ");
    }
  };

  const handleRegister = async () => {
    setError("");
    if (!email || !password) {
      setError("Լրացրեք էլ. հասցեն և գաղտնաբառը");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await saveUserProfile(user.uid, {
        name: email.split("@")[0],
        email: email,
        phone: phone || null,
        photoURL: null,
      });

      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err.code));
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/logout");
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err.code));
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "Այս էլ. հասցեն արդեն գրանցված է";
      case "auth/invalid-email":
        return "Սխալ էլ. հասցե";
      case "auth/weak-password":
        return "Գաղտնաբառը շատ թույլ է (նվազագույնը 6 նիշ)";
      case "auth/invalid-credential":
        return "Սխալ էլ. հասցե կամ գաղտնաբառ";
      default:
        return "Ինչ-որ բան այն չէ, փորձեք կրկին";
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full max-w-md bg-slate-50 flex flex-col px-16 py-10">
        <img
          src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png"
          className="w-[80px] h-[80px] mb-[25px]"
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* email */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Էլ. հասցե
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-slate-200 pb-1 outline-none text-sm placeholder:text-slate-300 bg-white text-slate-800"
              />
            </div>

            {/* phone — опционально, только для профиля */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Հեռախոսահամար (ոչ պարտադիր)
              </label>
              <div className="flex items-center border-b border-slate-200 pb-1 gap-2">
                <span className="text-slate-600 text-sm">+374</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder:text-slate-300 bg-white text-slate-800"
                />
              </div>
            </div>

            {/* parol */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Գաղտնաբառ
              </label>
              <div className="flex items-center border-b border-slate-200 pb-1 gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder:text-slate-300 bg-white text-slate-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* mutq */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#e8615a] hover:bg-[#dd534c] text-white font-medium rounded-full py-3 mt-2"
            >
              Մուտք
            </button>

            {/* googlov */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-[#e8615a] bg-white hover:bg-slate-50 text-[#e8615a] font-medium rounded-full py-3 mt-2 flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} />
              <span>Մուտք Google-ով</span>
            </button>

            {/* registracia */}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full border border-[#e8615a] text-[#e8615a] font-medium rounded-full py-3 bg-white"
            >
              Գրանցում
            </button>
          </form>
        </div>
      </div>

      <div className="relative flex-1 bg-[url('https://burst.shopifycdn.com/photos/man-hiking-in-mountains.jpg?exif=0&iptc=0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10" />
        <h1 className="absolute top-16 left-16 text-white text-5xl font-bold drop-shadow-lg">
          ԱՆԶՆԱԿԱՆ ԳՐԱՍԵՆՅԱԿ
        </h1>
      </div>
    </div>
  );
}