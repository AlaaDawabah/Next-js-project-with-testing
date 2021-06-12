import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { getUsersList } from "../../store/actions";

const index = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsersList())
    },[])
    return (
        <div>
            Home s
        </div>
    )
}

export default index
