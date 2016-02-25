
export function toStyle(obj) {
    let result = '';
    let key;
    let value;
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        key = keys[i]
        value = obj[key];

        key = key.replace(/[A-Z]/, function (word) {
          return '-' + word.toLowerCase();
        });


        if (typeof value === 'number') {
            value = value + 'px';
        }

        result += `${key}: ${value};`
        if (['transform'].indexOf(key) != -1) {
          result += `-webkit-${key}: ${value};`
          result += `-moz-${key}: ${value};`
          result += `-ms-${key}: ${value};`
        }

    }

    return result;
}
