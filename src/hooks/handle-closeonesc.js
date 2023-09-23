class CloseOnEscManager {
  constructor() {
    this.callback = null;
    this.reference = false;
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown(event) {
    if (this.reference && event.key === 'Escape') {
      if (this.callback) {
        this.callback();
      }
      this.forceCleanup();
    }
  }

  getIsListening() {
    return this.reference;
  }

  useCloseOnEsc(reference, callback) {
    this.reference = reference;
    this.callback = callback;

    document.addEventListener('keydown', this.handleKeydown);
  }

  forceCleanup() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
}

const closeOnEscManager = new CloseOnEscManager();

export default closeOnEscManager;
