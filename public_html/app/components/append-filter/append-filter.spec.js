;(function() {
  'use strict';

  describe('UNIT components.appendFilter filter', function() {
    var appendFilter;

    beforeEach(function() {
      module('components.appendFilter');
    });

    beforeEach(inject(function(_appendFilter_) {
      appendFilter = _appendFilter_;
    }));

    it('should output empty string without appending with bad input', function() {
      expect(appendFilter('', ' APPENDED', false)).toEqual('');
      expect(appendFilter(null, ' APPENDED', false)).toEqual('');
      expect(appendFilter(NaN, ' APPENDED', false)).toEqual('');
      expect(appendFilter(undefined, ' APPENDED', false)).toEqual('');
    });

    it('should work with false and 0', function() {
      expect(appendFilter(false, ' APPENDED', false)).toEqual('false APPENDED');
      expect(appendFilter(0, ' APPENDED', false)).toEqual('0 APPENDED');
    });

    it('should not append with bad input', function() {
      expect(appendFilter('String', '', false)).toEqual('String');
      expect(appendFilter('String', null, false)).toEqual('String');
      expect(appendFilter('String', NaN, false)).toEqual('String');
      expect(appendFilter('String', undefined, false)).toEqual('String');
    });

    it('should append false and 0', function() {
      expect(appendFilter('String', false, false)).toEqual('Stringfalse');
      expect(appendFilter('String', 0, false)).toEqual('String0');
    });

    it('should not append if unless is true', function() {
      expect(appendFilter('String', ' APPEND', true)).toEqual('String');
    });
  });

})();
