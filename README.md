#  ConsenSys Academy’s 2019 Developer Bootcamp Final Project 

What does your project do?
The goal is this project was to use the Zokrates framework and create a custom protocol based on zk-snarks to prize users completing a pre-defined tasks. This concept could be easily enhanced and be used in a certification flow process in industries like aeropspace, banking, online universities, engineering after completion of an exam. The value proposition of such solution/framework is inherent to the nature of the blockchain (public access and immutable) but also with the ZKP capabilities to subsitute a manual and tamperable process byt something untamperable. 

As a demo, this project used a basic game (Mastermind) to be validated inside a zk-snark. The UI interface was not implemented as it would not add much value, and the current application focused on setting up all the different components from a blockchain protocol perspective but not the dynamic lifecycle of the game itself (propose the colors). The ideal state would be to have the zk-snark output of the program to return the whole ouut that could be used inside the smart contract, but this is not possible today. Only the proof of the solved problem will be performed. 

From an architecture setup, ideally we would like 
Because the challenge would be custom, we decided to have a two layer approach:
   - one layer to manage prizes and the public interface for users
   - one layer to control the low level zk-snark verification for each challenge



This choice was made to avoid deployment complexity created by the zk-snarks trusted setup requirement used in this project. The following chapters will go in detail in how to setup locally, but do not share the deployed version to facilitate the testing. Goal is to show a flow in the user experience without adding the complexity of creating a proof without a trusted setup. 

- (game itself not implemented), where a user would provide his proof of solution on the blockchain to obtain a prize. The prize, is currently implemented as a non fungible ERC721 token given each time a valid proof has been given. 

How to set it up



Run a local development server
