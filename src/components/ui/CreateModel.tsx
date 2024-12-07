
import CrossIcon from '../../Icons/CrossIcon'
import { Button } from './Button'
import { Input } from './Input'
function CreateModel({open,onClose}:any){
  return (
    <>
    {open && 
      <div className='w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center'>
        <div className="flex flex-col justify-center">
          <span className='bg-white opacity-100 p-4 rounded'>
            <div className="flex justify-end">
              <div onClick={onClose} className='cursor-pointer'>

              <CrossIcon/>
              </div>
            </div>
            <div>
              <Input placeholder="text"/>
              <Input placeholder="text"/> 
            </div>
            <div className="flex justify-center">
                <Button variant='primary' title="submit" size="md"></Button>
            </div>
          

          </span>
        </div>
      </div>
    }
    </>
  )
}


export default CreateModel