import React from "react";
import "./home.css";
import pic from "./pic.jpg"
import picc from './picc.jpg'
import Typography from "@material-ui/core/Typography";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>

      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-3"></div>
            <div className="col-md-7 col-sm-9">
              <h3>Welcome to</h3>
              <h1>Source Code Sea</h1>
              <br/>
            </div>
            <h3>Decentralised Source code selling platform using blockchain technology</h3>
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-one">
                <i className="fa fa-laptop"></i>
                <h2>Data Protection</h2>
                <p>
                Tamperproof transactions which require no third-party payment system. 
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-two">
                <i className="fa fa-mobile"></i>
                <h2>Why NFT?</h2>
                <p>
                NFTs can have only one owner at a time. They get exclusive ownership rights NFTs’ unique data makes it easy to verify their ownership and transfer tokens between owners. 
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="divider-wrapper divider-three">
                <i className="fa fa-life-ring"></i>
                <h2>Sustainable</h2>
                <p>
                Sustainable way for code ownership to be recognized and adhered to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={picc} className="img-responsive" alt="about img" />
            </div>
            <div className="col-md-6 col-sm-12 about-des">
              <h2>Protection</h2>
              <p>
                The problem of source code theft comes down to the ease of which
                it can happen. Preventing source code theft is a problem of
                massive consequence and so must be given due thought.
              </p>
              <p>
                Modern business practices are built upon the ideal of trusted
                relationships between employer and employed. The problem occurs
                when insiders, who should be part of this trusted relationship,
                become the perpetrators of the threat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={pic} className="img-responsive" alt="about img" />
            </div>
            <div className="col-md-6 col-sm-12 about-des">
              <h2>How it can be solved</h2>
              <p>
                People who become software developers are often extremely
                creative individuals. The creation of software is about making
                something. Creative people are generally passionate. To become a
                software developer, especially a good one, you have to put the
                time in.
              </p>
              <p>
                This passion for their craft and the inherent process in
                creating a product can result in a feeling of ownership of the
                code by the developer. Therein lies the fundamental issue behind
                code theft.Copyright law is there to protect an investment in
                creative work. Copyright of source code is a way to protect your
                Intellectual Property (IP). Many countries have different
                interpretations of copyright law. However, the fundamental tenet
                is that you use a contract with a copyright clause to prevent
                unauthorized copying of the software you have paid for.
              </p>
            </div>
          </div>
        </div>
        <footer className={classes.footer}>
     
        <LinearProgress color="primary"/>
        <br/>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            © 2021 Source Code Sea by
            Crypto Squad
        </Typography>
      </footer>
      </div>
    </>
  );
};

export default Home;
