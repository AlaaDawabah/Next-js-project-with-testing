import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, getUserDetails } from "../../store/actions";
import Card from "../../components/Card/Card";
import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    users: { usersList }
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  
  const getCardDetails = (id) => {
    dispatch(getUserDetails({id}))
    router.push(`/Users/${id}`)
  }

  return (
    <div>
      {usersList && usersList.length ? (
        <div className="row">
          {usersList.map(({ id, name, phone }, i) => (
            <div className="col-md-4 my-2">
              <Card name={name} phone={phone} key={i} onClick={()=>getCardDetails(id)}/>
            </div>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default index;
