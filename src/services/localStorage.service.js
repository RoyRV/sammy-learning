const setKey = (key, value) => {
    localStorage.setItem(key, value);
}

const getKey = (key) => {
    let item = localStorage.getItem(key);
    if (item)
        return item;
    return null;
}

const setObject = (key, object) => {
    let stringObj = JSON.stringify(object);
    setKey(key, stringObj);
}


const getObject = (key) => {
    let item = localStorage.getItem(key);
    if (item) {
        let object = JSON.parse(item);
        return object;
    }
    return null;
}


export const localStorageService = {
    setKey,
    getKey,
    setObject,
    getObject
}