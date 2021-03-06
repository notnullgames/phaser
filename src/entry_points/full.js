/**
 * Entry-point for the full phaser, including shaders, physics, etc
 * Use this as an example, and fine-tune to what you actually need in your own project
 * change '../' to 'phaser/src/' in your own stuff
 * manifests/phaser.json
 */

module.exports = require('../Phaser.js');

require('../utils/Utils.js');

require('../geom/Circle.js');
require('../geom/Point.js');
require('../geom/Rectangle.js');
require('../geom/Line.js');
require('../geom/Ellipse.js');
require('../geom/Polygon.js');

require('../core/Camera.js');
require('../core/State.js');
require('../core/StateManager.js');
require('../core/Signal.js');
require('../core/SignalBinding.js');
require('../core/Filter.js');
require('../core/Plugin.js');
require('../core/PluginManager.js');
require('../core/Stage.js');
require('../core/Group.js');
require('../core/World.js');
require('../core/FlexGrid.js');
require('../core/FlexLayer.js');
require('../core/ScaleManager.js');
require('../core/Game.js');

require('../input/Input.js');
require('../input/Key.js');
require('../input/Keyboard.js');
require('../input/Mouse.js');
require('../input/MSPointer.js');
require('../input/Pointer.js');
require('../input/Touch.js');
require('../input/Gamepad.js');
require('../input/SinglePad.js');
require('../input/GamepadButton.js');
require('../input/InputHandler.js');

require('../gameobjects/Events.js');
require('../gameobjects/GameObjectFactory.js');
require('../gameobjects/GameObjectCreator.js');
require('../gameobjects/BitmapData.js');
require('../gameobjects/Sprite.js');
require('../gameobjects/Image.js');
require('../gameobjects/TileSprite.js');
require('../gameobjects/Rope.js');
require('../gameobjects/Text.js');
require('../gameobjects/BitmapText.js');
require('../gameobjects/Button.js');
require('../gameobjects/Graphics.js');
require('../gameobjects/RenderTexture.js');
require('../gameobjects/SpriteBatch.js');
require('../gameobjects/RetroFont.js');
require('../gameobjects/Particle.js');

require('../system/Device.js');
require('../system/DOM.js');
require('../system/Canvas.js');
require('../system/RequestAnimationFrame.js');

require('../math/Math.js');
require('../math/RandomDataGenerator.js');
require('../math/QuadTree.js');

require('../net/Net.js');

require('../tween/TweenManager.js');
require('../tween/Tween.js');
require('../tween/TweenData.js');
require('../tween/Easing.js');

require('../time/Time.js');
require('../time/Timer.js');
require('../time/TimerEvent.js');

require('../animation/AnimationManager.js');
require('../animation/Animation.js');
require('../animation/Frame.js');
require('../animation/FrameData.js');
require('../animation/AnimationParser.js');

require('../loader/Cache.js');
require('../loader/Loader.js');
require('../loader/LoaderParser.js');

require('../sound/AudioSprite.js');
require('../sound/Sound.js');
require('../sound/SoundManager.js');

require('../utils/ArraySet.js');
require('../utils/LinkedList.js');
require('../utils/ArrayUtils.js');
require('../utils/Debug.js');
require('../utils/Color.js');

require('../physics/Physics.js');
require('../physics/arcade/World.js');
require('../physics/arcade/Body.js');

require('../particles/Particles.js');
require('../particles/arcade/ArcadeParticles.js');
require('../particles/arcade/Emitter.js');

require('../tilemap/Tile.js');
require('../tilemap/Tilemap.js');
require('../tilemap/TilemapLayer.js');
require('../tilemap/TilemapParser.js');
require('../tilemap/Tileset.js');

require('../filters/BinarySerpents.js');
require('../filters/BlurX.js');
require('../filters/BlurY.js');
require('../filters/CausticLight.js');
require('../filters/CheckerWave.js');
require('../filters/ColorBars.js');
require('../filters/Fire.js');
require('../filters/Gray.js');
require('../filters/HueRotate.js');
require('../filters/LazerBeam.js');
require('../filters/LightBeam.js');
require('../filters/Marble.js');
require('../filters/Pixelate.js');
require('../filters/Plasma.js');
require('../filters/SampleFilter.js');
require('../filters/Tunnel.js');
