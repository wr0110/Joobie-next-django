import '../styles/globals.css'
import { AuthProvider } from "../context/AuthContext";
import { ContractProvider } from "../context/ContractContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContractProvider>
        <Component {...pageProps} />
      </ContractProvider>
    </AuthProvider>
  );
}

export default MyApp
