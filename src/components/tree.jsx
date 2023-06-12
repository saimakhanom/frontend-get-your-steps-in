import { useGLTF } from "@react-three/drei";
import TreeGLB from "../assets/Tree.glb";
import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tree({ treePosition, treeSize }) {
    const { scene } = useLoader(GLTFLoader, TreeGLB)
    const copiedScene = useMemo(() => scene.clone(), [scene])

  return (
    <>
      <mesh castShadow>
        <primitive
          object={copiedScene}
          scale={[treeSize, treeSize, treeSize]}
          position={treePosition}
        />
      </mesh>
    </>
  );
}
