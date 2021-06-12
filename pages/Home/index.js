import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../store/actions";
import Card from "../../components/Card/Card";
import { CircularProgress } from "@material-ui/core";

const index = () => {
  const dispatch = useDispatch();
  const {
    users: { usersList }
  } = useSelector(state => state);
  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  return (
    <div>
      {usersList && usersList.length ? (
        <div className="row">
          {usersList.map(({ name, phone }, i) => (
            <div className="col-md-3">
              <Card name={name} phone={phone} key={i} />
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
