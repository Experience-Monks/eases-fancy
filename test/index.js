var test = require('tape');
var stepped = require('./stepped');
var bezier = require('./bezier');
var points = require('./points');
var pointsRandom = require('./points-random');
var quantize = require('./quantize');

test('stepped', stepped);
test('bezier', bezier);
test('points', points);
test('pointsRandom', pointsRandom);
test('quantize', quantize);
