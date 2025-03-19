import React, { useRef } from 'react';
import { animateNumberChange } from './particleUtils_v2';

interface NumberParticleEffectsProps {
  fromNum?: number;
  toNum?: number;
}

const NumberParticleEffects: React.FC<NumberParticleEffectsProps> = ({
  fromNum = 0,
  toNum = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const triggerAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make sure the font, alignment, etc. match whatever you used in getPixelPositions
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Fire off the tween-based animation
    animateNumberChange(ctx, fromNum, toNum, canvas.width / 2, canvas.height / 2, 2000);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
      <button onClick={triggerAnimation}>Trigger Animation</button>
    </div>
  );
};

export default NumberParticleEffects;
