import React, { useState } from 'react';

export default function ToxnelH() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '0',
    region: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white font-sans text-slate-600">
      {/* Description text */}
      <p className="text-sm text-slate-500 mb-6 max-w-4xl leading-relaxed">
        Տվյալ հասցեում հասանելի ինտերնետի արագությունը ճշտելու համար լրացրեք հետևյալ դիմումը և սեղմեք ուղարկել: Սարքավորումների առաքումն և տեղադրումը անվճար է ՀՀ ամբողջ տարածքով:
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-8">
        Թողնել հայտ
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Անուն ազգանուն*
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-800 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Էլ.հասցե
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-800 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Հեռախոսի համար*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-800 bg-white"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Մարզ*
            </label>
            <div className="relative">
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-500 appearance-none bg-white cursor-pointer"
              >
                <option value="" disabled hidden>
                  Ընտրել շրջանը
                </option>
                <option value="yerevan">Երևան</option>
                <option value="ararat">Արարատ</option>
                <option value="armavir">Արմավիր</option>
                <option value="aragatsotn">Արագածոտն</option>
                <option value="gegharkunik">Գեղարքունիք</option>
                <option value="kotayk">Կոտայք</option>
                <option value="lori">Լոռի</option>
                <option value="shirak">Շիրակ</option>
                <option value="syunik">Սյունիք</option>
                <option value="vayots-dzor">Վայոց Ձոր</option>
                <option value="tavush">Տավուշ</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-600">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Հասցե*
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-800 bg-white"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#eb4d4b] hover:bg-red-600 text-white font-bold rounded-full text-sm transition-colors duration-200 cursor-pointer"
            >
              Ուղարկել
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}