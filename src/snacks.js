class Snacks {
  constructor(value) {
    this.value = value;
  }
  snackType(){
    if (this.value === 'donut') {
      return 4;
    }
  }
}

export { Snacks }
