##  ConsenSys Academy’s 2019 Developer Bootcamp Final Project 

## What does your project do?

The goal is this project was to use the Zokrates framework and create a custom protocol based on zk-snarks to prize (non fungible ERC721) users completing a pre-defined tasks. This concept could be easily enhanced and be used in a certification flow process in industries like aeropspace, banking, online universities, engineering after completion of an exam. The value proposition of such solution/framework is inherent to the nature of the blockchain (public access and immutable) but also with the ZKP capabilities to subsitute a manual and tamperable process with a fully automated and secure process. 

As a demo, this project used a basic game (Mastermind) concept to be validating its solution with zk-snarks. The game UI interface was not implemented as it would not add much value. The current application focused on setting up all the different components from a blockchain protocol perspective but not the dynamic lifecycle of the game itself (propose the colors). The ideal state would be to have the zk-snark output of the program to return the Zokrates output to be used inside the smart contract, but this is not possible today. Only a true/false output is given.  

From an architecture setup, ideally we would like to have 3 main components:
* trusted web3 layer allowing the user to create a proof to pass on the blockchain against a specific game (also need the real colors to be centralized to build the proof).
* node.js simple interface to interface with a blockchain
* smart contracts on the blockchain

The solidity is setup using two different contracts:
* MastermindPrize: main logic to interface with the zk-snark verifier. The contract extends OpenZeppelin libs to facilitate the prize management via ERC721 token and Ownable interface for security - we do not want any user to be able to change the verifier.
* MastermindVerifier: zk-snark validator. (Name was modified from its original verifier.sol). We want this to be as dynamic as possible to improve in the future, so users shall not need to interact with the same directly.
   
Note: For simplicity, we decided to exclude the trusted setup allowing to create a proof. This choice was made to avoid deployment complexity created by the zk-snarks trusted setup constraints. The following chapters will go in detail in how to setup locally, but do not share the deployed version to facilitate testing. 

## How to set it up?

The difficulty in the setup here resides in the pre-liminary required setup phase of zokrates to compile the high level code, create the trusted setup, export code into a solidity smart contract, generate a witness and finally generate a proof. To ease setup and have no dependencies, we recommend to use Zokrates docker image. All the following steps are required to run locally and shall be done before any blockchain interaction. Local or deployed. 

Steps (not mandatory and code already generated - only for knowledge):
* docker run -it --name zokrates -v ~/Work/entrainement/zokrates/:/home/zokrates/code zokrates/zokrates // the local mount point is used to share zokrates code inside the container. MAke sure you use your local path.
Steps (in container):
* cd code // move where all the code is
* ../zokrates compile --input consensys.zok // generates out and out.ztf 
* ../zokrates setup // generates proving and verifying key
* ../zokrates export-verifier // generates the xmart code auto generated code
* ../zokrates compute-witness -a 1 2 3 4 1 2 3 5 // Generate the witness: false result
* ../zokrates compute-witness -a 1 2 3 4 1 2 3 4 // Generate the witness: true result
* ../zokrates generate-proof // generates a proof.json output that will be used later

At this point our whole zk-snark validation process is created and just need to be deployed. 

The second set required is to deploy and configure the smart contract on the blockchain. We are going to follow a ganache-cli install for simplicity - jusy make sure it's running and truffle is properly configured. Current config is to be used with ganache running on port 8545. 
   
To deploy the smart contract on the blockchain:
* npm install openzeppelin-solidity
* truffle migrate (--reset) command. 

Once completed, the two smart contracts shal be deployed but we still need to configure the verifier address in the MastermindPrize contract. Without performing such task, you will get ugly RPC errors! The easiest and fastest way to deploy the contract is to use the truffle console and perform the following:
* var mp = await MastermindPrize.at(MastermindPrize.address)
* mp.address // will return the address of the MastermindPrize deployed
* var mv = await MastermindVerifier.at(MastermindVerifier.address)
* mv.address // will return the address of the MastermindVerifier deployed
* mp.setVerifierAddress('0x619fEfC7d0D0056428c72E446e22B82898b1C337') // where 0x619fEfC7d0D0056428c72E446e22B82898b1C337 is the local address of the MastermindVerifier contract

The last and final step is to install all node dependencies using the npm install command in the director webapp.
    
After completion of this step, the setup is completed. 

## Run a local development server?

To start the server locally, go inside the webapp folder and run the usual npm start command to launch the web interface. Depending on your computer, you should have a web page open on http://locahost:3000. Open manually if needed. Make sure you use a metamask compatible browser like Chrome.

Flow:
* when you open the app for the first time, you will be asked to allow access to metamask by the web app. Please accept. 
* once you are connected, the UI shall show three account specific values: the account[0] address, the current balance in ether and the balence in tokens received. The first time, the balance of tokens shall be 0.
* As you click on submit, you will see the metamask popup asking to sign the transaction. If confirmed, the balance prize shall increase by one each time you press on submit. 
   
Note: in a certification like flow, we would require to get only one prize per exam. Here, we prefered to allow this value to increase to be able to perform more tests.
