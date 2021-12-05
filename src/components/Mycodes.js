import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

class Mycodes extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="container-fluid mt-5" style={{ textAlign: 'center' }}>
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ margin: '0% 15%' }}>
                        <h1>Your codes</h1>
                        {this.props.mycodes.map((code, key) => {
                            return (
                                <Card key={key}>
                                    <Card.Body>
                                        <Card.Title>{code.name}</Card.Title>
                                        <a link href={`https://${code.filecid}.ipfs.dweb.link`}>{code.name}</a>
                                        <br /> <br/>
                                        <Card.Subtitle className="mb-2 text-muted">Programmer: {code.owner}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Description: {code.description}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Price bought for: {window.web3.utils.fromWei(code.price.toString(), 'Ether')} CELO</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </main>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Mycodes;
