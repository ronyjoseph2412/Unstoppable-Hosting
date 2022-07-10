import { useState } from "react";
import { HomePage } from "./Components/HomePage";
import { LandingPage } from "./Components/LandingPage";
import { Modal } from "./Components/Modal";


function App() {
  const [ShowModal, setModal] = useState(false)

  const myaccount = {
    "sub": "yathin017.x",
    "wallet_address": "0xE6707721ad79f4519f80D95ef4D961b60893CD76",
    "wallet_type_hint": "web3",
    "eip4361_message": "identity.unstoppabledomains.com wants you to sign in with your Ethereum account:\n0xE6707721ad79f4519f80D95ef4D961b60893CD76\n\nI consent to giving access to: openid wallet\n\nURI: uns:yathin017.x\nVersion: 1\nChain ID: 1\nNonce: 0xb2690c6c1289c851b348ad98900bf158de0dfaca1e6ab884314f58b4d641b355\nIssued At: 2022-07-10T16:29:53.657Z",
    "eip4361_signature": "0xc9b0d7c6ede2b16c854751b52060a75ababca981d39a53c13401a3d10f053e4370e96eef02d6973cad6b66cae3d0413c586ebe27ed83db6505b84f672dc43b581b"
  };
  return (
    <div className="overflow-hidden" >
      {/* <HomePage /> */}
      <div className={`relative z-0 `}>
      <LandingPage setModal={setModal}/>
      </div>
      
      {ShowModal ? <div className={`absolute top-[10%] left-[33%] z-10 `}><Modal myaccount={myaccount} setModal={setModal}  /></div> :null}
      
    </div>
  );
}

export default App;
