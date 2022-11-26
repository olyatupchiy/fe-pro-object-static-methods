/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
  let array = [];
  for (let key in object) {
    array.push(key)
  }
  return array;
};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
  let arrayValues = [];
  for (let value in object) {
    arrayValues.push(object[value])
  }
  return arrayValues;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
  let entries = [];
  for (let key in object) {
    let newEntry = [key, object[key]];
    entries.push(newEntry);
  }
  return entries;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
  let object = {};
  for (let key of entries) {
    object[key[0]] = key[1];
  }
  return object;
};