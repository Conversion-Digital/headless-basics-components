interface Particle {
    x: number; // The x-coordinate of the particle
    y: number; // The y-coordinate of the particle
    vx: number; // The horizontal velocity of the particle
    vy: number; // The vertical velocity of the particle
    alpha: number; // The transparency of the particle
}

function scatterParticles(particles: Particle[], centerX: number, centerY: number): void {
    particles.forEach(particle => {
        particle.vx += (Math.random() - 0.5) * 0.1; // Random scatter
        particle.vy += (Math.random() - 0.5) * 0.1; // Random scatter
        particle.x += particle.vx; // Apply velocity
        particle.y += particle.vy; // Apply velocity
        const distance = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2));
        particle.alpha = Math.min(1, 10/distance); // Increase transparency based on distance
    });
}

function reassembleParticles(particles: Particle[], targetParticles: Particle[], centerX: number, centerY: number): void {
    particles.forEach((particle, index) => {
        const target = targetParticles[index];
        if (Math.abs(target.x - particle.x) < 1 && Math.abs(target.y - particle.y) < 1) {
            particle.vx = 0; // Stop horizontal movement
            particle.vy = 0; // Stop vertical movement
        } else {
            particle.vx += (target.x - particle.x) * 0.02; // Slow down movement towards target
            particle.vy += (target.y - particle.y) * 0.02; // Slow down movement towards target
        }
        particle.x += particle.vx; // Apply velocity
        particle.y += particle.vy; // Apply velocity
        const distance = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2));
        particle.alpha = Math.min(1, 10/distance ); // Increase transparency based on distance
    });
}

function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[]): void {
    for (const particle of particles) {
        ctx.globalAlpha = particle.alpha; // Set the transparency level for the particle
        ctx.fillRect(particle.x, particle.y, 2, 2); // Draw the particle
    }
    ctx.globalAlpha = 1; // Reset the transparency level to fully opaque
}

function getPixelData(ctx: CanvasRenderingContext2D, num: number, x: number, y: number): Particle[] {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    ctx.fillText(num.toString(), x, y); // Draw the number
    const imageData = ctx.getImageData(x - 50, y - 50, 100, 100); // Get pixel data from the specified area
    const particles: Particle[] = [];
    for (let i = 0; i < imageData.width; i++) {
        for (let j = 0; j < imageData.height; j++) {
            const index = (j * imageData.width + i) * 4;
            if (imageData.data[index + 3] > 0) { // Check alpha value
                particles.push({
                    x: x - 50 + i, // Ensure x is within canvas range
                    y: y - 50 + j, // Ensure y is within canvas range
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    alpha: 1
                });
            }
        }
    }
    while (particles.length < 2000) {
        particles.push(...particles.slice(0, imageData.data.length)); // Duplicate the first particle
    }
    particles.length = 2000; // Ensure the array length is exactly 2000
    //console.log(`Number of particles: ${particles.length}`);
    return particles;
}

export function animateNumberChange(ctx: CanvasRenderingContext2D, fromNum: number, toNum: number, x: number, y: number): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
    let particles = getPixelData(ctx, fromNum, x, y);
    const targetParticles = getPixelData(ctx, toNum, x, y);
    console.log(`particles.length: ${particles.length}, targetParticles.length: ${targetParticles.length}`); 
    // Scatter particles
    let scatter = true;
    const scatterStartTime = Date.now();
    const scatterInterval = setInterval(() => {
        if (scatter) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
            scatterParticles(particles, x, y); // Update particle positions
            drawParticles(ctx, particles); // Draw particles
            console.log('scattering particles...');
        }
        if (particles.every(particle => Math.abs(particle.vx) < 0.1 && Math.abs(particle.vy) < 0.1) || Date.now() - scatterStartTime > 10000) { // If all particles stop scattering or time exceeds 10 seconds
            clearInterval(scatterInterval); // Clear scatter animation interval
            scatter = false; // Stop scattering
            console.log('Particles scattered. Reassembling...');
            const reassembledStartTime = Date.now(); // Reset scatter time
            const reassembleInterval = setInterval(() => {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
                reassembleParticles(particles, targetParticles, x, y); // Update particle positions
                drawParticles(ctx, particles); // Draw particles
                if (Date.now() - reassembledStartTime > 10000 || particles.every((particle, index) => {
                    const target = targetParticles[index];
                    return Math.abs(target.x - particle.x) < 1 && Math.abs(target.y - particle.y) < 1;
                })) { // If all particles are close to target positions
                    clearInterval(reassembleInterval); // Clear reassemble animation interval
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
                    drawParticles(ctx, targetParticles); // Draw target number
                    console.log('Particles reassembled.');
                }
            }, 100); // Update interval to 100 milliseconds (0.1 second)
        }
    }, 100); // Update interval to 100 milliseconds (0.1 second)
}
