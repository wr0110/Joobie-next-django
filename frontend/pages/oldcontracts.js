
const contractsEndpoint = 'http://localhost:8000/contract/contract-list/'

export async function getServerSideProps() {
    const res = await fetch(contractsEndpoint)
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}


function Contracts({ data }) {
    console.log(data)
    return (

    <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">1 FREE, 1 at ___ETH</th>
                                <th className="py-3 px-6 text-center">Network</th>
                                <th className="py-3 px-6 text-center">Contract Address</th>
                                <th className="py-3 px-6 text-center">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {data.map( result => {
                                let {id, name, second_mint_price, network} = result;

                                if (second_mint_price.match(/\./)) {
                                    second_mint_price = second_mint_price.replace(/\.?0+$/, '');
                                  }

                                return(
                                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={ id }>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{ name }</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-3 h-4.8859375" src="https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/13c43/eth-diamond-black.png"/>
                                            </div>
                                            <span className="font-medium">{second_mint_price}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                            <div className="mr-2">
                                                <img className="w-3 h-4.8859375" src="https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/13c43/eth-diamond-black.png"/>
                                            </div>
                                            <span className="font-medium">{ network }</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center justify-center">
                                            <span className="font-medium">0x52f26fcD822AC8a4e863884209f28E6866b0d7F7</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Contracts