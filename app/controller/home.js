exports.index = function* () {
  yield this.run('index.ejs', {
    title: 'Hi',
    entry: 'index',
    props: {}
  })
}