import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
import { inSphere } from "maath/random";

const StarBackground = (props) => {
    const ref = useRef();
    
    const [sphere] = useState(() =>
        // random.inSphere(new Float32Array(5000), { radius: 1.2 })
        inSphere(new Float32Array(5000 * 1.2), { radius: 1.2 })

    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    if (!sphere) return null;

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} dethWrite={false} />
            </Points>
        </group>
    );
};


const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
                {/* <Preload all /> */}
            </Suspense>
        </Canvas>
    </div>

)
export default StarsCanvas;
