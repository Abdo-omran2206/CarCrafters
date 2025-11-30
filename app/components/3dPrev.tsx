"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

interface ThreeDPreviewProps {
  modelPath?: string;
}

export default function ThreeDPreview({ modelPath = "" }: ThreeDPreviewProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!modelPath) return;

    const load = async () => {
      try {
        await useGLTF.preload(modelPath);
        setLoading(false);
      } catch (err) {
        console.log("Model failed to load", err);
      }
    };

    load();
  }, [modelPath]);

  return (
    <div className="relative w-full h-full z-30 flex bg-gradient-to-r from-gray-900 to-gray-800 items-center justify-center">

      {/* Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      )}

      <Canvas camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {!loading && (
          <Stage environment="city" intensity={0.6}>
            <Model path={modelPath} />
          </Stage>
        )}

        <OrbitControls makeDefault autoRotate />
      </Canvas>
    </div>
  );
}
