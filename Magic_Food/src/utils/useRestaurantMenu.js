import { useEffect, useState } from "react";
import { INFO_API } from "../utils/constants";
const useRestaurantMenu = (resId)=>
        {
                const [resInfo,setResInfo] = useState(null);
                // fetch data
                useEffect(()=>
                {
                        fetchData();
                },[]);

                const fetchData = async ()=>
                        {
                             const data = await fetch(INFO_API + resId);
                             const json = await data.json();
                             setResInfo(json);

                        }
            
                return resInfo;
        }
export default useRestaurantMenu;