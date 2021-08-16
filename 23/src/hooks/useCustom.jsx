import {useEffect} from 'react';
function useCustom(val){
    useEffect(()=>{
        document.querySelector('h2').innerHTML = `${val}`;
    },[val])
}

export default useCustom