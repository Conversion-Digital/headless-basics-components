import React, { useRef } from 'react';
import { animateNumberChange } from './particleUtils';

interface NumberParticleEffectsProps {
  fromNum?: number;
  toNum?: number;
}

const NumberParticleEffects: React.FC<NumberParticleEffectsProps> = ({ fromNum = 0, toNum = 1,  }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const triggerAnimation = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.font = '100px Arial'; // Ensure the font size matches the pixel data capture
        ctx.textAlign = 'center'; // Center align the text
        ctx.textBaseline = 'middle'; // Middle align the text
        console.log('Triggering animation...');
        animateNumberChange(ctx, fromNum, toNum, canvas.width / 2, canvas.height / 2);
      }
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600}></canvas> {/* Adjusted canvas size */}
      <button onClick={triggerAnimation}>Trigger Animation</button>
    </div>
  );
};

export default NumberParticleEffects;