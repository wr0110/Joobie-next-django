import Layout from "../../components/layout/Layout";
import MyContracts from "../../components/contract/MyContracts";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";
import axios from "axios";

export default function MyContractsPage({ contracts, access_token }) {
  
  return (
    <Layout title="My Contracts">
      <MyContracts contracts={contracts} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${process.env.API_URL}/api/contracts/`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const contracts = res.data;

  return {
    props: {
      contracts,
      access_token,
    },
  };
}
