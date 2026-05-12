/**
 * Utility functions for generating stable unique IDs
 */

/**
 * Generate a stable unique ID from a string
 * @param {string} str - Input string
 * @returns {string} - Unique ID
 */
export const generateId = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

/**
 * Generate ID from object properties
 * @param {object} obj - Object with properties
 * @param {string[]} keys - Keys to use for ID generation
 * @returns {string} - Unique ID
 */
export const generateIdFromObject = (obj, keys = []) => {
  const parts = keys.map(key => obj[key]).filter(Boolean);
  return generateId(parts.join('-'));
};
