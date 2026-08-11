import React, { useState } from 'react';

const codesData = [
  { region: 'Արագածոտն', district: 'Ապարան', settlement: 'Ապարան', code: '252', interCode: '--' },
  { region: 'Արագածոտն', district: 'Ապարան', settlement: 'Արտավան', code: '252', interCode: '95' },
  { region: 'Արագածոտն', district: 'Ապարան', settlement: 'Ապարան', code: '252', interCode: '--' },
  { region: 'Արագածոտն', district: 'Ապարան', settlement: 'Քուչակ', code: '252', interCode: '91' },
  { region: 'Արագածոտն', district: 'Ապարան', settlement: 'Ապարան CDMA', code: '252', interCode: '' },
  { region: 'Արագածոտն', district: 'Արագած', settlement: 'Արագած CDMA', code: '257', interCode: '' },
  { region: 'Արագածոտն', district: 'Աշտարակ', settlement: 'Աշտարակ', code: '232', interCode: '--' },
  { region: 'Արագածոտն', district: 'Աշտարակ', settlement: 'Օհանավան', code: '232', interCode: '90' },
  { region: 'Արագածոտն', district: 'Աշտարակ', settlement: 'Բյուրական', code: '232', interCode: '94' },
  { region: 'Արագածոտն', district: 'Աշտարակ', settlement: 'Աշտարակ CDMA', code: '232', interCode: '' },
  { region: 'Արագածոտն', district: 'Թալին', settlement: 'Մաստարա', code: '249', interCode: '97' },
  { region: 'Արագածոտն', district: 'Թալին', settlement: 'Արագած', code: '249', interCode: '9' },
  { region: 'Արագածոտն', district: 'Թալին', settlement: 'Թալին', code: '249', interCode: '--' },
  { region: 'Արագածոտն', district: 'Թալին', settlement: 'Կաթնաղբյուր', code: '249', interCode: '73' },
  { region: 'Արագածոտն', district: 'Թալին', settlement: 'Թալին CDMA', code: '249', interCode: '' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Վանաշեն', code: '234', interCode: '--' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Ուրցաձոր', code: '234', interCode: '86' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Արարատ', code: '234', interCode: '--' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Վեդի', code: '234', interCode: '--' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Վեդի CDMA', code: '234', interCode: '' },
  { region: 'Արարատ', district: 'Արարատ', settlement: 'Ավշար', code: '234', interCode: '' },
  { region: 'Արարատ', district: 'Արտաշատ', settlement: 'Նորաշեն', code: '235', interCode: '9' },
  { region: 'Արարատ', district: 'Արտաշատ', settlement: 'Արտաշատ', code: '235', interCode: '--' },
  { region: 'Արարատ', district: 'Արտաշատ', settlement: 'Արտաշատ CDMA', code: '235', interCode: '' },
  { region: 'Արարատ', district: 'Մասիս', settlement: 'Մասիս', code: '236', interCode: '--' },
  { region: 'Արարատ', district: 'Մասիս', settlement: 'Մասիս CDMA', code: '236', interCode: '' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Նալբանդյան', code: '237', interCode: '9' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'գ. Արմավիր', code: '237', interCode: '71' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Արմավիր', code: '237', interCode: '--' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Բամբակաշատ', code: '237', interCode: '79' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Տանձուտ', code: '237', interCode: '96' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Մրգաշատ', code: '237', interCode: '7' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Մեծամոր', code: '237', interCode: '--' },
  { region: 'Արմավիր', district: 'Արմավիր', settlement: 'Արմավիր CDMA', code: '237', interCode: '' },
  { region: 'Արմավիր', district: 'Բաղրամյան', settlement: 'Բաղրամյան', code: '233', interCode: '--' },
  { region: 'Արմավիր', district: 'Բաղրամյան', settlement: 'Մյասնիկյան', code: '233', interCode: '--' },
  { region: 'Արմավիր', district: 'Բաղրամյան', settlement: 'Բաղրամյան CDMA', code: '233', interCode: '' },
  { region: 'Արմավիր', district: 'Էջմիածին', settlement: 'Էջմիածին', code: '231', interCode: '--' },
  { region: 'Վայոց Ձոր', district: 'Վայք', settlement: 'Վայք', code: '282', interCode: '--' },
  { region: 'Վայոց Ձոր', district: 'Ջերմուկ', settlement: 'Գնդեվազ', code: '287', interCode: '94' },
  { region: 'Վայոց Ձոր', district: 'Ջերմուկ', settlement: 'Ջերմուկ', code: '287', interCode: '--' },
  { region: 'Վայոց Ձոր', district: 'Եղեգնաձոր', settlement: 'Մալիշկա', code: '281', interCode: '95' },
  { region: 'Վայոց Ձոր', district: 'Եղեգնաձոր', settlement: 'Եղեգնաձոր', code: '281', interCode: '--' },
  { region: 'Վայոց Ձոր', district: 'Եղեգնաձոր', settlement: 'Շատին', code: '281', interCode: '99' },
  { region: 'Վայոց Ձոր', district: 'Եղեգնաձոր', settlement: 'Եղեգնաձոր CDMA', code: '281', interCode: '' },
  { region: 'Գեղարքունիք', district: 'Վարդենիս', settlement: 'Վարդենիս շրջ.', code: '269', interCode: '--' },
  { region: 'Գեղարքունիք', district: 'Գավառ', settlement: 'Գավառ շրջ.', code: '264', interCode: '--' },
  { region: 'Գեղարքունիք', district: 'Մարտունի', settlement: 'Մարտունի', code: '262', interCode: '--' },
  { region: 'Գեղարքունիք', district: 'Մարտունի', settlement: 'Վարդենիկ', code: '262', interCode: '5' },
  { region: 'Գեղարքունիք', district: 'Մարտունի', settlement: 'Մարտունի CDMA', code: '262', interCode: '' },
  { region: 'Գեղարքունիք', district: 'Սևան', settlement: 'Սևան շրջ.', code: '261', interCode: '--' },
  { region: 'Գեղարքունիք', district: 'Ճամբարակ', settlement: 'Ճամբարակ', code: '265', interCode: '--' },
  { region: 'Գեղարքունիք', district: 'Ճամբարակ', settlement: 'Վահան', code: '265', interCode: '96' },
  { region: 'Գեղարքունիք', district: 'Ճամբարակ', settlement: 'Ճամբարակ CDMA', code: '265', interCode: '' },
  { region: 'Կոտայք', district: 'Կոտայք', settlement: 'Գեղաշեն', code: '222', interCode: '97' },
  { region: 'Կոտայք', district: 'Կոտայք', settlement: 'Աբովյան', code: '222', interCode: '--' },
  { region: 'Կոտայք', district: 'Կոտայք', settlement: 'Արզնի', code: '222', interCode: '--' },
  { region: 'Կոտայք', district: 'Կոտայք', settlement: 'Առինջ', code: '222', interCode: '98' },
  { region: 'Կոտայք', district: 'Կոտայք', settlement: 'Կոտայք CDMA', code: '222', interCode: '' },
  { region: 'Կոտայք', district: 'Նաիրի', settlement: 'Նոր Հաճն', code: '224', interCode: '--' },
  { region: 'Կոտայք', district: 'Նաիրի', settlement: 'Նաիրի շրջ.', code: '224', interCode: '' },
  { region: 'Կոտայք', district: 'Նաիրի', settlement: 'Նաիրի CDMA', code: '224', interCode: '' },
  { region: 'Կոտայք', district: 'Հրազդան', settlement: 'Հրազդան', code: '223', interCode: '--' },
  { region: 'Կոտայք', district: 'Հրազդան', settlement: 'Հրազդան CDMA', code: '223', interCode: '' },
  { region: 'Կոտայք', district: 'Չարենցավան', settlement: 'Չարենցավան շրջ.', code: '226', interCode: '' },
  { region: 'Լոռի', district: 'Գուգարք', settlement: 'Գուգարք շրջ.', code: '322', interCode: '--' },
  { region: 'Լոռի', district: 'Գուգարք', settlement: 'Վանաձոր', code: '322', interCode: '--' },
  { region: 'Լոռի', district: 'Սպիտակ', settlement: 'Սպիտակ շրջ.', code: '255', interCode: '--' },
  { region: 'Լոռի', district: 'Ստեփանավան', settlement: 'Ստեփանավան', code: '252', interCode: '--' },
  { region: 'Լոռի', district: 'Ստեփանավան', settlement: 'Ստեփանավան CDMA', code: '256', interCode: '' },
  { region: 'Լոռի', district: 'Տաշիր', settlement: 'Տաշիր', code: '254', interCode: '--' },
  { region: 'Լոռի', district: 'Տաշիր', settlement: 'Մեծավան', code: '254', interCode: '9' },
  { region: 'Լոռի', district: 'Տաշիր', settlement: 'Տաշիր CDMA', code: '254', interCode: '' },
  { region: 'Լոռի', district: 'Թումանյան', settlement: 'Ալավերդի', code: '253', interCode: '--' },
  { region: 'Լոռի', district: 'Թումանյան', settlement: 'Թումանյան', code: '253', interCode: '57' },
  { region: 'Լոռի', district: 'Թումանյան', settlement: 'Աղթալա', code: '253', interCode: '52' },
  { region: 'Լոռի', district: 'Թումանյան', settlement: 'Թումանյան CDMA', code: '253', interCode: '' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Բարձրավան', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Տաթև', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Քարաշեն', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Քարահունջ', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Խնածախ', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Շինուայր', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Շուռնուխ', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Խնձորեսկ', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Կոռնիձոր', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Տեղ', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Գորիս', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Վերիշեն', code: '284', interCode: '27' },
  { region: 'Սյունիք', district: 'Գորիս', settlement: 'Որոտան', code: '284', interCode: '--' },
  { region: 'Սյունիք', district: 'Կապան', settlement: 'Քաջարան', code: '285', interCode: '--' },
  { region: 'Սյունիք', district: 'Կապան', settlement: 'Կապան շրջ.', code: '285', interCode: '--' },
  { region: 'Սյունիք', district: 'Մեղրի', settlement: 'Մեղրի', code: '286', interCode: '--' },
  { region: 'Սյունիք', district: 'Մեղրի', settlement: 'Ագարակ', code: '286', interCode: '--' },
  { region: 'Սյունիք', district: 'Մեղրի', settlement: 'Շվանիձոր', code: '286', interCode: '95' },
  { region: 'Սյունիք', district: 'Մեղրի', settlement: 'Մեղրի CDMA', code: '286', interCode: '' },
  { region: 'Սյունիք', district: 'Սիսիան', settlement: 'Սիսիան', code: '283', interCode: '--' },
  { region: 'Սյունիք', district: 'Սիսիան', settlement: 'Թասիկ', code: '283', interCode: '75' },
  { region: 'Սյունիք', district: 'Սիսիան', settlement: 'Սիսիան CDMA', code: '283', interCode: '' },
  { region: 'Տավուշ', district: 'Դիլիջան', settlement: 'Դիլիջան', code: '268', interCode: '--' },
  { region: 'Տավուշ', district: 'Դիլիջան', settlement: 'Հաղարծին', code: '268', interCode: '95' },
  { region: 'Տավուշ', district: 'Դիլիջան', settlement: 'Թեղուտ', code: '268', interCode: '97' },
  { region: 'Տավուշ', district: 'Դիլիջան', settlement: 'Դիլիջան CDMA', code: '268', interCode: '' },
  { region: 'Տավուշ', district: 'Իջևան', settlement: 'Այգեհովիտ', code: '263', interCode: '74' },
  { region: 'Տավուշ', district: 'Իջևան', settlement: 'Իջևան', code: '263', interCode: '--' },
  { region: 'Տավուշ', district: 'Իջևան', settlement: 'Աչաջուր', code: '263', interCode: '92' },
  { region: 'Տավուշ', district: 'Իջևան', settlement: 'Իջևան CDMA', code: '263', interCode: '' },
  { region: 'Տավուշ', district: 'Նոյեմբերյան', settlement: 'Ոսկեպար', code: '266', interCode: '96' },
  { region: 'Տավուշ', district: 'Նոյեմբերյան', settlement: 'Նոյեմբերյան', code: '266', interCode: '--' },
  { region: 'Տավուշ', district: 'Նոյեմբերյան', settlement: 'Կողբ', code: '266', interCode: '5' },
  { region: 'Տավուշ', district: 'Նոյեմբերյան', settlement: 'Կոթի', code: '266', interCode: '99' },
  { region: 'Տավուշ', district: 'Նոյեմբերյան', settlement: 'Նոյեմբերյան CDMA', code: '266', interCode: '' },
  { region: 'Տավուշ', district: 'Բերդ', settlement: 'Մոսեսգեղ', code: '267', interCode: '96' },
  { region: 'Տավուշ', district: 'Բերդ', settlement: 'Նավուր', code: '267', interCode: '91' },
  { region: 'Տավուշ', district: 'Բերդ', settlement: 'Բերդ', code: '267', interCode: '--' },
  { region: 'Տավուշ', district: 'Բերդ', settlement: 'Նորաշեն', code: '267', interCode: '97' },
  { region: 'Տավուշ', district: 'Բերդ', settlement: 'Տավուշ CDMA', code: '267', interCode: '' },
  { region: 'Շիրակ', district: 'Ամասիա', settlement: 'Ամասիա շրջ.', code: '246', interCode: '--' },
  { region: 'Շիրակ', district: 'Անի', settlement: 'Սառնաղբյուր', code: '242', interCode: '--' },
  { region: 'Շիրակ', district: 'Անի', settlement: 'Մարալիկ', code: '242', interCode: '--' },
  { region: 'Շիրակ', district: 'Արթիկ', settlement: 'Փանիկ', code: '244', interCode: '92' },
  { region: 'Շիրակ', district: 'Արթիկ', settlement: 'Արթիկ', code: '244', interCode: '--' },
  { region: 'Շիրակ', district: 'Արթիկ', settlement: 'Արթիկ CDMA', code: '244', interCode: '' },
  { region: 'Շիրակ', district: 'Ախուրյան', settlement: 'Ախուրյան շրջ.', code: '312', interCode: '--' },
  { region: 'Շիրակ', district: 'Աշոցք', settlement: 'Աշոցք շրջ.', code: '245', interCode: '--' },
  { region: 'Շիրակ', district: 'Գյումրի', settlement: 'Գյումրի', code: '312', interCode: '--' }
];

export default function Marz() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = codesData.filter(
    (item) =>
      item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.settlement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 md:py-10 font-sans text-slate-800">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-6 sm:mb-8">
        ՀՀ մարզերի կոդեր
      </h1>

      {/* Search Input Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Որոնել ըստ մարզի, շրջանի կամ բնակավայրի..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 px-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-red-500 text-sm text-slate-800 bg-white shadow-sm transition-colors"
        />
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs sm:text-sm uppercase tracking-wider font-extrabold">
              <th className="px-4 py-3 sm:px-6 sm:py-4">Մարզ / Շրջան</th>
              <th className="px-4 py-3 sm:px-6 sm:py-4">Բնակավայր</th>
              <th className="px-4 py-3 sm:px-6 sm:py-4">Կոդ</th>
              <th className="px-4 py-3 sm:px-6 sm:py-4">Միջշրջանային կոդ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-150 text-slate-700"
                >
                  <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-[#1f2937]">
                    <div className="flex flex-col">
                      <span>{item.region}</span>
                      {item.district !== item.region && (
                        <span className="text-[11px] text-slate-400 font-normal">
                          {item.district}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">{item.settlement}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 font-bold text-slate-900">
                    {item.code}
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-500">
                    {item.interCode || '—'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-8 text-center text-slate-400 text-sm"
                >
                  Արդյունքներ չեն գտնվել
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}