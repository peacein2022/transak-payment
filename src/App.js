import logo from './logo.svg';
import './App.css';
import transakSDK from '@transak/transak-sdk'

function App() {
  const startTransak = () => {
    let transak = new transakSDK({
      apiKey: '82d15ac2-7625-4c92-b6a4-8fffda423142',  // Your API Key
      environment: 'STAGING', // STAGING/PRODUCTIOSTAGINGN
      widgetHeight: '625px',
      widgetWidth: '500px',
      // Examples of some of the customization parameters you can pass
      defaultCryptoCurrency: 'ETH', // Example 'ETH'
      walletAddress: '0xb9e36F98ccbbE5D714704EC450e1E61684893FE9', // Your customer's wallet address
      themeColor: '#03fc0b', // App theme color
      fiatCurrency: 'GBP', // If you want to limit fiat selection eg 'GBP'
      email: 'example@gmail.com', // Your customer's email address
      redirectURL: '' // Redirect URL of your app    
  });
  
  transak.init();
  
  // To get all the events
  transak.on(transak.ALL_EVENTS, (data) => {
          console.log(data)
  });
  
  // This will trigger when the user marks payment is made.
  transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
  });
  }
 
  return (
    <div className="App">
    <button onClick={() => startTransak()}> Start transak</button>
    </div>
  );
}

export default App;
