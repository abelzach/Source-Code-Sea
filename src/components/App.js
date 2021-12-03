import React, { Component } from 'react';
import './App.css';
import { SpringSpinner } from 'react-epic-spinners';
import Web3 from 'web3';
import SourceCodeSea from '../build/SourceCodeSea.json';
import Create from './create'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  async componentWillMount() {
      await this.loadWeb3();
      await this.loadBlockchainData();
  }
  async loadWeb3() {
      if (window.celo) {
          await window.celo.enable();
          window.web3 = new Web3(window.celo);
      }
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
      }
      else {
          window.alert('Use the Celo Extension Wallet!');
      }
  }

  async loadBlockchainData() {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      const networkData = SourceCodeSea.networks[networkId];
    
    if (networkData) {
      const SCS = new web3.eth.Contract(SourceCodeSea.abi, networkData.address);
      this.setState({ SCS });
      const sCount = await SCS.methods.sCount.call();
      for (let i = 1; i <= sCount; i++) {
        const code = await SCS.methods.codes(i).call();
        this.setState({
          codes: [...this.state.codes, code]
        });
        if (code.owner === this.state.account) {
          this.setState({
            mycodes: [...this.state.mycodes, code]
          });
        }
      }
      this.setState({ loading: false });
    } else {
      window.alert('Contract could not be deployed.');
    }
      
  }

  createCODE(name, desc, filecid, price) {
      this.setState({ loading: true });
      this.state.SCS.methods.createCODE(name, desc, filecid, window.web3.utils.toWei(price.toString())).send({ from: this.state.account })
          .once('confirmation', (n, receipt) => {
              this.setState({ loading: false });
              window.location.href = '/'
          })
  }

  registerArtist(name) {
      this.setState({ loading: true });
      this.state.SCS.methods.registerArtist(name).send({ from: this.state.account })
          .once('confirmation', (n, receipt) => {
              this.setState({ loading: false });
              window.location.reload();
          })
  }

  buyCODE(id,price) {
      this.setState({ loading: true });
      this.state.SCS.methods.buyCODE(id).send({ from: this.state.account, value: window.web3.utils.toWei(price.toString()) })
          .once('confirmation', (n, receipt) => {
              this.setState({ loading: false });
              window.location.reload();
              window.location.href = '/'
          })
  }

  constructor(props) {
      super(props)
      this.state = {
          account: '',
          SCS: null,
          codes: [],
          mycodes: [],
          loading: false,
          orgBalance: 0
      }

      this.registerArtist = this.registerArtist.bind(this);
      this.createCODE = this.createCODE.bind(this);
      this.buyCODE = this.buyCODE.bind(this);
  }


  render() {
    return (
      <div>
        <Router>
          <Route exact path="/create" render={props => (
              <React.Fragment>
                {
                  this.state.loading
                  ? <div class="center"><SpringSpinner size="100" color="white" /></div>
                  : <Create createCODE={this.createCODE} />
                }
              </React.Fragment>
            )} /> 
        </Router>
      </div>
    );
  }
}

export default App;
