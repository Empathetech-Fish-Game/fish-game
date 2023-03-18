import LowPolyFish from './LowPolyFish';

const LowPolyFishes = ({ num }) => {
  return (
    <>
      {new Array(num).fill(0).map((el, ind) => {
        let curr = ind % 7;
        return (
          <LowPolyFish
            index={curr}
            key={ind}
          />
        );
      })}
    </>
  );
};

export default LowPolyFishes;