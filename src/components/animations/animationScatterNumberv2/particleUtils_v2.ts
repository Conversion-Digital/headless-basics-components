export interface Particle {
    // We’ll store everything we need to animate in one place
    fromX: number;
    fromY: number;
  
    midX: number;   // The random "bounce out" position
    midY: number;
  
    toX: number;
    toY: number;
  
    // Optionally, store alpha if you want to fade in/out
    alpha: number;
  }
  
  function easeOutQuad(u: number): number {
    return 1 - (1 - u) * (1 - u);
  }
  
  function easeInQuad(u: number): number {
    return u * u;
  }
  
  /**
   * Piecewise:
   *  - 0 ≤ t < 0.5 => move from (fromX, fromY) to (midX, midY) with easeOut
   *  - 0.5 ≤ t ≤ 1 => move from (midX, midY) to (toX, toY) with easeIn
   */
  function getPosition(p: Particle, t: number) {
    if (t < 0.5) {
      const u = t / 0.5; // 0..1
      const eased = easeOutQuad(u);
      const x = p.fromX + (p.midX - p.fromX) * eased;
      const y = p.fromY + (p.midY - p.fromY) * eased;
      return { x, y };
    } else {
      const u = (t - 0.5) / 0.5; // 0..1
      const eased = easeInQuad(u);
      const x = p.midX + (p.toX - p.midX) * eased;
      const y = p.midY + (p.toY - p.midY) * eased;
      return { x, y };
    }
  }
  
  /**
   * Draw all particles at the correct position for time t in [0..1].
   */
  export function drawTweenedParticles(
    ctx: CanvasRenderingContext2D,
    particles: Particle[],
    t: number
  ) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (const p of particles) {
      const { x, y } = getPosition(p, t);
      ctx.fillRect(x, y, 2, 2);
    }
  }
  
  function getPixelPositions(
    ctx: CanvasRenderingContext2D,
    num: number,
    centerX: number,
    centerY: number,
    sampleSize = 100
  ): { x: number; y: number }[] {
    // Clear & draw the number to measure its pixels
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillText(num.toString(), centerX, centerY);
  
    const half = sampleSize / 2;
    const imageData = ctx.getImageData(
      centerX - half,
      centerY - half,
      sampleSize,
      sampleSize
    );
  
    const positions: { x: number; y: number }[] = [];
    for (let i = 0; i < sampleSize; i++) {
      for (let j = 0; j < sampleSize; j++) {
        const idx = (j * sampleSize + i) * 4;
        // If pixel is not transparent, we keep it
        if (imageData.data[idx + 3] > 0) {
          positions.push({
            x: centerX - half + i,
            y: centerY - half + j,
          });
        }
      }
    }
    return positions;
  }
  
  /**
   * Build a matching array of `Particle` objects so that:
   *  - `particle[i].fromX, fromY` = pixel i from "fromNum" shape
   *  - `particle[i].toX, toY` = pixel i from "toNum" shape
   *  - `particle[i].midX, midY` = a random offset from the “from” position
   */
  function buildParticles(
    fromPositions: { x: number; y: number }[],
    toPositions: { x: number; y: number }[],
    totalCount = 1200, // total # of particles you want
    scatterRadius = 80 // how far out they “bounce”
  ): Particle[] {
    // Step 1: Make sure each array has at least totalCount pixels by duplicating
    while (fromPositions.length < totalCount) {
      fromPositions = fromPositions.concat(fromPositions.slice(0, totalCount - fromPositions.length));
    }
    while (toPositions.length < totalCount) {
      toPositions = toPositions.concat(toPositions.slice(0, totalCount - toPositions.length));
    }
    // Step 2: Trim each
    fromPositions.length = totalCount;
    toPositions.length = totalCount;
  
    // Step 3: Create the array
    const particles: Particle[] = [];
    for (let i = 0; i < totalCount; i++) {
      const fx = fromPositions[i].x;
      const fy = fromPositions[i].y;
      const tx = toPositions[i].x;
      const ty = toPositions[i].y;
  
      // Generate a random midpoint around the "from" position
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scatterRadius;
      const mx = fx + Math.cos(angle) * r;
      const my = fy + Math.sin(angle) * r;
  
      particles.push({
        fromX: fx,
        fromY: fy,
        midX: mx,
        midY: my,
        toX: tx,
        toY: ty,
        alpha: 1,
      });
    }
  
    return particles;
  }
  
  /**
   * Main function: build the scattering tween
   */
  export function animateNumberChange(
    ctx: CanvasRenderingContext2D,
    fromNum: number,
    toNum: number,
    centerX: number,
    centerY: number,
    duration = 2000 // ms
  ) {
    // 1) Get "pixel positions" for fromNum & toNum
    const fromPositions = getPixelPositions(ctx, fromNum, centerX, centerY);
    const toPositions = getPixelPositions(ctx, toNum, centerX, centerY);
  
    // 2) Build the particle array with random "mid" positions
    const particles = buildParticles(fromPositions, toPositions, 1200, 80);
  
    let startTime: number | null = null;
  
    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1); // 0..1
  
      // Draw the tweened positions at time t
      drawTweenedParticles(ctx, particles, t);
  
      if (t < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    // Start the animation
    requestAnimationFrame(animate);
  }
  