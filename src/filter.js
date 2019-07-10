'use strict';

/**
 * Filter out a key from a given object
 * @param {String|number} key The key that we want to remove from the object
 * @param {Object|undefined} rest The object
 * @return {*}
 */
const filter = (key, { [key]: _, ...rest }) => {
  return rest;
};

/**
 * Should filter out list of keys from the payload
 * @param {Object|undefined} payload JSON object that we want to filter out
 * @param {Array<Number|String>|Number|String} keys A list of keys that we want to filter out
 */
const omit = (payload = {}, keys = []) => {
  if (!payload) {
    return payload;
  }
  // if there is no more keys
  if (!keys || (Array.isArray(keys) && keys.length < 1)) {
    return payload;
  }
  // if this is not an array then make it as a array
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  const curKey = keys.shift();
  const rest = filter(curKey, payload);
  return omit(rest, keys);
};

/**
 * Should only pick given list of keys from the object
 * @param {Object|undefined} payload JSON object that we want to filter out
 * @param {Array<Number|String>|Number|String} keys A list of keys that we want to filter out
 */
const pick = (payload = {}, keys = []) => {
  if (!payload) {
    return payload;
  }
  // if there is no more keys
  if (!keys || (Array.isArray(keys) && keys.length < 1)) {
    return payload;
  }
  // if this is not an array then make it as a array
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  const toOmit = Object.keys(payload).filter(item => !keys.includes(item));
  return omit(payload, toOmit);
};

module.exports = {
  pick,
  omit
};
