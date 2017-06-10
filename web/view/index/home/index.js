import App from 'hyper-app'
import css from './index.css'
import Hello from 'component/Hello'
import { Button } from 'antd'

const app = new App()

app.mixin({}, css)

export default app.render(() => {
  return (
    <div>
      <Hello />
      <p clazz='title'>Hello World !</p>
      <div><Button type='primary'>Primary</Button> <Button>Normal</Button></div>
    </div>
  )
})
