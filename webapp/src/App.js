import React, {Component} from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import { PRIZE_ADDRESS, PRIZE_ABI, PRIZE_PROOF} from './config'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);

    // Internal variables
    this.contract = null;
    this.web3 = null;
    this.instance = null;

    // Dynamic state to show on the UI
    this.state = {
      account: null,
      balance: null,
      wins: null,
      proof: JSON.stringify(PRIZE_PROOF),
      proposed: JSON.stringify(PRIZE_PROOF),
    };
  }

  componentDidMount() {
    this.loadBlockchain();
  }

  async loadBlockchain() {
    let currentComponent = this;

    if (window.ethereum) {
      // Modern
      this.web3Provider = window.ethereum;
      try {
          await window.ethereum.enable();
      } catch(e) {
        // User has denied account access to DApp...
        console.error(e);
      }
    } else if (window.web3) {
      this.web3Provider = window.web3.currentProvider;
    } else {
       // If no injected web3 instance is detected, fall back to Ganache
       this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
     }
     currentComponent.web3 = new Web3(this.web3Provider);
     this.loadAccount();
  }

  async loadAccount() {
    let currentComponent = this;
    currentComponent.web3.eth.getAccounts().then(function(accounts){
      currentComponent.setState({ account: accounts[0] });
      currentComponent.loadBalance(accounts[0]);
      currentComponent.loadContract();
    });
  }

  async loadBalance(account) {
    let currentComponent = this;
    currentComponent.web3.eth.getBalance(account).then(function(result){
      currentComponent.setState({ balance: currentComponent.web3.utils.fromWei(result, 'ether') });
    });
  }

  async loadContract() {
    let currentComponent = this;
    currentComponent.contract = TruffleContract(PRIZE_ABI);
    currentComponent.contract.setProvider(currentComponent.web3Provider);
    currentComponent.instance = await currentComponent.contract.deployed();
    currentComponent.loadWins();
  }

  async loadWins() {
    let currentComponent = this;
    const {account} = this.state;

    currentComponent.instance.balanceOf(account, {
        from: account
    }).then(function(balance) {
      currentComponent.setState({ wins: balance.toNumber() });
    });;
  }

  handleChange(event) {
    this.setState({ proposed: event.target.value });
  }

  async submitProof(event) {
    console.log('Submitting proof...');
    let currentComponent = this;
    const {account, proposed} = this.state;

    let proofArray = proposed.match(/0x[0-9A-F]+/ig);
    let A = [proofArray[0], proofArray[1]];
    let B = [[proofArray[2], proofArray[3]],[proofArray[4], proofArray[5]]];
    let C = [proofArray[6], proofArray[7]];
    let inputs = [proofArray[8], proofArray[9], proofArray[10], proofArray[11], proofArray[12]];
    let objProof = {
            'A': A,
            'B': B,
            'C': C,
            'inputs': inputs
        }

    // debugger
    currentComponent.instance.solve(objProof.A, objProof.B, objProof.C, objProof.inputs, {
        from: account,
        gas: 2000000
    }).then(function(tx) {
      if(tx.logs[0]) {
        currentComponent.loadWins();
      }
    });
  }

  render() {
    const {account, balance, wins, proof} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <p>Your account: {account}</p>
            <p>Your balance: {balance}</p>
            <h3>Your wins: {wins}</h3>
            <textarea rows="10" cols="200" id="proof-input" onChange={e => this.handleChange(e)} defaultValue={proof}></textarea>
            <br/>
            <button className="action-button" id="action-button" onClick={e => this.submitProof(e)}>Submit</button>
          </div>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
