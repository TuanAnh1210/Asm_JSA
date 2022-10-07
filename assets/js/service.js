function LocalStorageService() {
  return {
    get(itemName) {
      const item = localStorage.getItem(itemName);
      // const numPatt = new RegExp(/^\d+$/);
      // const jsonPatt = new RegExp(/[\[\{].*[\}\]]/);
      if (item) {
        return JSON.parse(item);
      } else {
        return null;
      }
    },

    set(itemName, item) {
      if (typeof item === "object") {
        localStorage.setItem(itemName, JSON.stringify(item));
      } else {
        localStorage.setItem(itemName, item);
      }
    },

    remove(itemName) {
      localStorage.removeItem(itemName);
    },
  };
}

var localStorageService = LocalStorageService();

export { localStorageService };
