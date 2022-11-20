import { entries, fromEntries, keys, values } from './index.js';

console.log(keys({ name: 'name', value: 'value' })); // => ['name', 'value'];

console.log(values({ name: 'name1', value: 'value1' })); // => ['name1', 'value1'];

console.log(entries({ name: 'name1', value: 'value1' })); // => [['name', 'name1'], ['value', 'value1']]

console.log(
  fromEntries([
    ['key', 'value'],
    ['foo', 'bar'],
  ])
);
// => { key: 'value', foo: 'bar', }
