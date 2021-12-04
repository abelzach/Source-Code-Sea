import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import background from './pic2.jpg'

class Codes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }
    render() {
        let filteredcodes = this.props.codes.filter((code) => {
              return code.name.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div style={{ backgroundImage: `url(${background})` }}>
            <React.Fragment>
            <div className="container-fluid mt-4" style={{ textAlign: 'center' }}>
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ margin: '0% 10%' }}>
                        <h1>Purchase Source Codes</h1>
                        <br />
                        <input placeholder="Enter title to search" style={{ width: '60%', margin: 'auto' }} type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                        <p>&nbsp;</p>
                            {filteredcodes.map((code, key) => {
                                console.log(code.filecid);
                                return (
                                <center>
                                <div class="card w-75">
                                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                                <Card key={key}>
                                    <Card.Body>
                                        <Card.Title>{code.title}</Card.Title>
                                        <a link href={`https://${code.filecid}.ipfs.dweb.link`}>{code.name}</a>
                                        <br /><br/>
                                        <Card.Subtitle className="mb-2 text-muted">Programmer : {code.owner}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Description : {code.description}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Price: {window.web3.utils.fromWei(code.price.toString(), 'Ether')} CELO</Card.Subtitle>
                                        <br/>
                                        <Button
                                            variant='primary'
                                            name={code.id}
                                            onClick={(event) => {
                                            this.props.buyCODE(event.target.name, window.web3.utils.fromWei(code.price.toString()))
                                            }}>
                                            Purchase Source Code
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            </div>
                            </center>
                            )
                        })}
                        </main>
                    </div>
            </div>
            
        </React.Fragment>
        </div>
        );
    }
}
export default Codes;
