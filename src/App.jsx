import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'; 
import Row from 'react-bootstrap/Row';   
import Col from 'react-bootstrap/Col';   
import Card from 'react-bootstrap/Card'; 
import Eshop from './eshop.jsx';
import MerMasin from './merMasin.jsx';
import KapiTangaran from './kapiTangaran.jsx';
import Norutyuner from './norutyuner.jsx';
import Yndanurdrutyuner from './yndanurdrutyuner.jsx';
import Anvtangutyun from './anvtangutyun.jsx';
import TeamTVPage from './teamtv.jsx';
import Myteam from './myteam.jsx';
import Reg from './reg.jsx';
import LogOut from './logout.jsx'; // 1. ИМПОРТИРУЕМ LOGOUT

import { 
  FaRegUserCircle, FaRegCreditCard, FaShoppingCart, FaBars,
  FaMobileAlt, FaPhoneAlt, FaThLarge, FaTv, FaChevronRight,
  FaFacebook, FaInstagram, FaYoutube, FaRegEnvelope, FaBuilding, FaInfoCircle,
  FaSearch
} from 'react-icons/fa';

import './App.css';

// reg-logout guards
function RegGuard() {
  const isRegistered = localStorage.getItem("isRegistered") === "true";
 
  if (isRegistered) {
    return <Navigate to="/profile" replace />;
  }
 
  return <Reg />;
}
 
function ProfileGuard() {
  const isRegistered = localStorage.getItem("isRegistered") === "true";
 
  if (!isRegistered) {
    return <Navigate to="/reg" replace />;
  }
 
  // 2. ВОЗВРАЩАЕМ LOGOUT ВМЕСТО НЕСУЩЕСТВУЮЩЕГО PROFILE
  return (
    <div className="flex justify-center items-center my-10">
      <LogOut />
    </div>
  );
}

function BusinessPage() {
  return (
    <>
      {/* СЛАЙДЕР */}
      <Carousel fade> 
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="https://www.telecomarmenia.am/images/advanced_slider/1/16509736514207.png"
            alt="PRO Tariff Background"
          />
          
          <Carousel.Caption className="business-slider-caption">
            <Row className="align-items-center">
              <Col xs={12} md={7}>
                <h1 className="business-slider-title">PRO</h1>
                <div className="business-slider-list">
                  • PROգրեսիվ<br />
                  • PROդուկտիվ<br />
                  • PROֆեսիոնալ
                </div>
                <button className="btn-yellow-rounded">Մանրամասն</button>
              </Col>

              <Col md={5} className="d-none d-md-block text-end">
                <img 
                  src="https://www.telecomarmenia.am/images/advanced_slider/1/1650973651394.png" 
                  alt="PRO Phone" 
                  style={{ maxHeight: '420px', objectFit: 'contain' }}
                />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5 pt-2">
        <h2 className="mb-4 text-start" style={{ color: '#00293c', fontWeight: 'bold', fontSize: '28px' }}>
          Բջջային կապի սակագներ
        </h2>
        
        <Row className="g-4 align-items-stretch">
          <Col xs={12} sm={6} lg={3}>
            <div style={{
              background: 'linear-gradient(180deg, #3a4b53 0%, #2c393f 100%)',
              borderRadius: '8px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px 20px',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <div className="mt-4">
                <h3 style={{ fontSize: '22px', letterSpacing: '2px', fontWeight: 'bold', margin: '0' }}>SMART</h3>
                <h4 style={{ fontSize: '16px', letterSpacing: '1px', fontWeight: '400', marginBottom: '40px', color: '#b0bec5' }}>BUSINESS</h4>
                <p style={{ fontSize: '15px', padding: '0 10px', lineHeight: '1.4' }}>Կարգավորեք Ձեր փաթեթը</p>
              </div>
              <div className="mb-4">
                <button style={{ backgroundColor: '#f1534f', color: '#fff', border: 'none', borderRadius: '20px', padding: '10px 35px', fontWeight: 'bold', fontSize: '14px' }}>Միանալ</button>
              </div>
            </div>
          </Col>

          {/* PRO 3700 */}
          <Col xs={12} sm={6} lg={3}>
            <div className='bg-[#f8f9fa] border-[#00293c] rounded-b-lg p-6 px-5 py-[30px] h-full flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.03)]'>
              <div className="text-center mb-4">
                <span style={tariffCardBadgeStyle}>PRO</span>
                <h3 style={tariffCardPriceStyle}>3700</h3>
              </div>
              <div style={tariffSpecListStyle}>
                <div style={specItemStyle}><span style={badge4GStyle}>4G</span> 40 ԳԲ</div>
                <div style={specItemStyle}><FaPhoneAlt size={14} style={specIconStyle} /> 1,500 րոպե</div>
                <div style={specItemStyle}><FaTv size={14} style={specIconStyle} /> 60 ալիք</div>
                <div style={specItemStyle}><FaRegEnvelope size={14} style={specIconStyle} /> 1,500 SMS</div>
              </div>
              <div className="d-flex justify-content-center gap-1 my-3">
                <span style={{...socialDotStyle, backgroundColor: '#3b5998'}}></span>
                <span style={{...socialDotStyle, backgroundColor: '#0084ff'}}></span>
                <span style={{...socialDotStyle, backgroundColor: '#25d366'}}></span>
                <span style={{...socialDotStyle, backgroundColor: '#7360f2'}}></span>
                <span style={{...socialDotStyle, backgroundColor: '#e0e0e0', color: '#666', fontSize: '9px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>+6</span>
              </div>
              <div className="text-center mt-auto mb-2">
                <button style={tariffButtonStyle}>Մանրամասն</button>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <div className='bg-[#f8f9fa] border-[#00293c] rounded-b-lg p-6 px-5 py-[30px] h-full flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.03)]'>
              <div className="text-center mb-4">
                <span style={tariffCardBadgeStyle}>PRO</span>
                <h3 style={tariffCardPriceStyle}>5200</h3>
              </div>
              <div style={tariffSpecListStyle}>
                <div style={specItemStyle}><span style={badge4GStyle}>4G</span> Անսահման. ԳԲ</div>
                <div style={specItemStyle}><FaPhoneAlt size={14} style={specIconStyle} /> 3,500 րոպե</div>
                <div style={specItemStyle}><FaTv size={14} style={specIconStyle} /> 110 ալիք</div>
                <div style={specItemStyle}><FaRegEnvelope size={14} style={specIconStyle} /> 3,500 SMS</div>
              </div>
              <div className="text-center mt-auto mb-2">
                <button style={tariffButtonStyle}>Մանրամասն</button>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <div className='bg-[#f8f9fa] border-[#00293c] rounded-b-lg p-6 px-5 py-[30px] h-full flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.03)]'>
              <div className="text-center mb-4">
                <span style={tariffCardBadgeStyle}>PRO</span>
                <h3 style={tariffCardPriceStyle}>8200</h3>
              </div>
              <div style={tariffSpecListStyle}>
                <div style={specItemStyle}><span style={badge4GStyle}>4G</span> Անսահման. ԳԲ</div>
                <div style={specItemStyle}><FaPhoneAlt size={14} style={specIconStyle} /> 6,000 րոպե</div>
                <div style={specItemStyle}><FaTv size={14} style={specIconStyle} /> 110 ալիք</div>
                <div style={specItemStyle}><FaRegEnvelope size={14} style={specIconStyle} /> 6,000 SMS</div>
              </div>
              <div className="text-center mt-auto mb-2">
                <button style={tariffButtonStyle}>Մանրամասն</button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="text-end mt-4 border-bottom pb-4">
          <a href="#see-all" style={{ color: '#00293c', fontSize: '14px', textDecoration: 'underline', fontWeight: '500' }}>Տեսնել ավելին</a>
        </div>
      </Container>

      {/* СЕРВИСНЫЕ КАРТОЧКИ */}
      <Container className="my-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div style={serviceBoxStyle}>
              <div style={{ maxWidth: '65%', zIndex: 2 }}>
                <h4 style={serviceBoxTitleStyle}>ԿՈՐՊՈՐԱՏԻՎ ՑԱՆՑԵՐ</h4>
                <p style={serviceBoxSubStyle}>Տեղեկատվության փոխանակման ապահով համակարգ</p>
                <a href="#more" style={serviceBoxLinkStyle}>Մանրամասն <FaChevronRight size={10} style={{ marginLeft: '4px', color: '#f1534f' }} /></a>
              </div>
              <div style={circleGraphicBackingStyle}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1px dashed rgba(0, 188, 212, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div style={serviceBoxStyle}>
              <div style={{ maxWidth: '65%', zIndex: 2 }}>
                <h4 style={serviceBoxTitleStyle}>MOBILE ID</h4>
                <p style={serviceBoxSubStyle}>Վճարումներ և նույնականացում բջջային հեռախոսի միջոցով</p>
                <a href="#more" style={serviceBoxLinkStyle}>Մանրամասն <FaChevronRight size={10} style={{ marginLeft: '4px', color: '#f1534f' }} /></a>
              </div>
              <div style={circleGraphicBackingStyle}>
                <div style={{ width: '50px', height: '80px', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', position: 'relative' }}>
                  <div style={{ width: '12px', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '4px auto 0', borderRadius: '2px' }}></div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div style={serviceBoxStyle}>
              <div style={{ maxWidth: '65%', zIndex: 2 }}>
                <h4 style={serviceBoxTitleStyle}>M2M ԼՈՒԾՈՒՄՆԵՐ</h4>
                <p style={serviceBoxSubStyle}>Տվյալների հուսալի փոխանցում</p>
                <a href="#more" style={serviceBoxLinkStyle}>Մանրամասն <FaChevronRight size={10} style={{ marginLeft: '4px', color: '#f1534f' }} /></a>
              </div>
              <div style={circleGraphicBackingStyle}>
                <FaSearch size={70} color="#00bcd4" style={{ opacity: 0.2, transform: 'rotate(-15deg)' }} />
              </div>
            </div>
          </Col>

          <Col>
            <div style={serviceBoxStyle}>
              <div style={{ maxWidth: '65%', zIndex: 2 }}>
                <h4 style={serviceBoxTitleStyle}>SMS-ԻՆՖՈ</h4>
                <p style={serviceBoxSubStyle}>Զանգվածային SMS տարածման ծառայություն</p>
                <a href="#more" style={serviceBoxLinkStyle}>Մանրամասն <FaChevronRight size={10} style={{ marginLeft: '4px', color: '#f1534f' }} /></a>
              </div>
              <div style={circleGraphicBackingStyle}>
                <FaRegEnvelope size={75} color="#fff" style={{ opacity: 0.15 }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ФОРМА ОБРАТНОЙ СВЯЗИ */}
      <div style={{ backgroundColor: '#001b26', padding: '60px 0', color: '#fff', width: '100%', marginTop: '50px' }}>
        <Container style={{ maxWidth: '850px' }}>
          <h2 className="text-center mb-3" style={{ fontWeight: 'bold', fontSize: '28px', letterSpacing: '0.5px' }}>
            ՏԵՂԱՓՈԽՎԵ՛Ք TEAM ՁԵՐ ՀԱՄԱՐՈՎ
          </h2>
          <p className="text-center mb-5" style={{ color: '#b0bec5', fontSize: '14px', maxWidth: '650px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            Դարձե՛ք Team բաժանորդ, օգտվե՛ք ցանցի առավելություններից՝ պահելով ձեր բջջային հեռախոսի համարը:
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <Row className="g-4">
              <Col xs={12} md={6}>
                <label style={formLabelStyle}>Տեղափոխվող համար (0XX)YYYYYY ֆորմատով*</label>
                <input type="text" className="form-control" style={formInputStyle} required placeholder="0________" />
              </Col>
              <Col xs={12} md={6}>
                <label style={formLabelStyle}>Անուն Ազգանուն*</label>
                <input type="text" className="form-control" style={formInputStyle} required />
              </Col>
              <Col xs={12} md={6}>
                <label style={formLabelStyle}>Կազմակերպություն*</label>
                <input type="text" className="form-control" style={formInputStyle} required />
              </Col>
              <Col xs={12} md={6}>
                <label style={formLabelStyle}>Կոնտակտային հեռախոս*</label>
                <input type="text" className="form-control" style={formInputStyle} required placeholder="+" />
              </Col>
            </Row>
            
            <div className="text-center mt-5">
              <button type="submit" style={{
                backgroundColor: '#f1534f',
                color: '#fff',
                border: 'none',
                borderRadius: '25px',
                padding: '12px 65px',
                fontSize: '15px',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(241, 83, 79, 0.3)'
              }}>
                Միանալ
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>        
      <div className='slider-img-size'>
        <Carousel fade> 
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.telecomarmenia.am/images/block_with_text/1/17781573777003.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="h3">Արի՛ Team Place` քո արտոնությունների հետևից</h3>
              <button className="btn-red-rounded">Ավելին</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.telecomarmenia.am/images/advanced_slider/2/17784978911155.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.telecomarmenia.am/images/advanced_slider/2/17788264270257.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="my-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="service-card">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="service-card-title">ԲՋՋԱՅԻՆ ԿԱՊ</Card.Title>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <a href="#more" className="service-card-link">Ավելին <FaChevronRight size={12} color="#ff4500" /></a>
                  <FaMobileAlt size={50} color="#00d2ff" style={{ opacity: 0.8 }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="service-card">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="service-card-title">ՖԻՔՍՎԱԾ ԿԱՊ</Card.Title>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <a href="#more" className="service-card-link">Ավելին <FaChevronRight size={12} color="#ff4500" /></a>
                  <FaPhoneAlt size={45} color="#00d2ff" style={{ opacity: 0.8 }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="service-card">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="service-card-title">ՀԱՎԵԼՎԱԾՆԵՐ</Card.Title>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <a href="#more" className="service-card-link">Ավելին <FaChevronRight size={12} color="#ff4500" /></a>
                  <FaThLarge size={45} color="#00d2ff" style={{ opacity: 0.8 }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="service-card">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="service-card-title">ԻՆՏԵՐՆԵՏ ԵՎ TV</Card.Title>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <a href="#more" className="service-card-link">Ավելին <FaChevronRight size={12} color="#ff4500" /></a>
                  <FaTv size={45} color="#00d2ff" style={{ opacity: 0.8 }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="promo-banner-container">
        <Container className="text-center text-white">
          <h2 className="promo-banner-title">ԴԱՐՁԵՔ TEAM ԲԱԺԱՆՈՐԴ</h2>
          <p className="promo-banner-subtitle">Միացե՛ք մեզ ձեր համարով և օգտվե՛ք Team-ի բոլոր առավելություններից:</p>
          <button className="btn-red-rounded">Միանալ</button>
        </Container>
      </div>

      <Container className="my-5 position-relative">
        <h2 className="text-center mb-4 news-main-title">Լրահոս</h2>
        
        <Carousel data-bs-theme="dark" indicators={true} controls={true} interval={null}>
          <Carousel.Item>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card className="news-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=400" className="news-img" />
                  <Card.Body>
                    <div className="news-date">14 May</div>
                    <Card.Title className="news-title">Տելեգրաֆից մինչև 5G. Կապի թանգարանը միանում է «Թանգարանների գիշերվան»</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="news-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400" className="news-img" />
                  <Card.Body>
                    <div className="news-date">13 May</div>
                    <Card.Title className="news-title">Team-ի աջակցությամբ Տավուշի հարյուրավոր աշակերտներ մասնակցել են «Սիմֆոնիկ ԴասԱ»...</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="news-card">
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400" className="news-img" />
                  <Card.Body>
                    <div className="news-date">22 April</div>
                    <Card.Title className="news-title">Բնության հանդեպ հոգատար վերաբերմունքը սկսել ենք մեզնից. Team-ն արժանացել է ISO 14001:2015...</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>

        <div className="text-end mt-3">
          <a href="#all-news" className="news-link-all">Տեսնել ավելին</a>
        </div>
      </Container>
      <img src="../img/team4.png" className="img-fluid w-100 d-block m-0" alt="team-promo" />
    </>
  );
}

// ================= КОМПОНЕНТ ХЕДЕРА =================
function Header() {
  const location = useLocation(); 

  return (
    <header className="app-header-container">
      <div className="top-blue-panel">
        <Container className="d-flex justify-content-between align-items-center px-0" style={{ height: '42px' }}>
          
          <div className="d-flex h-100 align-items-center">
            <Link 
              to="/" 
              className={`top-bar-tab ${location.pathname === '/' ? 'active-tab' : ''}`}
            >
              Անհատներին
            </Link>
            <Link 
              to="/business" 
              className={`top-bar-tab ${location.pathname === '/business' ? 'active-tab' : ''}`}
            >
              Բիզնես
            </Link>
            <Link
              to="/eshop" 
              className={`top-bar-tab ${location.pathname === '/eshop' ? 'active-tab' : ''}`}
            >         
              E-shop
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3 pe-3">
            <a href="#search" style={{ color: '#b0cddb' }}><FaSearch size={14} /></a>
            <span style={{ color: '#09435e' }}>|</span>
            <div className="d-flex gap-2" style={{ fontSize: '13px' }}>
              <a href="#hy" style={{ color: '#f1534f', textDecoration: 'none', fontWeight: 'bold' }}>Հայ</a>
              <a href="#ru" style={{ color: '#b0cddb', textDecoration: 'none' }}>Рус</a>
              <a href="#en" style={{ color: '#b0cddb', textDecoration: 'none' }}>Eng</a>
            </div>
            <span style={{ color: '#09435e' }}>|</span>
            {/* 3. ИСПОЛЬЗУЕМ LINK ВМЕСТО ОБЫЧНОГО A TAG */}
            <Link to="/reg" className="cabinet-link">
              <FaRegUserCircle size={16} /> <span>Անձնական գրասենյակ</span>
            </Link>
          </div>
        </Container>
      </div>

      <div className="bottom-white-panel">
        <Container className="d-flex justify-content-between align-items-center px-0" style={{ height: '85px' }}>
          <Link to="/" className="ps-3 d-flex align-items-center">
            <img 
              src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png" 
              alt="telecom armenia" 
              style={{ height: '52px' }} 
            />
          </Link>

          <nav className="d-flex align-items-center gap-4">
            <a href="#tariffs" className="main-menu-link">Սակագներ</a>
            <a href="#internet" className="main-menu-link">Ինտերնետ</a>
            <a href="#services" className="main-menu-link">Ծառայություններ</a>
            <a href="#roaming" className="main-menu-link">Ռոումինգ</a>
            <a href="#online-shop" className="main-menu-link">Առցանց խանութ</a>
            <a href="#offers" className="main-menu-link">Առաջարկներ</a>
            <a href="#help" className="main-menu-link">Օգնություն</a>
          </nav>

          <div className="h-100 d-flex align-items-center">
            <div className="blue-card-box"><FaRegCreditCard size={25} color="#00293c" /></div>
          </div>
        </Container>
      </div>
    </header>
  );
}

// ================= ОСНОВНОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ =================
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/merMasin" element={<MerMasin />} />
        <Route path="/kapiTangaran" element={<KapiTangaran />} />
        <Route path="/norutyuner" element={<Norutyuner />} />
        <Route path="/yndanurdrutyuner" element={<Yndanurdrutyuner />} />
        <Route path="/anvtangutyun" element={<Anvtangutyun />} />
        <Route path="/teamtv" element={<TeamTVPage />} />
        <Route path="/myteam" element={<Myteam/>} />
        <Route path="/reg" element={<RegGuard/>} />
        {/* 4. ДОБАВЛЕН НЕДОСТАЮЩИЙ МАРШРУТ /PROFILE */}
        <Route path="/profile" element={<ProfileGuard />} />
      </Routes>

      <footer className="footer-main">
        <Container style={{ paddingTop: '60px', paddingBottom: '40px' }}>
          <Row className="g-4">
            <Col xs={12} md={6} lg={3}>
              <img src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png" alt="Telecom" style={{ height: '45px', marginBottom: '25px', display: 'block' }} />
              <div className="d-flex gap-3 mb-4">
                <a href="#fb" className="footer-social-icon"><FaFacebook size={20} /></a>
                <a href="#in" className="footer-social-icon"><FaInstagram size={20} /></a>
                <a href="#yt" className="footer-social-icon"><FaYoutube size={20} /></a>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2 footer-contact"><FaPhoneAlt size={16} /><span>100</span></div>
              <div className="d-flex align-items-center gap-2 mb-4 footer-contact"><FaRegEnvelope size={16} /><span>info@telecomarmenia.am</span></div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-col-title"><FaBuilding size={18} style={{ marginRight: '8px', color: '#b0cddb' }} />Ընկերության մասին</h5>
              <ul className="footer-list">
                <li><Link to="/merMasin" className="footer-link">Մեր մասին</Link></li>
                <li><Link to="/kapiTangaran" className="footer-link">Կապի թանգարան</Link></li>
                <li><a href="/norutyuner" className="footer-link">Նորություններ</a></li>
              </ul>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-col-title"><FaInfoCircle size={18} style={{ marginRight: '8px', color: '#b0cddb' }} />Տեղեկատվություն</h5>
              <ul className="footer-list">
                <li><a href="/yndanurdrutyuner" className="footer-link">Ընդհանուր դրույթներ և պայմաններ</a></li>
                <li><a href="/anvtangutyun" className="footer-link">Անվտանգություն</a></li>
              </ul>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-col-title"><FaThLarge size={16} style={{ marginRight: '8px', color: '#b0cddb' }} />Team հավելվածներ</h5>
              <ul className="footer-list">
                <li><a href="/teamtv" className="footer-link">TeamTV</a></li>
                <li><a href="/myteam" className="footer-link">My Team</a></li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div className="footer-bottom">
          <Container className="text-center">
            <span className="footer-copyright-text">© 2026 Տելեկոմ Արմենիա ԲԲԸ: Բոլոր իրավունքները պաշտպանված են:</span>
          </Container>
        </div>
      </footer>
    </Router>
  );
}

const tariffCardBadgeStyle = { fontSize: '15px', fontWeight: '600', color: '#546e7a', display: 'block', marginBottom: '2px', letterSpacing: '1px' };
const tariffCardPriceStyle = { fontSize: '32px', fontWeight: 'bold', color: '#00293c', margin: '0' };
const tariffSpecListStyle = { display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0', color: '#455a64', fontSize: '15px', paddingLeft: '10px' };
const specItemStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
const specIconStyle = { color: '#78909c' };
const badge4GStyle = { border: '1px solid #00293c', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', padding: '1px 4px', color: '#00293c', lineHeight: '1' };
const socialDotStyle = { width: '18px', height: '18px', borderRadius: '50%', display: 'inline-block' };
const tariffButtonStyle = { background: 'transparent', border: '1px solid #f1534f', color: '#f1534f', borderRadius: '20px', padding: '8px 30px', fontSize: '13px', fontWeight: '600', transition: '0.2s', cursor: 'pointer' };
const serviceBoxStyle = { background: 'linear-gradient(135deg, #002d3f 0%, #004d6b 100%)', borderRadius: '8px', padding: '35px 30px', minHeight: '160px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden', color: '#fff' };
const serviceBoxTitleStyle = { fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '0.5px' };
const serviceBoxSubStyle = { fontSize: '13px', color: '#b0bec5', marginBottom: '16px', lineHeight: '1.4' };
const serviceBoxLinkStyle = { color: '#f1534f', textDecoration: 'none', fontSize: '14px', fontWeight: '600' };
const circleGraphicBackingStyle = { position: 'absolute', right: '25px', bottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const formLabelStyle = { fontSize: '13px', color: '#b0bec5', marginBottom: '6px', display: 'block', paddingLeft: '4px' };
const formInputStyle = { borderRadius: '20px', backgroundColor: '#fff', border: 'none', padding: '11px 20px', fontSize: '14px' };

export default App;