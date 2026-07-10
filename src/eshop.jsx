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
    <a className="category-card">
      <div className="category-card__icon-wrap">
        <span className="category-card__icon">{icon}</span>
      </div>
      <span className="category-card__text">{text}</span>
    </a>
  );
}

// Карточка товара
function ProductCard({ image, title, price, currency = '֏', dotColor = '#000' }) {
  return (
    <div className="product-card">
      <h3 className="product-card__title">{title}</h3>

      <label className="product-card__compare">
        <input type="checkbox" />
        <span>Համեմատել</span>
      </label>

      <div className="product-card__image-wrap">
        <span
          className="product-card__color-dot"
          style={{ backgroundColor: dotColor }}
        ></span>
        <img className="product-card__image" src={image} alt={title} />
      </div>

      <div className="product-card__price">
        {price.toLocaleString()} {currency}
      </div>

      <button className="product-card__cart-btn">
        <FaShoppingCart size={16} />
        Ավելացնել զամբյուղ
      </button>
    </div>
  );
}

//apranqi taki kartchkeqy
function AprenqiTakiKartchkeq({img,bcgcolor,h3,text,button}) {
  return (
    <div className="apranqiTakiCard" style={{backgroundColor: bcgcolor}}>
      <div className='cardiMejiny'>
        <h3>{h3}</h3>
        <p>{text}</p>
        <button id='button2'>{button}</button>
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
    <div className="product-slider">
      <div className="product-slider__grid">
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

      <div className="product-slider__dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`product-slider__dot ${i === page ? 'active' : ''}`}
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
      <div className="slider">
        <div
          className="slider__track"
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
                        <span className="banner__title fb db fs50 full-width">
                          {slide.title}
                        </span>
                        {slide.desc && (
                          <span className="banner__desc db fs30">{slide.desc}</span>
                        )}
                        <span className="banner__list-item db fs14"></span>
                        {slide.linkText && (
                          <span className="banner__link ver-top-box btn trans-background btn--yellow">
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

        <button className="slider__arrow slider__arrow--prev" onClick={prev} aria-label="Previous slide">
          &#10094;
        </button>
        <button className="slider__arrow slider__arrow--next" onClick={next} aria-label="Next slide">
          &#10095;
        </button>

        <div className="slider__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider__dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='kartshkaner'>
        <CategoryCard icon={<FaMobileAlt />} text="Սմարթֆոններ" />
        <CategoryCard icon={<FaSimCard />} text="Համարներ" />
        <CategoryCard icon={<FaLaptop />} text="Սարքավորումներ" />
        <CategoryCard icon={<FaHeadphones />} text="Աքսեսուարներ" />
      </div>;

      <div className='heraxosner'>
          <ProductSlider products={products} />
      </div>
      
      <div className='apreanqi-taki-kartshkeq'>
          <div className='verevi2'>
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
        <div className='negev'>
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