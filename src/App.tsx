
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {
  

  return (
    <>
      <Button title="yas" size="sm" startIcon={<PlusIcon/>} variant="secondary"/>
      <Button title="yas" size="sm" startIcon={<ShareIcon/>} variant="primary"/>

    </>
  )
}

export default App
