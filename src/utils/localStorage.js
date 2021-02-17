
class HandleStorage {
    constructor(items) {
        this.items = items;
        this.data = null;
    }

    getStorage(items) {
        return JSON.parse(localStorage.getItem(this.items))
    }

    updateStorage(items, data) {
        return localStorage.setItem(this.items, JSON.stringify(data))
    }
}

export default HandleStorage;