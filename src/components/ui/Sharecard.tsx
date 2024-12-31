import { Delete } from "../../Icons/Delete";
import { Dot } from "../../Icons/Dot";
import { Opentab } from "../../Icons/Opentab";


interface CardProps{
    title:string;
    link:string;
    type:"twitter" |"youtube";
    
}


function Sharecard({title,link,type}:CardProps) {

    const getYouTubeEmbedLink = (url: string) => {
        const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return videoIdMatch 
          ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=0&mute=0` 
          : link;
      }
      
  return (
    <div>
        <div className="p-8 bg-white rounded-md  shadow-md border-gray-200 max-w-96 border">
           <div className="flex justify-between ">
            <div className="flex items-center">
                <div className="text-gray-500 pr-2">
                   <Dot/>
                </div>
                {title}
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                        <Opentab/>
                    </a>
                </div>
               
            </div>
           </div>
           <div className="pt-4">
                {type==="youtube" && <iframe className="w-full" src={getYouTubeEmbedLink(link)} 
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share unmute" 
                referrerPolicy="no-referrer-when-downgrade"  allowFullScreen></iframe>}
                
                {type==="twitter" &&  
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a>
                </blockquote> }
                   
        </div> 
    </div>
    </div>
  )
}

export default Sharecard