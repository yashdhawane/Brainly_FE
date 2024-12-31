
import '../App.css'
import { Button } from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import CreateModel from '../components/ui/CreateModel'
import { useState } from 'react'
import Sidebar from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import Sharemodel from '../components/ui/Sharemodel'

function Dashboard() {
  const[model,setModel]=useState(false)
  const [shareableLink, setShareableLink] = useState(false)
  const [filter, setFilter] = useState<string | null>(null);
  const {contents,deleteContent} = useContent();
  console.log(contents)

  const filteredContents = filter 
  //@ts-ignore
  ? contents.filter(content => content.type === filter)
  : contents;


  const handledelete=async(_id:any)=>{
    try{
     if(await deleteContent(_id)){
        console.log("deleted")
     }
    }catch(e){
      console.log(e)
    }
  }

  


  return (
    <>
  <Sidebar onFilterChange={setFilter}/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateModel open={model} onClose={()=>{
        setModel(false);
      }}/>
      <Sharemodel open={shareableLink} onClose={()=>{
        setShareableLink(false);
      }}/>

     <div className='flex justify-end gap-4'>
      <Button onClick={()=>{
        setModel(true)
      }} title="Create" size="md" startIcon={<PlusIcon/>} variant="secondary"/>
      <Button onClick={()=>{
        setShareableLink(true)
      }} title="Share" size="md" startIcon={<ShareIcon/>} variant="primary"/>
     </div>

     <div className="flex gap-4 flex-wrap">
        {filteredContents.map(({type, link, title,_id}) => <Card 
            type={type}
            link={link}
            title={title}
            ondelete={()=>{handledelete(_id)}}
        />)}
      </div>
    </div>
    </>
  )
}

export default Dashboard
