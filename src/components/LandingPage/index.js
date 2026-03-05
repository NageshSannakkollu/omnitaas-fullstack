import HeaderPage from '../HeaderPage'
import { Link, useNavigate } from 'react-router-dom'

import "./index.css"
const LandingPage = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    console.log("jwtToken:",jwtToken)
    const navigate = useNavigate();
    if (jwtToken=== null || jwtToken === undefined){
        navigate("/signin")
    }
  return (  
    <div>
        <HeaderPage/>
        <div className='landing_page_main_container'>
            <div className='landing_page_inside_container'>
                <h1 className='welcome_title'>Welcome to OMNITAAS</h1>
                <h1 className='sub_title'>The Global Track & Trace Solution that brings the Cloud to your Premises</h1>
                <h3>Intelligence that Powers Every Operation</h3>
                <p className="description">Our TaaS-AITM Suite provides the next-generation Operational Intelligence your business needs to move beyond legacy systems. We replace reactive audits with predictive foresight across your physical assets, manufacturing flows, and external supply chain.</p>
            </div>
        </div>
        </div>
  )
}

export default LandingPage  