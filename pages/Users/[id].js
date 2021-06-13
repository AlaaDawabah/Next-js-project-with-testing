import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { getUserDetails } from "../../store/actions";
import Card from "../../components/Card/Card";

const UserDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDetails({ id: router.query.id }));
  }, [router.query.id]);
  const {
    users: { userDetails }
  } = useSelector(state => state);
  return (
    <div>
      <Head>
        <title>{userDetails.name}</title>
        <description>{userDetails.name}</description>
      </Head>
      <Card name={userDetails.name} phone={userDetails.phone}/>
    </div>
  );
};

export default UserDetails;
