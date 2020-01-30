#  ConsenSys Academy’s 2019 Developer Bootcamp Final Project 

What does your project do?

The goal is this project was to use the Zokrates framework and create a custom protocol based on zk-snarks to prize (non fungible ERC721) users completing a pre-defined tasks. This concept could be easily enhanced and be used in a certification flow process in industries like aeropspace, banking, online universities, engineering after completion of an exam. The value proposition of such solution/framework is inherent to the nature of the blockchain (public access and immutable) but also with the ZKP capabilities to subsitute a manual and tamperable process with a fully automated and secure process. 

As a demo, this project used a basic game (Mastermind) concept to be validating its solution with zk-snarks. The game UI interface was not implemented as it would not add much value. The current application focused on setting up all the different components from a blockchain protocol perspective but not the dynamic lifecycle of the game itself (propose the colors). The ideal state would be to have the zk-snark output of the program to return the Zokrates output to be used inside the smart contract, but this is not possible today. Only a true/false output is given.  

From an architecture setup, ideally we would like to have 3 main components:
   - trusted web3 layer allowing the user to create a proof to pass on the blockchain against a specific game (also need the real colors to be centralized to build the proof).
   - node.js simple interface to interface with a blockchain
   - smart contracts on the blockchain
   
Note: For simplicity, we decided to exclude the trusted setup allowing to create a proof. This choice was made to avoid deployment complexity created by the zk-snarks trusted setup constraints. The following chapters will go in detail in how to setup locally, but do not share the deployed version to facilitate the testing. 

How to set it up?

Zokrates


Run a local development server
