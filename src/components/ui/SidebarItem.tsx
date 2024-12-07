import  { ReactElement } from 'react'

function SidebarItem({text,icon}:{
    text:string;
    icon:ReactElement;
}) {
  return (
    <div className='flex text-gray-700 py-4 cursor-pointer'>
    <div className="pr-2 hover:text-purple-600">
        {icon}
    </div>
    <div className="pr-2">
        {text}
    </div>
    </div>
  )
}

export default SidebarItem