import App from 'hyper-app'
import css from './index.css'
import Hello from 'component/Hello'

const app = new App()

app.mixin({}, css)

export default app.render(() => {
  return (
    <div>
      <div clazz='title'>Hello World !</div>
      <Hello />
    </div>
  )
})
