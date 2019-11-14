class Test {
  constructor(param) {
    this.param = param
  }

  echo() {
    console.log('Hi ')
    console.log(this.param)
  }
}

const test = new Test('Josef')
setTimeout(test.echo, 100)