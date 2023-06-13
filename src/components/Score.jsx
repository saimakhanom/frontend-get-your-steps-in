import { Text, Html } from "@react-three/drei";
import textFont from "../assets/font.woff";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Score() {
    const [score, setScore]= useState(0)

    useFrame((state)=>{
        const timePassed= state.clock.elapsedTime
        Math.floor(timePassed)
        setScore(Math.floor(timePassed))
        // console.log(Math.floor(timePassed*100))
    })

  return (
    <>
      <Text font={textFont} color="tomato" position={[-18, 5.5, -10]}>
        {" "}
        Step Count  {score}
      </Text>
      {/* <mesh position={[-8, 5.8, -10]}>
        <Html center>
          <h2>Score:</h2>
        </Html>
      </mesh> */}
    </>
  );
}

export default Score;

// speed of score increase
// linking speed to the steps (decide rate)
// score isn't fixed on screen

//use set interval