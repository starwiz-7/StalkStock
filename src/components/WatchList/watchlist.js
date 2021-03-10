import React from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

import Leftbar from "../Elements/leftbar";
import Topbar from "../Elements/topbar";
import Loader from "../Elements/Loader";


let color = [],
  value = [],
  change = [],
  stockName = [],
  watchlist=[];

export default class portfolio extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      loader1: "",
      confirmation: "",
      funds: "",
      marketStatus: "",
      error: "",
    };
  }

  isInArray(arr, val) {
		return arr.indexOf(val) > -1;
	}

  getPrice(){
    let symbols = "";
    if(watchlist.length !== 0){
      symbols += watchlist[0];
      for(let index = 1;index < watchlist.length;index++){
        symbols += ",";
        symbols += watchlist[index];
      }
      const latestPrice = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${process.env.REACT_APP_IEX_KEY_3}`
      fetch(latestPrice)
      .then(res => res.json())
      .then(result =>{
        for(let i = 0;i<watchlist.length;i++){
          if(result[watchlist[i]].quote.latestPrice !== null){
            value.push(result[watchlist[i]].quote.latestPrice.toFixed(2));
            change.push(parseFloat(result[watchlist[i]].quote.changePercent).toFixed(2));
            stockName.push(result[watchlist[i]].quote.companyName)
            if(Math.sign(change[parseInt(i)]) === 1){
              color.push("rgb(102,249,218)");
              change[parseInt(i)] = "+"+change[parseInt(i)];
            } else {
              color.push("#F45385");
            }
            if (
              change[parseInt(i)] !==
              "---"
            ) {
              change[parseInt(i)] =
                change[
                  parseInt(i)
                ] + "%";
            }
          }
        }
      })
    }
  }
  /*
   * gets users bookmarked tickers
   */
  getWatchlist(){
    if (this._isMounted)
      this.setState({
        loader1: "",
      });
		let user = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")
			.doc(user)
			.get()
			.then((doc) => {
				watchlist = doc.data()["watchlist"];
        if(watchlist.length === 0){
          if(this._isMounted){
            this.setState({
              loader1:"nothing"
            });
          }
        }
        else{
        this.getPrice();}
        
        
			})
      .then(() => {
        setTimeout(() => {
          if (
            this._isMounted &&
            watchlist.length > 0
          ) {

            this.setState({
              loader1: true,
            });
          }
        }, 1000);
      });
	}

  handleWatchlist(symbol){
    let user = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")
			.doc(user)
      .update({
        watchlist: firebase.firestore.FieldValue.arrayRemove(
          symbol
        ),
      });
      var index = watchlist.indexOf(symbol);
			if (index !== -1) {
				watchlist.splice(index, 1);
        stockName.splice(index,1);
        color.splice(index,1);
        change.splice(index,1);
			}
      if(this._isMounted && watchlist.length === 0){
        this.setState({
          loader1:"nothing"
        });
      }
  }
  
  componentDidMount() {
    this._isMounted = true;

    /*
     * check if market opened
     */

    fetch(`https://financialmodelingprep.com/api/v3/is-the-market-open?apikey=${process.env.REACT_APP_FMP_KEY}`)
      .then(res => res.json())
      .then(result => {
        if (this._isMounted) {
          this.setState({
            marketStatus: result.isTheStockMarketOpen,
          });
        }
      });

    let user = firebase.auth().currentUser.uid;

    document.title = `${document.title} - Portfolio`;
    this.getWatchlist();
    firebase
      .firestore()
      .collection("users")
      .doc(user)
      .onSnapshot(
        function(doc) {
          if (typeof doc.data() !== "undefined" && this._isMounted) {
            this.setState({
              funds: doc.data()["currentfunds"],
            });
          }
        }.bind(this),
      );
    document.querySelector(".hamburger").addEventListener("click", e => {
      e.currentTarget.classList.toggle("is-active");
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div className="portfolio">
        <Leftbar />
        <div className="portfolio__container">
          <Topbar />
          {this.state.loader1 === "" && <Loader />}
          {this.state.loader1 === true && watchlist.length > 0 && (
            <table className="portfolio__list">
              <tbody>
                <tr>
                  <th>SYMBOL</th>
                  <th>NAME</th>
                  <th></th>
                  <th>CHANGE (%)</th>
                  <th>CURRENT VALUE</th>
                  <th />
                </tr>
                {watchlist.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>
                      <Link
																		to={
																			"stocks/" +
																			watchlist[
																				parseInt(
																					index
																				)
																			]
																		}
																	>
                        {val}
                        </Link>
                      </td>
                      <td>{stockName[parseInt(index)]}</td>
                      <td style={{color: color[parseInt(index)]}}></td>
                      <td style={{color: color[parseInt(index)]}}>
                        {change[parseInt(index)]}
                      </td>
                      <td>${value[parseInt(index)]}</td>
                      <td>
                      <svg
													id="bookmark"
													xmlns="http://www.w3.org/2000/svg"
													width="25"
													height="25"
													viewBox="0 0 24 24"
													fill="none"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke="#ddd"
													style={{
														fill:'#ddd',
														cursor: "pointer",
													}}
													onClick={() =>{
                            this.handleWatchlist(watchlist[parseInt(index)]);
                          }}
												>
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
												</svg>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {this.state.loader1 === "nothing" && (
            <div className="errorMsg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5.373 4.51A9.962 9.962 0 0 1 12 2c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715L17.5 12H20A8 8 0 0 0 6.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0 0 13.726 5.587l.9 1.902zm-5.213-4.662L10.586 12l-2.829 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z" />
                </g>
              </svg>
              <h3>You didn't bookmarked any stocks yet.</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
