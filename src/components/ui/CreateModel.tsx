
import { useRef, useState } from 'react';
import CrossIcon from '../../Icons/CrossIcon'
import { Button } from './Button'
import { Input } from './Input'
import axios from 'axios';
import { BACKEND_URL } from '../../config';

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}


function CreateModel({open,onClose}:any){
  const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

  async function addcontent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
        link,
        title,
        type
    }, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })

    onClose();

  }
  return (
    <>
    {open && 
        <div>
<div className='w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-90 flex justify-center'>
</div>
       
      <div className='w-screen h-screen  fixed top-0 left-0 flex justify-center'>
        <div className="flex flex-col justify-center">
          <span className='bg-white opacity-100 p-4 rounded'>
            <div className="flex justify-end">
              <div onClick={onClose} className='cursor-pointer'>

              <CrossIcon/>
              </div>
            </div>
            <div>
            <Input reference={titleRef} placeholder={"Title"} />
            <Input reference={linkRef} placeholder={"Link"} /> 
            </div>
            <div>
                <h1>Type</h1>
                <div className="flex gap-1 justify-center pb-2">
                    <Button size="md" title="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                        setType(ContentType.Youtube)
                     }}></Button>
                    <Button size="md" title="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                         setType(ContentType.Twitter)
                     }}></Button>
                  </div>
                </div>
            <div className="mt-2 flex justify-center">
                <Button  onClick={addcontent} variant='primary' title="submit" size="md"></Button>
            </div>
          

          </span>
        </div>
      </div>
      </div>
    }
    </>
  )
}


export default CreateModel