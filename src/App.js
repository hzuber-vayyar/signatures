import React, { Component } from "react";
import ReactClipboard from "react-clipboardjs-copy";
import scrnshot1 from "./scrnshot-settings.webp";
import scrnshot2 from "./scrnshot-sig.webp";
import scrnshot3 from "./scrnshot-save.webp";
import outlook1 from './outlook-options.webp';
import outlook2 from './outlook-signature.webp';
import outlook3 from './outlook-new-sig.webp';
import outlook4 from './outlook-name-sig.webp';
import outlook5 from './outlook-type-sig.webp';
import "./App.css";
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      phone: "",
      phone2: "",
      submitted: true,
      gmail: false,
      outlook: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  handlePhone = event => {
    this.setState({
      [event.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  showGmail = () => {
    this.setState({
      gmail: true,
      outlook: false
    })
  }

  showOutlook = () => {
    this.setState({
      gmail: false,
      outlook: true
    })
  }

  showValidPhone = () => {
    this.setState({
      phoneInput: false
    })
  }
  render() {
    const length = this.state.name.length;
    const size =
      length < 25 ? "font-regular" : length < 40 ? "smaller" : "smallest";
    const showCard = this.state.submitted ? "display" : "display-none";
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    const number =
      this.state.phone[0] === "0"
        ? this.state.phone.slice(1)
        : this.state.phone;
    const numberNoDashes = number.replace(/-/g, "");
    const displayNumber =
      numberNoDashes.slice(0, 2) +
      "-" +
      numberNoDashes.slice(2, 5) +
      "-" +
      numberNoDashes.slice(5);
    const showGmailInstructions = this.state.gmail ? "gmail instructions" : "display-none";
    const showOutlookInstructions = this.state.outlook ? "outlook instructions" : "display-none";

    return (
      <div className="App">
        <header className="App-header">
          Vayyar Imaging LTD Signature Maker
        </header>

        {
          //* Begining of form *//
        }
        <div className="form-style-2">
          <div className="form-style-2-heading">
            Fill in your information below, and click "Submit"
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="name">
              <span>Name:</span>
              <input
                type="text"
                className="input-field"
                id="name"
                placeholder="Johnny Vayyaroni"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="position">
              <span>Position:</span>

              <input
                type="text"
                className="input-field"
                id="position"
                placeholder="VP Of Magic"
                value={this.state.position}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="phone">
              <span>Mobile Number:</span>
              <input
                type="text"
                className="input-field"
                id="phone"
                placeholder="Example: '+972-58-5551234'"
                value={this.state.number}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="phone">
              <span>Phone Number:</span>
              <input
                type="text"
                className="input-field"
                id="phone"
                placeholder="(Without leading 0 Example: 58-5551234)"
                value={this.state.number}
                onChange={e => this.handleChange(e)}
              />
              </label>
            <Input
              value={this.state.phone}
              id="phone"
              
              error={this.state.number ? (isValidPhoneNumber(this.state.number) ? undefined : 'Invalid phone number') : 'Phone number required'}
              />
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>

        {
          //* Begining of Presentational Container */
        }
        <div className={`${showCard} presentational-container`} id="copied">
          <table data-vayyarsig-date={new Date().toString()} cellspacing="0" width="470" cellpadding="0" border="0" style={{border: '0px'}}>
            <tr>
              <td style={{padding: '0 12px 0 0',verticalAlign: 'top'}} valign="top" width="100">
              <img alt="Vayyar Imaging LTD" width="120" style={{width:'120px',mozBorderRadius:'0%',khtmlBorderRadius:'0%',oBorderRadius:'0%',webkitBorderRadius:'0%',msBorderRadius:'0%',borderRadius:'0%'}} src="https://vayyar.s3.eu-central-1.amazonaws.com/email/vayyar.logo.png" />
              <table cellspacing="0" cellpadding="0" border="0" valign="center" style={{align: 'center', border: '0px'}}>
                <tr>
                  <td style={{fontFamily: 'Arial',padding: '0 15px 0 0'}}>
                  &nbsp;
				          </td>
                <td style={{fontFamily: 'Arial',padding: '0 5px 0 0'}}>
                  <a href="https://www.facebook.com/vayyarltd/">
                    <img alt="Facebook" style={{width:'18px', }} width="18" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/facebook.png"/>
					        </a>
				          </td>
                  <td style={{fontFamily: 'Arial',padding: '0 5px 0 0'}}>
                        <a href="https://twitter.com/vayyarinc">
                          <img alt="Twitter" style={{width:'18px'}} width="18" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/twitter.png"/>
						</a>
					</td>
                        <td style={{fontFamily: 'Arial',padding: '0 5px 0 0'}}>
                          <a href="https://www.linkedin.com/company/vayyar/">
                            <img alt="LinkedIn" style={{width:'18px'}} width="18" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/linkedin.png"/>
						</a>
					</td>
                          <td style={{fontFamily: 'Arial',padding: '0 5px 0 0'}}>
                            <a href="https://www.instagram.com/vayyar_inc/">
                              <img alt="Instagram" style={{width:'18px'}} width="18" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/instagram.png"/>
					</a>
				</td>
			</tr>
			</table>
                      </td>
                      <td style={{fontsize:'1em padding:10 15 0 12px',verticalAlign: 'center',borderLeft: '1px solid #3d85c6'}} valign="center">
                        <table cellspacing="0" cellpadding="0" border="0" valign="center" style={{lineHeight: '1.4',fontFamily:'sans-serif, Lucida Console, Monaco, monospace', fontSize:'80%',color: '#000001', border: "0px"}}>
                          <tr>
                            <td style={{paddingBottom: '3px', paddingLeft: '15px'}}>
                              <span style={{font: '700 1.4em sans-serif, Lucida Console, Monaco, monospace',color:'#009DDD'}}>{toTitleCase(this.state.name)}</span>
					</td>
				</tr>
                            <tr>
                              <td style={{color:'#000001',paddingBottom: '4px', paddingLeft: '15px'}}>
                                <div style={{font:'600 1em sans-serif, Lucida Console, Monaco, monospace',color:'#516670'}}>{toTitleCase(this.state.position)}&nbsp;</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{fontFamily:'sans-serif, Lucida Console, Monaco, monospace'}}>
                                  <span style={{font: '.6em',fontWeight: '800',color:'#3d85c6', paddingLeft: '15px'}}>
                                  {number.length > 7
                                    ? "M: "
                                    : ""}
                                  </span>

                                </div>
                              </td>
                            </tr>
                            <tr>

                            </tr>
						</table>
					</td>
				</tr>
</table>
			
        </div>
                  <div className="CopyPane">
                    <ReactClipboard
                      target={".presentational-container"}
                      selection={true}
                      onSuccess={e => console.log(e)}
                      onError={e => console.log(e)}
                      className={`${showCard} submit-btn `}
                    >
                      <button>Copy to Clipboard</button>
                    </ReactClipboard>
                  </div>
                  <div className="mail-btn-container">
                    <div className={`${showCard} submit-btn gmail-btn`} onClick={() => { this.showGmail() }}>Show Gmail instructions</div>
                    <div className={`${showCard} submit-btn outlook-btn`} onClick={() => { this.showOutlook() }}>Show Outlook instructions</div>
                  </div>
                  <div className={showGmailInstructions}>
                    <h3>To use as your Gmail Signature:</h3>
                    <ol>
                      <li><p>Click the "Copy to clipboard" button.</p></li>
                      <li>
                        <p>Go to your Vayyar gmail account and click the Settings gear in
              your Gmail toolbar.</p>
                      </li>
                      <li>
                        <p>
                          Select Settings from the menu.
              </p>
                        <img src={scrnshot1} alt="gmail settings" className="screenshot" />
                      </li>
                      <li><p>Go to General</p></li>
                      <li><p>Make sure the desired account is selected under Signature</p></li>
                      <li>
                        <p>Paste your signature into the signature box.</p>
                        <img src={scrnshot2} alt="gmail signature" className="screenshot" />
                      </li>
                      <li>
                        <p>Click Save Changes</p>
                        <img src={scrnshot3} alt="gmail save" className="screenshot" />
                      </li>
                      <li>
                        <p>
                          Gmail will now insert the signature automatically when you compose
                          a message. You can edit or remove it before clicking Send.
              </p>
                      </li>
                    </ol>
                  </div>
                  <div className={showOutlookInstructions}>
                    <h3>To use as your Outlook Signature:</h3>
                    <ol>
                      <li><p>Open Outlook. In the ribbon, select File. In the left rail, select Options.</p>
                        <img src={outlook1} alt="outlook options" className="screenshot" /></li>
                      <li>
                        <p>Go to your Vayyar outlook account and click the Settings gear in
              your Gmail toolbar.</p>
                      </li>
                      <li>
                        <p>
                          In the Outlook Options dialog box, select Mail. In the Compose messages section, select Signatures.
              </p>
                        <img src={outlook2} alt="outlook signature" className="screenshot" />
                      </li>
                      <li><p>In the Signatures and Stationery dialog box, if Outlook is set up with multiple email accounts, under Choose default signature, use the Email account dropdown menu to select your Vayyar account. Under Select signature to edit, select New.</p>
                        <img src={outlook3} alt="outlook new signature" className="screenshot" /></li>
                      <li><p>In the New Signature dialog box, type a name for your email signature. Select OK.</p>
                        <img src={outlook4} alt="outlook, name your signature" className="screenshot" /></li>
                      <li>
                        <p>In the Signatures and Stationery dialog box, in the Edit signature field, paste your signature. Click OK.</p>
                        <img src={outlook5} alt="outlook signature" className="screenshot" />
                      </li>
                      <li>
                        <p>In the Outlook Options dialog box, select OK. Now, each time you start a new email, the signature will automatically appear.</p>
                      </li>
                      <li>
                        <p>
                          Gmail will now insert the signature automatically when you compose
                          a message. You can edit or remove it before clicking Send.
              </p>
                      </li>
                    </ol>
                  </div>
      </div>
                );
              }
            }
            
            export default App;
