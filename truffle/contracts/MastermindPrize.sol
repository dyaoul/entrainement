pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol';
import 'openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol';
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./MastermindVerifier.sol";

/**
 * @title ERC token manage and public interface to validate mstermind game solution
 * @author Sebastien Bastard (sebastien.bastard@gmail.com)
 * @dev Homepage: https://github.com/dyaoul
 */
contract MastermindPrize is Ownable, ERC721Enumerable, ERC721Metadata("MastermindCoin", "MMC") {
  address public contractMastermindVerifier;

  // Event to be emited on successflu challenge completion
  event MastermindChallengeSolved(address s);

  /**
  * @notice This endpoint allows the owner to configure the verifier contract address dynamically. Only the owner can call this function
  * @param verifierAddress     Address of the verifier to be used for future validation
  * @return N/A
  */
  function setVerifierAddress(address verifierAddress) public onlyOwner {
    contractMastermindVerifier = verifierAddress;
  }

  /**
  * @notice This endpoint any user to validate a proof for a mastermind game
  * @param a     Proof component
  * @param b     Proof component
  * @param c     Proof component
  * @param input     Proof component
  * @return true if succesful and false otherwise
  */
  function solve(
          uint[2] memory a,
          uint[2][2] memory b,
          uint[2] memory c,
          uint[5] memory input
      ) public {
      // ZPK verification
      require(contractMastermindVerifier != address(0x0), "Verifier contract shall be assigned");
      bool result = MastermindVerifier(contractMastermindVerifier).verifyTx(a, b, c, input);
      require(result, "Incorrect solution");

      // we passed => give the prize to the user.
      uint tokenId = ERC721Enumerable.totalSupply() + 1;
      ERC721Enumerable._mint(msg.sender, tokenId);
      emit MastermindChallengeSolved(msg.sender);
  }
}
