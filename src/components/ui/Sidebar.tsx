
import SidebarItem from './SidebarItem'
import TwitterIcon from '../../Icons/TwitterIcon'
import YoutubeIcon from '../../Icons/YoutubeIcon'
import Logo from '../../Icons/Logo'

function Sidebar() {
  return (
    <div className='h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4'>
        <div className='flex text-2xl pt-4'>
            <div className='pr-4 text-purple-600'>
                  <Logo/>
            </div>
            Brainly
        </div>
       <div className="pt-4 pl-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
        <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        
        
       </div>
    </div>
  )
}

export default Sidebar