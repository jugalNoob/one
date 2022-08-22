import React,{useState , useEffect} from 'react'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import { request } from '@truffle/contract/lib/execute'

function Dapp() {

    const [web3Api, setWeb3] = useState({


        provider: null,

        web3: null,

     




    })


    
    useEffect(() => {


        const loadProvider = async() => {


            const provider = await await detectEthereumProvider()
          



            if (provider) {

                provider.request({ method: "eth_requestAccounts" })

                setWeb3({
                    web3: new Web3(provider),

                    provider,
           

                });
            } else {

                console.error("please install MetaMask")
            }


        }

        loadProvider()

    }, [])

    console.log(web3Api.web3)



    const [account , setAccount]=useState();

    useEffect(()=>{

        const Accounts=async()=>{


            const allacount=await  web3Api.web3.eth.getAccounts();


            setAccount(allacount[0])
            

        }


        web3Api.web3 && Accounts();


    },[web3Api.web3])
  
   

  return (
    <div>
    
    <h1>jugal sharma</h1>

    <h1>{account? account: "not connect"}</h1>
    </div>
  )
}

export default Dapp