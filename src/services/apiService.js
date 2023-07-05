import { API_PATH } from './constant';

function getData(url, callback) {
    fetch(`${API_PATH}${url}`)
        .then((response) => response.json())
        .then(callback);
}

function postData(url, data, callback) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
    };
    fetch(`${API_PATH}${url}`, options)
        .then((response) => response.json())
        .then(callback)
        .catch(callback)
}

function deleteData(url, id, callback) {
    const options = {
        method: 'DELETE',
    };
    fetch(`${API_PATH}${url}/${id}`, options)
        .then((response) => response.json())
        .then(callback);
}

export { getData, postData, deleteData };
