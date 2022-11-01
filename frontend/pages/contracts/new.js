import Layout from "../../components/layout/Layout";
import NewContract from "../../components/contract/NewContract";

import { isAuthenticatedUser } from "../../utils/isAuthenticated";

export default function NewContractPage({ access_token }) {
  return (
    <Layout title="Create a new Contract">
      <NewContract access_token={access_token} />
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

  return {
    props: {
      access_token,
    },
  };
}
