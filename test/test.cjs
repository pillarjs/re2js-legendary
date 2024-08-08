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

  it('should work with regexp', function() {
    var re = /yee/;
    var p = RE2JS.compile(re.source);
    assert.ok(p.matches('yee'));
  });

  it('should work with flags', function() {
    var re = /yee/i;
    var flags = re.flags.indexOf('i') >= 0 ? RE2JS.CASE_INSENSITIVE : null;
    var p = RE2JS.compile(re.source, flags);
    assert.ok(p.matches('yee'));
    assert.ok(p.matches('YEE'));
  });
});
