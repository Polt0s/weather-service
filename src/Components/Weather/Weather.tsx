import React from 'react';
import useAppSelector from '../../Hooks/useAppSelector';
import Input from './SearchInput';
import Icons from '../Icons/Icons';
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

            <div className={'header__block-counter'}>
              <div className={'counter'}>
                <span className={'counter__C'}>C</span>
                <span className={'counter__F'}>F</span>
              </div>
            </div>
          </div>
        </div>

        <section className={'temperature'}>
          <div className={'temperature__number'}>
            <Icons.Sun />
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
