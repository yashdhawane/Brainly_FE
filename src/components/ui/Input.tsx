export function Input({onChange,placeholder}:{onChange:()=>void,placeholder:string}){
    return <div>
      <input placeholder={placeholder} type='text' className='px-4 py-2' onChange={onChange}/>
    </div>
  }
  