import  { ReactElement } from 'react'
function SidebarItem({text, icon, onClick}: {
  text: string;
  icon: ReactElement;
  onClick: () => void;
}) {
return (
  <div onClick={onClick} className='flex text-gray-700 py-4 cursor-pointer'>
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