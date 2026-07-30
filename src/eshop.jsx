import React, { useState, useEffect, useCallback } from 'react';
import { FaMobileAlt, FaSimCard, FaLaptop, FaHeadphones, FaShoppingCart } from 'react-icons/fa';
import './eshop.css';
import { Container } from 'react-bootstrap';

const slides = [
  {
    href: "https://www.telecomarmenia.am/eshop/hy/eshop-promos/2026/05/12/0-0-0-installment-terms/1475/",
    bg: "/images/advanced_slider/2/17785885976419.jpeg",
    phoneImg: "https://www.telecomarmenia.am/images/advanced_slider/2/17823942945498.png",
    alt: "Ցանկացած սմարթֆոն",
    align: "left",
    title: "Ցանկացած սմարթֆոն",
    desc: "0% - 0% - 0% Be Free-ին միանալու դեպքում",
    linkText: "Ավելին"
  },
  {
    href: "https://www.telecomarmenia.am/eshop/hy/accessories/apple-watch-se-3-gps-40mm-sm/2437/",
    bg: "https://www.telecomarmenia.am/images/advanced_slider/2/17797043279448.jpeg",
    phoneImg: "/images/advanced_slider/2/17797054143953.jpeg",
    alt: "",
    align: "center",
    title: null,
    desc: null,
    linkText: null
  }
];

const AUTOPLAY_DELAY = 5000;
const ITEMS_PER_PAGE = 4;

// Данные товаров каталога
const products = [
  {
    image: "https://www.telecomarmenia.am/images/product/12/17732982680845/241x273c-center.jpeg",
    title: "Հարժական էլեկտրակայան Energizer PPS PPS300W2F 293.76Wh Peak 600W",
    price: 144900,
    dotColor: "#000"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/12/17723820624795/241x273c-center.png",
    title: "Արտաքին մարտկոց Energizer Max Power UE20050CC",
    price: 13900,
    dotColor: "#888"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/12/17725249228483/241x273c-center.png",
    title: "Արտաքին մարտկոց Energizer Wireless Power QE10009PQ",
    price: 14500,
    dotColor: "#333"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/12/17751142087128/241x273c-center.png",
    title: "Նոթբուք Lenovo IdeaPad Slim 3 15IRH10R",
    price: 358900,
    dotColor: "#000"
  },
  // добавь ещё товары — они попадут на следующую страницу автоматически
  {
    image: "https://www.telecomarmenia.am/images/product/12/17738409938768/241x273c-center.jpeg",
    title: "Apple iPhone 17e",
    price: "Սկսած 5,300 ֏/ամիս",
    dotColor: "#000"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/12/17745228273546/241x273c-center.jpeg",
    title: "Նոթբուք Apple MacBook Neo A18 Pro 13",
    price: 279900,
    dotColor: "#888"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/13/17823847542779/241x273c-center.png",
    title: "Honor 600 Pro",
    price: 324900,
    dotColor: "#333"
  },
  {
    image: "https://www.telecomarmenia.am/images/product/12/17724355553369/241x273c-center.png",
    title: "Honor X8d",
    price: 104900,
    dotColor: "#000"
  },
];

//kartshkeq propsov
function CategoryCard({ icon, count, text }) {
  return (
    <a className="category-card flex flex-col items-center gap-1.5 sm:gap-2 md:flex-row md:gap-3 p-2 sm:p-3">
      <div className="category-card__icon-wrap w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full">
        <span className="category-card__icon text-lg sm:text-xl md:text-2xl">{icon}</span>
      </div>
      <span className="category-card__text text-[11px] sm:text-xs md:text-sm text-center md:text-left">{text}</span>
    </a>
  );
}

// Карточка товара
function ProductCard({ image, title, price, currency = '֏', dotColor = '#000' }) {
  return (
    <div className="product-card flex flex-col rounded-lg border border-gray-200 p-2 sm:p-3 md:p-4">
      <h3 className="product-card__title text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">{title}</h3>

      <label className="product-card__compare flex items-center gap-1.5 text-[11px] sm:text-xs mt-1.5 sm:mt-2">
        <input type="checkbox" />
        <span>Համեմատել</span>
      </label>

      <div className="product-card__image-wrap relative flex items-center justify-center py-3 sm:py-4 md:py-6">
        <span
          className="product-card__color-dot absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
          style={{ backgroundColor: dotColor }}
        ></span>
        <img className="product-card__image w-full h-24 sm:h-32 md:h-40 object-contain" src={image} alt={title} />
      </div>

      <div className="product-card__price text-sm sm:text-base md:text-lg font-semibold mt-1 sm:mt-2">
        {price.toLocaleString()} {currency}
      </div>

      <button className="product-card__cart-btn flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm mt-2 sm:mt-3 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md w-full">
        <FaShoppingCart size={16} className="shrink-0" />
        <span className="whitespace-nowrap">Ավելացնել զամբյուղ</span>
      </button>
    </div>
  );
}

//apranqi taki kartchkeqy
function AprenqiTakiKartchkeq({img,bcgcolor,h3,text,button}) {
  return (
    <div className="apranqiTakiCard w-full rounded-lg p-4 sm:p-5 md:p-6" style={{backgroundColor: bcgcolor}}>
      <div className='cardiMejiny flex flex-col gap-1.5 sm:gap-2'>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">{h3}</h3>
        <p className="text-xs sm:text-sm md:text-base">{text}</p>
        <button id='button2' className="mt-1.5 sm:mt-2 self-start text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-md">{button}</button>
      </div>
    </div>
  )
}

// Слайдер-каталог товаров (постраничный, по 4 карточки)
function ProductSlider({ products }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="product-slider w-full px-4 sm:px-6 lg:px-0">
      <div className="product-slider__grid grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {visibleProducts.map((product, i) => (
          <ProductCard
            key={start + i}
            image={product.image}
            title={product.title}
            price={product.price}
            currency={product.currency}
            dotColor={product.dotColor}
          />
        ))}
      </div>

      <div className="product-slider__dots flex justify-center gap-2 mt-4 sm:mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`product-slider__dot w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === page ? 'active' : ''}`}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Eshop() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <div className="slider relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
        <div
          className="slider__track flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <a
              key={i}
              href={slide.href}
              className={`slides__phone db ${slide.align === 'center' ? 'tc' : 'tl'}`}
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <span className="container db pr">
                <span className={`slides__txt-block db ${slide.align === 'center' ? 'tc' : 'tl'}`}>
                  {slide.title && (
                    <span className="table">
                      <span className="table-cell">
                        <span className="banner__title fb db full-width text-xl sm:text-3xl md:text-4xl lg:text-[50px]">
                          {slide.title}
                        </span>
                        {slide.desc && (
                          <span className="banner__desc db text-xs sm:text-lg md:text-2xl lg:text-[30px]">{slide.desc}</span>
                        )}
                        <span className="banner__list-item db fs14"></span>
                        {slide.linkText && (
                          <span className="banner__link ver-top-box btn trans-background btn--yellow text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 mt-2 sm:mt-3 inline-block">
                            {slide.linkText}
                          </span>
                        )}
                      </span>
                    </span>
                  )}
                </span>
                <img
                  className={`slides__phone-box ${slide.align === 'center' ? 'static-img-center' : ''}`}
                  src={slide.phoneImg}
                  alt={slide.alt}
                  style={slide.align === 'center' ? { position: 'relative' } : undefined}
                />
              </span>
            </a>
          ))}
        </div>

        <button className="slider__arrow slider__arrow--prev hidden sm:flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-base absolute left-2 md:left-4 top-1/2 -translate-y-1/2" onClick={prev} aria-label="Previous slide">
          &#10094;
        </button>
        <button className="slider__arrow slider__arrow--next hidden sm:flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-base absolute right-2 md:right-4 top-1/2 -translate-y-1/2" onClick={next} aria-label="Next slide">
          &#10095;
        </button>

        <div className="slider__dots absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider__dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='kartshkaner grid grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-6 md:px-8 lg:px-0'>
        <CategoryCard icon={<FaMobileAlt />} text="Սմարթֆոններ" />
        <CategoryCard icon={<FaSimCard />} text="Համարներ" />
        <CategoryCard icon={<FaLaptop />} text="Սարքավորումներ" />
        <CategoryCard icon={<FaHeadphones />} text="Աքսեսուարներ" />
      </div>

      <div className='heraxosner py-4 sm:py-6 md:py-8'>
          <ProductSlider products={products} />
      </div>
      
      <div className='apreanqi-taki-kartshkeq flex flex-col gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-6 md:px-8 lg:px-0'>
          <div className='verevi2 flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <AprenqiTakiKartchkeq
             bcgcolor="aqua"
             h3="Պարզ և հարմար"
             text="Գնիր ոնց հարմար է Քեզ համար"
             button="Գնել >"
            />
            <AprenqiTakiKartchkeq
             bcgcolor="rgb(35, 65, 148)"
             h3="Առաքման պայմաններ"
             text="Առաքում Հայաստանի ողջ տարածքում"
             button="Մանրամասն >"
            />
        </div>
        <div className='negev flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <AprenqiTakiKartchkeq
             bcgcolor="rgba(207, 200, 136, 0.77)"
             h3="Առցանց ապառիկ"
             text="Ի՞նչ է այն և ո՞նց է աշխատու"
             button="Մանրամասն >"
            />
            <AprenqiTakiKartchkeq
             bcgcolor="rgb(161, 183, 245)"
             h3="Ապառիկի պայմաններ"
             text="Լավագույն պայմաները Team-ից"
             button="Մանրամասն >"
            />
        </div>
      </div>
    </>
  );
}