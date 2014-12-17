# phaser fork

A light & nimble modular fork of [phaser](https://github.com/photonstorm/phaser/)

![Phaser 2.0](http://www.phaser.io/images/phaser2-github.png)

## Goals

* should build easily & modularly for CommonJS systems. Browserify can export all the other modular systems, so this works well for everyone
* all dependencies tracked as external & not in this repo
* We left out documentation & shims for various systems. We want a definitive physics engine, etc. If you need other things, be sure to check out [phaser](https://github.com/photonstorm/phaser/)
* We left builds out. You should build it on your own system

## Usage

You can install like this:

    npm install -save notnullgames/phaser

You can get the whole shebang (including defaults physics libraries,) in your borwserify or webpack system like this:

and then in your client-side code:
    
    var Phaser = require('phaser');

We have put some premade CommonJS entry-points for a couple usecases in `src/entry_points`. You can require them directly, if you don't want everything:

    var Phaser = require('phaser/src/entry_points/no_physics.js');
