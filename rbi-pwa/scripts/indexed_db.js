var db;

var request = window.indexedDB.open("images_database", 1);

request.onerror = function(event) {
    console.log("IndexedDB access error: ", event.target.error);
};

request.onsuccess = function (event) {
    db = request.result;
};

request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("images", {keyPath: "id"});
};

window.saveImage = function (id, data) {
    var transaction = db.transaction(["images"], "readwrite");
    var objectStore = transaction.objectStore("images");

    var blob = new Blob([new Uint8Array(data)], {type: "image/jpeg"});
    var request = objectStore.put({id: id, image: blob, timestamp: Date.now()});

    request.onsuccess = function (event) {
        console.log('Image saved successfully');
    };
}

window.getImage = function (id, callback) {
    try {
        var transaction = db.transaction(["images"]);
        var objectStore = transaction.objectStore("images");
        var request = objectStore.get(id);

        request.onsuccess = function (event) {
            try {
                var reader = new FileReader();
                reader.onload = function (e) {
                    callback(null, {image: reader.result, timestamp: request.result.timestamp});
                };
                reader.readAsArrayBuffer(request.result.image);
            } catch (err) {
                callback(err, null);
            }
        };
    } catch (err) {
        callback(err, null);
    }
}

window.arrayBufferToList = function (buffer) {
    return Array.from(new Uint8Array(buffer));
}