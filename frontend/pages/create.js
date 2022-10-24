import axios from 'axios';

export default function CreateContract() {

    submitContract = e => {
        let body = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            username : email,
            password: password
        }
        //Call to Register API

        axios.post("http://127.0.0.1:8000/contract/contract-create/", body).then(response => {
          console.log(response.data)
        })
    }

    return (
        <div className="container items-center px-5 py-12 lg:px-20">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
            <div className="relative mt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">Network</label>
            <select className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                <option>Goerli GOR</option>
                <option>Ethereum ETH</option>
            </select>
            </div>
            <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">Name</label>
            <input type="text" id="name" name="name" placeholder="Bored Ape Yacht Club" maxlength="30" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
            </div>
            <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">Symbol</label>
            <input type="text" id="name" name="name" placeholder="BAYC" maxlength="8" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
            </div>
            <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">1st FREE, 2nd at ___ETH</label>
            <input type="number" id="number" name="number" placeholder="Enter Price of 2nd Mint" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
            </div>
            <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">Supply</label>
            <input type="number" id="number" name="number" placeholder="10000" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
            </div>
            <div className="relative pt-4">
            <label for="name" className="text-base leading-7 text-blueGray-500">Royalty Rate Percentage</label>
            <input type="number" id="number" name="number" placeholder="max royalty rate is 10" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
            </div>
            <div className="flex flex-wrap mt-4 mb-6 -mx-3">
            </div>
            <div className="flex">
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox "/>
                <span className="ml-2 text-blueGray-500">Has Whitelist Stage </span>
            </label>
            </div>
            <div className="flex items-center w-full pt-4 mb-4">
            <button onClick={submitContract} className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">Deploy Contract</button>
            </div>
        </form>
        </div>
    );
}