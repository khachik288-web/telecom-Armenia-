import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { db } from "./firebase";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Reg() {
  const [clientType, setClientType] = useState("personal"); 
  const [loginType, setLoginType] = useState("phone"); 
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
  try {
    await push(ref(db, "users"), {
      phone: phone,
      password: password,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("isRegistered", "true");
    navigate("/");
  } catch (err) {
    console.error(err);
    alert("Սխալ գրանցման ժամանակ");
  }
 };
 
  return (
    <div className="flex min-h-screen">
      {/* dzax panel */}
      <div className="w-full max-w-md bg-slate-50 flex flex-col px-16 py-10">
        <img src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png" className="w-[80px] h-[80px] mb-[25px]" />

        {/* anhat kam bizn*/}
        

        {/* kartshki chapser */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          {/* kartshki hamar/gmail */}
          <div className="flex gap-6 border-b border-slate-100 mb-6">
            {[
              { id: "phone", label: "Հեռախոսահամար" },
              { id: "email", label: "Էլ. հասցե" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setLoginType(t.id)}
                className={`pb-3 text-sm font-medium relative ${
                  loginType === t.id ? "text-slate-800" : "text-slate-400"
                }`}
              >
                {t.label}
                {loginType === t.id && (
                  <span className="absolute left-0 -bottom-px w-full h-0.5 bg-sky-400" />
                )}
              </button>
            ))}
          </div>

          <form className="flex flex-col gap-5">
            {/* gmail */}
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Օգտանուն
              </label>
              {loginType === "phone" ? (
                <div className="flex items-center border-b border-slate-200 pb-1 gap-2">
                  <span className="text-slate-600 text-sm">+374</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 outline-none bc-white text-sm placeholder:text-slate-300 bg-white text-slate-800"
                  />
                </div>
              ) : (
                <input
                  type="email"
                  className="w-full border-b border-slate-200 pb-1 outline-none text-sm placeholder:text-slate-300 bg-white text-slate-800"
                />
              )}
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
                </button>
              </div>
            </div>

            {/* mutq */}
            <button
              type="submit"
              className="w-full bg-[#e8615a] hover:bg-[#dd534c] text-white font-medium rounded-full py-3 mt-2 "
            >
              Մուտք
            </button>

            {/* registracia*/}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full border border-[#e8615a] text-[#e8615a] font-medium rounded-full py-3 bg-white text-slate-800"
            >
              Գրանցում
            </button>
          </form>
        </div>
      </div>

      {/* sarerum aper */}
      <div className="relative flex-1 bg-[url('https://burst.shopifycdn.com/photos/man-hiking-in-mountains.jpg?exif=0&iptc=0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10" />

        <h1 className="absolute top-16 left-16 text-white text-5xl font-bold drop-shadow-lg">
          ԱՆԶՆԱԿԱՆ ԳՐԱՍԵՆՅԱԿ
        </h1>

      </div>
    </div>
  );
}