var assert = require('assert');
var RE2JS = require('../index.cjs').RE2JS;

describe('re2js', function() {
  it('should work', function() {
    var p = RE2JS.compile('abc', RE2JS.CASE_INSENSITIVE | RE2JS.MULTILINE);
    assert.equal(p.pattern(), 'abc');
    assert.equal(p.flags(), 5);
    assert.ok(RE2JS.matches('ab+c', 'abbbc'));
    assert.ok(!RE2JS.matches('ab+c', 'cbbba'));
  });
});
