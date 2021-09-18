import React from 'react';
import requestWeather from '../../Api/WeatherApi';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { cities } from './DataWeather';

interface ISearchInput {
  placeholder: string;
  name?: string;
  id?: string;
}

const SearchInput: React.FC<ISearchInput> = ({ placeholder, name, id }) => {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [dataList, setDataList] = React.useState<Array<string>>([]);
  const [active, setActive] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = event.target.value;
    setValue(current)
    // setDataList(cities.filter((item) => item.indexOf(current) > -1));
    setOpen(true);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = { city: dataList.length <= 1 ? dataList[0] : dataList[active] }
    dispatch(requestWeather(result))
    setValue('');
    setOpen(false);
  };

  React.useEffect(() => {
    const result = cities.filter((item) =>
      item.includes(value)
    );
    setDataList(result);
  }, [value])

  return (
    <form onSubmit={handleSubmit}>
      <div className={'search-form'}>
        <input className={'search-form__input'}
          value={value}
          onChange={handleChange}
          name={name}
          id={id}
          type="text"
          placeholder={placeholder}
        />
      </div>
      {open && value ? (
        <div className={'select'}>
          {dataList.map((item, index) => (
            <button key={index} onClick={() => setActive(index)}
              type="submit"
              className={'select__item select__item-active'}
            >
              {item}
            </button>
          ))}
        </div>
      ) : ''}
    </form>
  );
};

export default SearchInput;
