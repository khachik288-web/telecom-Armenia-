import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamHavelvacner() {
  const apps = [
    {
      id: 1,
      title: 'My Team',
      imgSrc: 'https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png',
      path: '/myteam',
      lines: [
        'My Team հավելվածի միջոցով Դուք կարող եք՝',
        'Հաշվեկշռի և փաթեթների մնացորդների ստուգում',
        'Ավտոմատ վճարումների ակտիվացում',
        'Սակագնային փաթեթների...',
      ],
    },
    {
      id: 2,
      title: 'TeamTV',
      imgSrc: 'https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png',
      path: '/teamtv',
      lines: [
        'Ժամանակակից TV՝ միշտ քեզ հետ',
        'Մինչև 200 ալիք',
        'Ավելի քան 5000 ֆիլմ տեսադարանում',
        'Դիտում 5 սարքավորումներով',
        'Մինչև 7 օր catch-up...',
      ],
    },
    {
      id: 3,
      title: 'TeamPay',
      imgSrc: 'https://www.telecomarmenia.am/images/team_apps/1/17691688001842.png',
      path: '/teampay',
      lines: [
        'Էլեկտրոնային դրամապանակ',
        'Ավելի քան 50 տեսակի վճարումների համար',
        'Հատուկ առաջարկներ և ակցիաներ',
      ],
    },
    {
      id: 4,
      title: 'Team Energy',
      imgSrc: 'https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png',
      path: '/teamenergy',
      lines: [
        'Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ լիցքավորել մեքենան և կատարել...',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#00293c] mb-12">
        Team հավելվածներ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {apps.map((app) => (
          <div key={app.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            <img
              src={app.imgSrc}
              alt={app.title}
              className="w-40 h-40 sm:w-44 sm:h-44 object-contain flex-shrink-0 drop-shadow-md rounded-2xl"
            />

            <div className="flex flex-col justify-between items-center sm:items-start text-center sm:text-left h-full py-1">
              <div>
                <h3 className="text-2xl font-extrabold text-[#00293c] mb-2">
                  {app.title}
                </h3>
                <div className="text-xs sm:text-sm text-gray-500 space-y-1 font-medium leading-relaxed mb-5">
                  {app.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Ссылка переход на соответствующую страницу */}
              <Link
                to={app.path}
                className="inline-block bg-[#f1534f] text-white font-bold px-7 py-2 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/20 active:scale-95 text-center"
              >
                Միանալ
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}