/**
 * Утилиты для работы со строками
 */
const stringUtils = {
  /**
   * Переворачивает строку
   * @param {string} str - Входная строка
   * @returns {string} Перевернутая строка
   */
  reverse: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
  },

  /**
   * Проверяет, является ли строка палиндромом
   * @param {string} str - Входная строка
   * @returns {boolean} true если палиндром
   */
  isPalindrome: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleaned === stringUtils.reverse(cleaned);
  },

  /**
   * Подсчитывает количество слов в строке
   * @param {string} str - Входная строка
   * @returns {number} Количество слов
   */
  countWords: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
  }
};

module.exports = stringUtils;
