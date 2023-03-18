import { Coral } from './Coral';

const Corals = ({ dimensions, num }) => {
  const [x, y, z] = dimensions;
  const colors = [
    [0, 0.7, 0.2],
    [0, 0.1, 0.08],
    [0.6, 0.3, 0.09],
    [0.05, 0.2, 0.8],
    [0.1, 0.7, 0.02],
    [0, 0.8, 0.4],
    [0.2, 0, 0.5],
  ];
  return (
    <>
      {new Array(num).fill(0).map((el, ind) => {
        let curr = ind % 7;
        return (
          <Coral
            scale={Math.random() * 0.02 + 0.01}
            position={[
              (Math.random() - 0.5) * 0.2 * x,
              -0.5 * y,
              (Math.random() - 0.5) * 0.1 * z,
            ]}
            rotation={[0, 3.141 * Math.random(), 0]}
            index={curr}
            key={ind}
            color={colors[curr]}
          />
        );
      })}
    </>
  );
};

export default Corals;