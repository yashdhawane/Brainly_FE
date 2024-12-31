
import SidebarItem from './SidebarItem'
import TwitterIcon from '../../Icons/TwitterIcon'
import YoutubeIcon from '../../Icons/YoutubeIcon'
import Logo from '../../Icons/Logo'

function Sidebar({onFilterChange}: {onFilterChange: (type: string | null) => void}) {
  return (
    <div className='h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4'>
      <div className='flex text-2xl pt-4'>
        <div className='pr-4 text-purple-600'>
          <Logo/>
        </div>
        Brainly
      </div>
      <div className="pt-4 pl-4">
      <SidebarItem 
          text="All" 
          icon={<div className="w-6 h-6">•</div>}
          onClick={() => onFilterChange(null)}
        />
        <SidebarItem 
          text="Twitter" 
          icon={<TwitterIcon/>}
          onClick={() => onFilterChange('twitter')}
        />
        <SidebarItem 
          text="Youtube" 
          icon={<YoutubeIcon/>}
          onClick={() => onFilterChange('youtube')}
        />
      </div>
    </div>
  )
}

export default Sidebar