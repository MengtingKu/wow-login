import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize, useIntersection } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const languageData = {
    chinese: {
        subTitle: '盡可能選擇汽車',
        loginButton: '登入',
        footerCopyright: '版權所有',
    },
    english: {
        subTitle: 'Choose the car as far as you can',
        loginButton: 'login',
        footerCopyright: 'Copyright',
    },
};

function App() {
    const { width } = useWindowSize();
    const [time, setTime] = useState('');
    const [language, setLanguage] = useState('english');
    const [animateCar, setAnimateCar] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    });

    const handleSubmit = () => {
        alert('歡迎回來');
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(
                dayjs().format(
                    width < 787 ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss'
                )
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, [width]);

    useEffect(() => {
        if (intersection && intersection.intersectionRatio >= 0.1) {
            setIsInView(true);
        }
    }, [intersection]);

    return (
        <>
            <header style={{ height: '46px', lineHeight: '46px' }}>
                <div className="container header">
                    <div className="logo">
                        <button type="button" className="homepage_btn">
                            <img src="./logo.png" alt="logo" />
                        </button>
                    </div>

                    <div className="time_language">
                        <small className="now_date">GMT+8 {time}</small>
                        <select
                            className="language_select"
                            aria-label="language select"
                            value={language}
                            onChange={e => {
                                setLanguage(e.target.value);
                            }}
                        >
                            <option value="chinese">繁體中文</option>
                            <option value="english">英文</option>
                        </select>
                    </div>
                </div>
            </header>
            <main
                className="main"
                style={{
                    background: 'url(./bg.png) no-repeat center center / cover',
                    minHeight: `calc(100vh - 92px - 46px)`,
                }}
            >
                <div className="contact_us">
                    <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div className="container">
                    <h2 className="welcome_title">
                        <img
                            src="./main-title.png"
                            alt="welcome title"
                            className="title_img"
                        />
                        <span className="sub_title">
                            {languageData[language].subTitle}
                        </span>
                    </h2>
                    <div className="banner">
                        <small className="ask_text">Here?</small>
                        <img
                            src="./banner-cars.png"
                            alt="many car"
                            className="carts_img"
                        />
                        <form
                            ref={intersectionRef}
                            onSubmit={() => handleSubmit()}
                            className={`login_form animate__animated animate__fadeIn ${
                                isInView ? 'animate__fadeIn' : ''
                            }`}
                        >
                            <div className="form">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="amount"
                                    className="form_control"
                                    style={{ marginBottom: '1rem' }}
                                    required
                                />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    className="form_control"
                                    required
                                />
                            </div>
                            <div className="form_btn">
                                <button type="submit" className="login_btn">
                                    <div
                                        className="btn_label"
                                        style={{
                                            lineHeight: '80px',
                                        }}
                                    >
                                        {languageData[language].loginButton}
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="show_cars">
                        <div
                            className={`car animate__animated  ${
                                animateCar ? 'animate__pulse' : ''
                            }`}
                            onMouseEnter={() => setAnimateCar(true)}
                            onMouseLeave={() => setAnimateCar(false)}
                        >
                            <img
                                ref={intersectionRef}
                                src="./block1-car.png"
                                alt="display car"
                                className={`animate__animated ${
                                    isInView ? 'animate__fadeInLeft' : ''
                                }`}
                            />
                        </div>
                        <div
                            className={`car animate__animated  ${
                                animateCar ? 'animate__pulse' : ''
                            }`}
                            onMouseEnter={() => setAnimateCar(true)}
                            onMouseLeave={() => setAnimateCar(false)}
                        >
                            <img
                                ref={intersectionRef}
                                src="./block2-car.png"
                                alt="display car"
                                className={`animate__animated ${
                                    isInView ? 'animate__fadeInLeft' : ''
                                }`}
                            />
                        </div>
                        <div
                            className={`car animate__animated  ${
                                animateCar ? 'animate__pulse' : ''
                            }`}
                            onMouseEnter={() => setAnimateCar(true)}
                            onMouseLeave={() => setAnimateCar(false)}
                        >
                            <img
                                ref={intersectionRef}
                                src="./block3-car.png"
                                alt="display car"
                                className={`animate__animated ${
                                    isInView ? 'animate__fadeInLeft' : ''
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="developer_text">
                    切版人 - Ku Mengting &nbsp; | &nbsp; kuku
                </div>
                <div className="copyright_text">
                    {languageData[language].footerCopyright} &copy; 2022
                    wataidesign.com
                </div>
            </footer>
        </>
    );
}

export default App;
