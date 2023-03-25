class HandleModal {
  constructor() {
    this.closeCallback = null;
    this.modalElement = null;
  }
  setCloseCallback(callback) {this.closeCallback = callback;}
  setModalElement(element) {this.modalElement = element;}
  getCloseCallback() {return this.closeCallback;}
  getModalElement() {return this.modalElement;}
}

export default HandleModal;