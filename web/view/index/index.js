import App from 'hyper-app'

const app = new App()

app.router([
  { path: '/', view: require('./home/index') }
])

app.run('#app')