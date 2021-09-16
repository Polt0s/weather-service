import React from 'react';
import useAppSelector from '../../Hooks/useAppSelector';
import Input from './SearchInput';
import './weather.sass';

const Weather: React.FC = () => {
  const weather = useAppSelector((state) => state.config);
  const weatherConditions = weather.weather.map(({ main }) => main);

  const footerData: Array<{ title: string, description: string }> = [
    {
      title: 'Ветер',
      description: `${weather.windSpeed} м/с, западный`,
    },
    {
      title: 'Давление',
      description: `${weather.pressure} мм рт. ст.`,
    },
    {
      title: 'Влажность',
      description: `${weather.humidity}%`,
    },
    {
      title: 'Облочность',
      description: `${weather.clouds}%`,
    },
  ];

  return (
    <main className={'weather'}>
      <div className={'weather__grid'}>

        <div className={'header'}>
          <div className={'header__grid'}>
            <div className={'header__block-input'}>
              <Input placeholder={'Введите город'} />
            </div>

            <div className={'header__block-temperature'}>
              <div className={'header__temperature'}>
                <span className={'header__C'}>C</span>
                <span className={'header__F'}>F</span>
              </div>
            </div>
          </div>
        </div>

        <section className={'temperature'}>
          <div className={'temperature__number'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M94 35.1044V56.2411C94 59.0025 96.2386 61.2411 99 61.2411C101.761 61.2411 104 59.0025 104 56.2411V35.1044C104 32.343 101.761 30.1044 99 30.1044C96.2386 30.1044 94 32.343 94 35.1044ZM98.5 132C116.449 132 131 117.449 131 99.5C131 81.5508 116.449 67 98.5 67C80.5508 67 66 81.5508 66 99.5C66 117.449 80.5508 132 98.5 132ZM34.1044 103H55.2411C58.0025 103 60.2411 100.761 60.2411 98C60.2411 95.2386 58.0025 93 55.2411 93H34.1044C31.343 93 29.1044 95.2386 29.1044 98C29.1044 100.761 31.343 103 34.1044 103ZM163 103H141.863C139.102 103 136.863 100.761 136.863 98C136.863 95.2386 139.102 93 141.863 93H163C165.761 93 168 95.2386 168 98C168 100.761 165.761 103 163 103ZM94 164V142.863C94 140.102 96.2386 137.863 99 137.863C101.761 137.863 104 140.102 104 142.863V164C104 166.761 101.761 169 99 169C96.2386 169 94 166.761 94 164ZM49.7835 57.1475L64.7293 72.0933C66.6819 74.0459 69.8478 74.0459 71.8004 72.0933C73.753 70.1407 73.753 66.9749 71.8004 65.0222L56.8546 50.0764C54.9019 48.1238 51.7361 48.1238 49.7835 50.0764C47.8309 52.029 47.8309 55.1948 49.7835 57.1475ZM140.926 148.29L125.981 133.345C124.028 131.392 124.028 128.226 125.981 126.273C127.933 124.321 131.099 124.321 133.052 126.273L147.997 141.219C149.95 143.172 149.95 146.338 147.997 148.29C146.045 150.243 142.879 150.243 140.926 148.29ZM139.853 50.7835L124.907 65.7293C122.954 67.682 122.954 70.8478 124.907 72.8004C126.859 74.753 130.025 74.753 131.978 72.8004L146.924 57.8546C148.876 55.9019 148.876 52.7361 146.924 50.7835C144.971 48.8309 141.805 48.8309 139.853 50.7835ZM48.7097 141.926L63.6555 126.981C65.6081 125.028 68.774 125.028 70.7266 126.981C72.6792 128.933 72.6792 132.099 70.7266 134.052L55.7807 148.997C53.8281 150.95 50.6623 150.95 48.7097 148.997C46.757 147.045 46.757 143.879 48.7097 141.926Z"
                fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="29.1044" y1="30.1044" x2="29.1044" y2="169" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFCC9" />
                  <stop offset="1" stopColor="#FFF799" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className={'temperature__text'}>{weather.temperature}°</h2>
          </div>

          <p className={'temperature__description'}>{weatherConditions}</p>
        </section>

        <div style={{ height: 150 }}></div>

        <footer className={'footer'}>
          <div className={'footer__content'}>
            {footerData.map((item, index) => (
              <div className={'footer__item'} key={index}>
                <h6 className={'footer_title'}>{item.title}</h6>
                <p className={'footer_description'}>{item.description}</p>
              </div>
            ))}
          </div>
        </footer>

      </div>
    </main>
  );
};

export default Weather;
