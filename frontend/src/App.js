import { Fragment } from "react";
import {Routes, Route} from 'react-router-dom'

import EmailVerification from './pages/EmailVerification/EmailVerification'
import EnterEmailCode from "./pages/EmailVerification/EnterEmailCode";
import EmailCodeResent from "./pages/EmailVerification/EmailCodeResent";
import EmailVerified from "./pages/EmailVerification/EmailVerified";

import PhoneVerification from './pages/PhoneVerification/PhoneVerification'
import EnterSMSCode from './pages/PhoneVerification/EnterSMSCode'
import SMSCodeResent from "./pages/PhoneVerification/SMSCodeResent";
import PhoneVerified from './pages/PhoneVerification/PhoneVerified'

import FrontID from './pages/FaceAuthentication/FrontID'
import BackID from "./pages/FaceAuthentication/BackID";
import FaceGuide from "./pages/FaceAuthentication/FaceGuide";
import FaceIDVerified from "./pages/FaceAuthentication/FaceIDVerified";
import Capture from "./pages/FaceAuthentication/Capture";

import PageNotFound from "./pages/PageNotFound";

const App = props => {
  return <Fragment>
    <Routes>
      <Route index element={<EmailVerification/>} />
      <Route path="/enter-email-code" element={<EnterEmailCode/>} />
      <Route path="/email-code-resent" element={<EmailCodeResent/>} />
      <Route path="/email-verified" element={<EmailVerified/>} />

      <Route path="/phone-verification" element={<PhoneVerification/>} />
      <Route path="/enter-sms-code" element={<EnterSMSCode/>} />
      <Route path="/sms-code-resent" element={<SMSCodeResent/>} />
      <Route path="/phone-verified" element={<PhoneVerified/>} />
      
      <Route path="/front-id" element={<FrontID/>} />
      <Route path="/back-id" element={<BackID/>} />
      <Route path="/face-guide" element={<FaceGuide/>} />
      <Route path="/capture" element={<Capture/>} />
      <Route path="/faceID-verified" element={<FaceIDVerified/>} />

      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Fragment>
}

export default App

