import React, { useEffect, useContext } from "react";

import Link from "next/link";
import DataTable from "react-data-table-component";

import ContractContext from "../../context/ContractContext";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

const MyContracts = ({ contracts, access_token }) => {
  console.log(contracts)

  const { clearErrors, error, loading, deleted, deleteContract, setDeleted } =
    useContext(ContractContext);

  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (deleted) {
      setDeleted(false);
      router.push(router.asPath);
    }
  }, [error, deleted]);

  const deleteContractHandler = (id) => {
    deleteContract(id, access_token);
  };

  const columns = [
    {
      name: "Contract ID",
      sortable: true,
      selector: (row) => row.id,
    },
    {
      name: "Job name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "Salary",
      sortable: true,
      selector: (row) => row.salary,
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => row.action,
    },
  ];

  const data = [];

  contracts &&
    contracts.contracts.forEach((contract) => {
      data.push({
        id: contract.id,
        title: contract.name,
        salary: "test",
        action: (
          <>
            <Link href={`/contracts/${contract.id}`}>
              <a className="btn btn-warning my-2 mx-1">
                <i aria-hidden className="fa fa-pencil"></i>
              </a>
            </Link>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteContractHandler(contract.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      });
    });

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5">
        <h4 className="my-5">My Contracts</h4>
        <DataTable columns={columns} data={data} pagination responsive />
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default MyContracts;
