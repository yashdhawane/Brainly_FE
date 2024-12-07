
import '../App.css'
import { Button } from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import CreateModel from '../components/ui/CreateModel'
import { useState } from 'react'
import Sidebar from '../components/ui/Sidebar'

function Dashboard() {
  const[model,setModel]=useState(false)
  return (
    <>
    <Sidebar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateModel open={model} onClose={()=>{
        setModel(false);
      }}/>
     <div className='flex justify-end gap-4'>

      <Button onClick={()=>{
        setModel(true)
      }} title="Create" size="md" startIcon={<PlusIcon/>} variant="secondary"/>
      <Button title="Share" size="md" startIcon={<ShareIcon/>} variant="primary"/>
     </div>
     <div className='flex  gap-4'>
      <Card type='twitter' link='https://x.com/dev_X_100/status/1863287559423693117' title="first tweet"/>
      <Card type='youtube' link='https://www.youtube.com/watch?v=6hNlpOSDr1w' title="first yt"/>

    </div>
    </div>
    </>
  )
}

export default Dashboard
