var vows = require('vows');
var assert = require('assert');
var suite = vows.describe('constructor');
var und = undefined;

require('../env');

suite.addBatch({
  'CBuffer' : {
    'topic' : function () {
      return CBuffer;
    },
    'construction' : function (CBuffer) {
      assert.isTrue((new CBuffer(1)) instanceof CBuffer);
      assert.isTrue(CBuffer(1) instanceof CBuffer);
      assert.isTrue((new CBuffer(1, 2, 3)) instanceof CBuffer);
      assert.isTrue(CBuffer(1, 2, 3) instanceof CBuffer);
      assert.isTrue(CBuffer(1).constructor === CBuffer);
    },
    'Missing argument exception': function () {
      assert.throws(function () { CBuffer(); }, Error);
      assert.throws(function () { new CBuffer(); }, Error);
    },
    'data' : function (CBuffer) {
      assert.deepEqual(CBuffer(3).data.length, 3);
      assert.deepEqual(CBuffer(1, 2, 3).data, [1, 2, 3]);
    },
    'end' : function (CBuffer) {
      assert.equal(CBuffer(3).end, 2);
      assert.equal(CBuffer(1, 2, 3).end, 2);
    },
    'length' : function (CBuffer) {
      assert.equal(CBuffer(3).length, 0);
      assert.equal(CBuffer(1, 2, 3).length, 3);
    },
    'size' : function (CBuffer) {
      assert.equal(CBuffer(3).size, 3);
      assert.equal(CBuffer(1, 2, 3).size, 3);
    },
    'start' : function (CBuffer) {
      assert.equal(CBuffer(3).start, 0);
      assert.equal(CBuffer(1, 2, 3).start, 0);
    }
  }
});

suite.export(module);
