/**
 *  * Asserts if the environment is in `dev` mode
 *
 * @returns {boolean} `true` | `false`
 */
export const __DEV__ = process.env.NODE_ENV !== 'production';

/**
 * Asserts if the value passed is `null`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isNull(value: any): value is null {
  return value == null;
}

/**
 * Asserts if the value passed is `undefined`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined' || value === undefined;
}

/**
 * Asserts if the value passed is `defined`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isDefined(value: any): boolean {
  return typeof value !== 'undefined' && value !== undefined;
}

/**
 * Asserts if the value passed is a `string`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isString(value: any): value is string {
  return (
    typeof value === 'string' &&
    Object.prototype.toString.call(value) === '[object String]'
  );
}

/**
 * Asserts if the value passed is a `number`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

/**
 * Asserts if the value passed is an `array`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

/**
 * Asserts if the value passed is a `function`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * Asserts if the value passed is an `object`
 *
 * @param value {*} Value to be asserted
 *
 * @returns {boolean} `true` | `false`
 */
export function isObject(value: any): value is Record<string, unknown> {
  return (
    !isNull(value) &&
    (typeof value === 'object' || isFunction(value)) &&
    !isArray(value)
  );
}
