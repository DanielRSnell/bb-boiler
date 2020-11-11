const getTypesArray = type => [`${type}_REQUEST`, type, `${type}_FAIL`];

export function getRequest(url, type) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        url,
        withCredentials: true,
        credentials: 'same-origin',
      },
    }
  };
}

export function patchRequest(apiUrl, data = {}, type, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'patch',
        url: apiUrl,
        data,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function postRequest(apiUrl, data = {}, type, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'post',
        url: apiUrl,
        data,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function deleteRequest(apiUrl, data = {}, type, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'delete',
        url: apiUrl,
        data,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function putRequest(apiUrl, data, type, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'put',
        url: apiUrl,
        data,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function cancelablePostRequest(apiUrl, data, cancelToken, type, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'post',
        cancelToken,
        url: apiUrl,
        data,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function postRequestWithFormData(apiUrl, data, type, onUploadProgress) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'post',
        url: apiUrl,
        data: formData,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function cancelableGetRequest(url, cancelToken, type) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        url,
        cancelToken,
        withCredentials: true,
        credentials: 'same-origin',
      },
    }
  };
}

export function getRequestWithHeader(url, type, headers) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        headers,
        url,
        withCredentials: true,
        credentials: 'same-origin',
      },
    }
  };
}

export function postRequestWithHeader(apiUrl, data, type, headers, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'post',
        url: apiUrl,
        data,
        headers,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}

export function putRequestWithHeader(apiUrl, data, type, headers, onUploadProgress) {
  return {
    types: getTypesArray(type),
    payload: {
      request: {
        method: 'put',
        url: apiUrl,
        data,
        headers,
        withCredentials: true,
        credentials: 'same-origin',
        onUploadProgress: (e) => {
          if (typeof onUploadProgress === 'function') {
            onUploadProgress(e);
          }
        },
      }
    }
  };
}