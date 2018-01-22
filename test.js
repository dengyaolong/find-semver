const test = require('ava')
const findSemver = require('./index.js')
const versions = [
    '5.5.0', '5.5.1', '5.8.0', '6.0.0', 
    '0.0.1', '0.0.2', '0.1.0',
    '0.1.0', '0.1.1', '0.2.0'
]

test('use ~ | specify patch', t => {
    t.is(findSemver('~5.5.0', versions), '5.5.1')
});

test('use ~ | specify minor', t => {
    t.is(findSemver('~5.5', versions), '5.5.1')
});

test('use ~ | specify major', t => {
    t.is(findSemver('~5', versions), '5.8.0')
});

test('use ^ | major > 0', t => {
    t.is(findSemver('^5.5.0', versions), '5.8.0')
});

test('use ^ | major is 0', t => {
    t.is(findSemver('^0.1.0', versions), '0.1.1')
});

test('use ^ | minor is 0', t => {
    t.is(findSemver('^0.0.1', versions), '0.0.1')
});

test('use normal', t => {
    t.is(findSemver('5.5.0', versions), '5.5.0')
});
