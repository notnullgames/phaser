/**
 * Entry-point for the full phaser, including shaders, particles, & physics
 * Use this as an example, and fine-tune to what you actually need in your own project
 */

module.exports = require('./minimal.js');

require('../particles/Particles.js');
require('../particles/arcade/ArcadeParticles.js');
require('../particles/arcade/Emitter.js');

require('../physics/Physics.js');

require('../../filters/BinarySerpents.js');
require('../../filters/BlurX.js');
require('../../filters/BlurY.js');
require('../../filters/CausticLight.js');
require('../../filters/CheckerWave.js');
require('../../filters/ColorBars.js');
require('../../filters/Fire.js');
require('../../filters/Gray.js');
require('../../filters/HueRotate.js');
require('../../filters/LazerBeam.js');
require('../../filters/LightBeam.js');
require('../../filters/Marble.js');
require('../../filters/Pixelate.js');
require('../../filters/Plasma.js');
require('../../filters/SampleFilter.js');
require('../../filters/Tunnel.js');