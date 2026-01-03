/*
A compact object is the same as the original object, except with keys containing falsy values removed. 
This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false.
*/
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const removeFalsyValue = (obj: Obj): Obj => {
    if(Array.isArray(obj)) {
        return obj.map((value) => {
           if(typeof(value) === 'object' && value !== null) {
                return removeFalsyValue(value);
            } else {
                return value;
            }
        }).filter(value => value);
    } else if(typeof(obj) === 'object') {
        for(const key in obj) {
            if(typeof(obj[key]) === 'object') {
                obj[key] =  removeFalsyValue(obj[key]);
            }
            if(!obj[key]) {
                delete obj[key]
            }
        }
        return obj;
    }
    return obj
}

function compactObject(obj: Obj): Obj {
    return removeFalsyValue(obj);
};
