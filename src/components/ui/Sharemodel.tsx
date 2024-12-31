import axios from 'axios';
import { BACKEND_URL } from '../../config';
import CrossIcon from '../../Icons/CrossIcon';
import { Button } from './Button'
import { useState } from 'react'

interface ShareModelProps {
  open: boolean;
  onClose: () => void;
}

function ShareModel({ open, onClose }: ShareModelProps) {
  const [shareableLink, setShareableLink] = useState("");
  const [isShareable, setIsShareable] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareableLink);
      alert("Link copied!");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleToggle = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
        share: !isShareable
      }, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      });
      
      if (!isShareable) {
        // If enabling share, set the link
        const hash = response.data.hash;
        setShareableLink(`${window.location.origin}/api/v1/brain/${hash}`);
      } else {
        // If disabling share, clear the link
        setShareableLink("");
      }
      setIsShareable(!isShareable);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {open && 
        <div>
          <div className='w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-90 flex justify-center'>
          </div>
          
          <div className='w-screen h-screen fixed top-0 left-0 flex justify-center'>
            <div className="flex flex-col justify-center">
              <span className='bg-white opacity-100 p-4 rounded'>
                <div className="flex justify-end">
                  <div onClick={onClose} className='cursor-pointer'>
                    <CrossIcon/>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold">Share Your Brain</h2>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={isShareable}
                      onChange={handleToggle}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">Make Shareable</span>
                  </label>
                </div>

                {isShareable && (
                  <div className="flex gap-2 p-2">
                    <input 
                      type="text"
                      readOnly
                      value={shareableLink}
                      className="flex-1 p-2 border rounded bg-gray-50"
                    />
                    <Button 
                      onClick={handleCopy}
                      variant='primary'
                      title="Copy"
                      size="md"
                    />
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ShareModel;