import  {useEffect,useState} from 'react'

export const useFetch = (url) => {
      const [data ,setData] = useState([])
    useEffect(()=>{
      const getData = async()=>{
               try{
                    const res = await fetch(url);
                    const data = await res.json();
                    setData(data.products)
                  } catch(error){
                      console.log(error)
                  }
      }
      getData()
    },[url])
   
    return [data]
    
  
}
