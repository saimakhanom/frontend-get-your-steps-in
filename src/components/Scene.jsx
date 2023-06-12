import Character from "./Character";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <Character />
    </>
  );
};

export default Scene;
