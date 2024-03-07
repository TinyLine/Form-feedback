const formStorage = {
    data: {
      name: '',
      email: '',
      message: ''
    },
    updateData(key, value) {
      this.data[key] = value;
    },
    getData() {
      return { ...this.data };
    },
    resetData() {
      this.data = {
        name: '',
        email: '',
        message: ''
      };
    }
  };
  
  export default formStorage;