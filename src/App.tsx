
import './App.css'
import { Button } from './components/ui/Button'
import Card from './components/ui/Card'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {
  

  return (
    <>
    <div className="p-4">
     <div className='flex justify-end gap-4'>

      <Button title="yas" size="md" startIcon={<PlusIcon/>} variant="secondary"/>
      <Button title="yas" size="md" startIcon={<ShareIcon/>} variant="primary"/>
     </div>
     <div className='flex  gap-4'>
      <Card type='twitter' link='https://x.com/dev_X_100/status/1863287559423693117' title="first tweet"/>
      <Card type='youtube' link='https://www.youtube.com/watch?v=6hNlpOSDr1w' title="first yt"/>

    </div>
    </div>
    </>
  )
}

export default App
