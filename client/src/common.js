
/** This is the common Library file which has all the global functions that are common for multiple components */
import fuzzy from 'fuzzy';


/** This takes the video id as and argument and stores in the local storage  */
export const SaveVideoToLocalStorage = function (videoId, title) {
  var obj = []
  if (videoId) {
    if (localStorage.getItem('videoIds')) {
      obj = JSON.parse(localStorage.getItem('videoIds'));
      if (!videoIdExists(obj, videoId)) {
        obj.push({ id: videoId, title: title });
        localStorage.setItem('videoIds', JSON.stringify(obj));
      }
    } else {
      obj.push({ id: videoId, title: title });
      localStorage.setItem("videoIds", JSON.stringify(obj))
    }
    return true
  } else {
    return null
  }
}

var videoIdExists = (obj, id) => obj.some((el) => el.id === id);


/** This takes the video id as and argument and delete from the local storage and return of string of comma seperated ids */
export const deleteVideoIdsFromLocalStorage = function (videoId) {
  var obj = []
  if (videoId && localStorage.getItem('videoIds')) {
    obj = JSON.parse(localStorage.getItem('videoIds'));
    obj.splice(obj.findIndex(function (i) {
      return i.id == videoId;
    }), 1);
    localStorage.setItem('videoIds', JSON.stringify(obj));
    return obj.map(a => a.id)
  } else {
    return null;
  }
}

/** This returns the all video ids stored in the local storage as a string with comma sepearted id */
export const getLocalStorageVideoIdsString = function () {
  var arr=[]
  if (localStorage.getItem('videoIds')) {
    arr = JSON.parse(localStorage.getItem('videoIds'));
    return arr.map(a => a.id);
  } else {
    return null;
  }
}


/** This returns the all video ids stored in the local storage as a string with comma sepearted id */
export const getFuzzySearchIdsString = function (title) {
  if (title) {
    var options = {
      extract: function (el) { return el.title; }
    };
    var results = fuzzy.filter(title, JSON.parse(localStorage.getItem('videoIds')), options);
    return results.map(a => a.original.id).toString();
  } else {
    return null
  }
}



