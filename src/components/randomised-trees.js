import { useGLTF } from "@react-three/drei"
import TreeGLB from "../assets/Tree.glb"
export default function RandomTrees() {
    const tree = useGLTF(TreeGLB)
    const numTrees = 10;
    const treeSize = 0.5;

    tree.scene.children.forEach((tree) => {
        tree.castShadow = true
    })
    tree.receiveShadow = true

    return (
        <>
        <mesh castShadow>
                <primitive object={tree.scene} scale={[treeSize, treeSize, treeSize]} position={[0, -1.75, 0]} />
        </mesh>
        </>
    )
}