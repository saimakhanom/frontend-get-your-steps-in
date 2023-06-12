import { useGLTF } from "@react-three/drei"
import TreeGLB from "../assets/Tree.glb"
export default function RandomTrees() {
    const tree = useGLTF(TreeGLB)
    // const numTrees = 10;
    const treeSize = 0.8;

    return (
        <>
        <mesh castShadow>
                <primitive object={tree.scene} scale={[treeSize, treeSize, treeSize]} position={[20, -1.75, -40]} />
        </mesh>
        </>
    )
}