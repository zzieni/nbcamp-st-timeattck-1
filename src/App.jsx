import { useState } from 'react';
import './App.css';

function App() {
  const [medalList, setMedalList] = useState([]);
  const [country, setCountry] = useState('');
  const [glodCount, setGlodCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  // const inpuReset = () => {
  //   setCountry('');
  //   setGlodCount(0);
  //   setMedalList(0);
  //   setBronzeCount(0);
  // };

  const hadlerAddBtn = (e) => {
    e.preventDefault();

    const newAddData = {
      country: country,
      gold: glodCount,
      silver: silverCount,
      bronze: bronzeCount,
    };
    setMedalList([...medalList, newAddData]);
    console.log(medalList);
    // inpuReset();
  };

  const handlerUpdateBtn = () => {
    const countryNm = medalList.find((countryName) => {
      console.log('country', country);
      console.log('countryName.country', countryName.country);
      return countryName.country === country;
    });
    console.log('countryNm', countryNm);

    if (countryNm) {
      const newUpdateMedalList = medalList.map((medal) => {
        console.log('medal', medal);
        if (medal.country === country) {
          const newUpdateMedal = {
            country: country,
            gold: glodCount,
            silver: silverCount,
            bronze: bronzeCount,
          };
          return newUpdateMedal;
        } else {
          return medal;
        }
      });
      setMedalList(newUpdateMedalList);
    }

    // alert('국가을 추가 해주세요');
  };

  const hadlerDelBtn = (country) => {
    console.log('hadlerDelBtn', country);
    const delectMedalData = medalList.filter((el) => {
      console.log('country', country);
      return el.country !== country;
    });

    console.log(delectMedalData);
    setMedalList(delectMedalData);
  };

  return (
    <>
      <form onSubmit={hadlerAddBtn}>
        <div>
          <label>국가이름</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label>금메달</label>
          <input
            type="number"
            value={glodCount}
            onChange={(e) => setGlodCount(+e.target.value)}
            required
            min={'0'}
          />
        </div>
        <div>
          <label>은메달</label>
          <input
            type="number"
            value={silverCount}
            onChange={(e) => setSilverCount(+e.target.value)}
            required
            min={'0'}
          />
        </div>
        <div>
          <label>동메달</label>
          <input
            type="number"
            value={bronzeCount}
            onChange={(e) => setBronzeCount(+e.target.value)}
            required
            min={'0'}
          />
        </div>
        <div>
          <button type="submit">국가 추가하기</button>
          <button type="click" onClick={handlerUpdateBtn}>
            메달 현황 업데이트 하기
          </button>
        </div>
      </form>
      <div>
        {medalList &&
          medalList.map((item) => {
            return (
              <div key={item.country}>
                <li>국가이름 : {item.country}</li>
                <li>금메달 : {item.gold}</li>
                <li>은메달 : {item.silver}</li>
                <li>동메달 : {item.bronze}</li>
                <button onClick={() => hadlerDelBtn(item.country)}>삭제</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
