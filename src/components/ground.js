export default function Ground() {
    return (
        <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}>
            <planeGeometry args={[1000, 1000]}/>
            <meshStandardMaterial color="green"/>
        </mesh>
    )
}