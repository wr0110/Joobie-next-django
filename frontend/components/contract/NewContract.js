import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import ContractContext from "../../context/ContractContext";

const networkOptions = ["ethmain", "goerli"];
const whitelistOptions = ["True", "False"];

const NewContract = ({ access_token }) => {
  const [network, setNetwork] = useState("goerli");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [second_mint_price, setSecond_mint_price] = useState("");
  const [supply, setSupply] = useState("");
  const [royalty_rate, setRoyalty_rate] = useState("");
  const [whitelist, setWhitelist] = useState("True");

  const { clearErrors, error, loading, created, newContract, setCreated } =
    useContext(ContractContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (created) {
      setCreated(false);
      toast.success("Contract created successfully.");
    }
  }, [error, created]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      network,
      name,
      symbol,
      second_mint_price,
      supply,
      royalty_rate,
      whitelist,
    };

    console.log(data);

    newContract(data, access_token);
  };

  return (
    <div className="newJobcontainer">
      <div className="formWrapper">
        <div className="headerWrapper">
          <div className="headerLogoWrapper"></div>
          <h1>
            <i aria-hidden className="fas fa-copy mr-2"></i> CREATE A CONTRACT
          </h1>
        </div>
        <form className="form" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fab fa-tumblr"></i>
                  <input
                    type="text"
                    placeholder="Enter Contract Name"
                    value={name}
                    maxLength="30"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-file-medical-alt"></i>
                  <input
                    type="text"
                    placeholder="Enter Contract Acronym"
                    value={symbol}
                    maxLength="8"
                    onChange={(e) => setSymbol(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-file-medical-alt"></i>
                  <input
                    type="number"
                    placeholder="Second Mint Price"
                    value={second_mint_price}
                    onChange={(e) => setSecond_mint_price(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-file-medical-alt"></i>
                  <input
                    type="number"
                    placeholder="Enter Supply"
                    value={supply}
                    maxLength="7"
                    onChange={(e) => setSupply(e.target.value)}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <input
                    type="number"
                    placeholder="Royalty Rate Percentage"
                    value={royalty_rate}
                    onChange={(e) => setRoyalty_rate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ml-4 mt-4 mt-md-0 ml-md-0">
              <div className="boxWrapper">
                <h4>Network:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                  >
                    {networkOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="boxWrapper">
                <h4>Will include Whitelist:</h4>
                <div className="selectWrapper">
                  <select
                    className="classic"
                    value={whitelist}
                    onChange={(e) => setWhitelist(e.target.value)}
                  >
                    {whitelistOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}

                  </select>
                </div>
              </div>

            </div>

            <div className="col text-center mt-3">
              <button className="createButton">
                {loading ? "Creating..." : "Create Contract"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContract;
