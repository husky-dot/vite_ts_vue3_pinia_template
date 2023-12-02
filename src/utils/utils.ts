/**
 * @description 添加单位
 * @param {String | Number} value 值 100
 * @param {String} unit 单位 px em rem
 */
export const addUnit = (value: string | number, unit = 'px') => {
  return !Object.is(Number(value), NaN) ? `${value}${unit}` : value
}
