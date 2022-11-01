import Layout from "../../components/layout/Layout";
import NotFound from "../../components/layout/NotFound";
import UpdateContract from "../../components/contract/UpdateContract";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";

import axios from "axios";

export default function ContractJobPage({ contract, access_token, error }) {
  if (error?.includes("Not found")) return <NotFound />;

  return (
    <Layout title="Update Contract">
      <UpdateContract contract={contract} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
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

  try {

    const res = await axios.get(`${process.env.API_URL}/api/contracts/${params.id}/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const contract = res.data;

    return {
      props: {
        contract,
        access_token,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.response.data.detail,
      },
    };
  }
}
