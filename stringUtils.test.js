const stringUtils = require('./stringUtils');

describe('stringUtils', () => {
  describe('reverse()', () => {
    it('should reverse a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
      expect(stringUtils.reverse('123')).toBe('321');
    });

    it('should throw error for non-string input', () => {
      expect(() => stringUtils.reverse(123)).toThrow('Input must be a string');
      expect(() => stringUtils.reverse(null)).toThrow('Input must be a string');
    });
  });

  describe('isPalindrome()', () => {
    it('should identify palindromes', () => {
      expect(stringUtils.isPalindrome('madam')).toBe(true);
      expect(stringUtils.isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });

    it('should return false for non-palindromes', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('palindrome')).toBe(false);
    });

    it('should throw error for non-string input', () => {
      expect(() => stringUtils.isPalindrome(123)).toThrow('Input must be a string');
    });
  });

  describe('countWords()', () => {
    it('should count words correctly', () => {
      expect(stringUtils.countWords('Hello world')).toBe(2);
      expect(stringUtils.countWords('  Multiple   spaces   here  ')).toBe(3);
      expect(stringUtils.countWords('Single')).toBe(1);
    });

    it('should return 0 for empty string', () => {
      expect(stringUtils.countWords('')).toBe(0);
      expect(stringUtils.countWords('   ')).toBe(0);
    });

    it('should throw error for non-string input', () => {
      expect(() => stringUtils.countWords(123)).toThrow('Input must be a string');
    });
  });
});
