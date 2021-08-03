import * as React from "react"
import { useFormik } from "formik"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const IndexPage = () => {

  const formik = useFormik ({
    initialValues: {
      title: "",    
      firstName: "",
      lastName: "",
      address: "",
      dob: "",
      address: "",
      email: "",  
      tel: "",
      privacy: [],     
      lloyds: [],
      barclays: [], 
      barclaycard: [], 
      natwest: [], 
      rbs: [], 
      tsb: [], 
      halifax: [], 
      bankofscotland: [],                                     
      hsbc: [], 
      capitalone: [], 
      mbna: [], 
      egg: [],                                     
      mint: [],  
      clydesdale: [], 
      yorkshire: [], 
      mands: [],                                     
      santander: [], 
      alliance: [],  
      abbey: [], 
      blackhorse: [],                                     
      northernrock: [], 
      coop: [],          
    },
    onSubmit: (...values) => {    
     fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-plevin", ...values})
      })
      .then((response) => {
        navigate("/thank-you/")
      })
      .catch(error => alert(error));
    } 
  })

  const [formStep, setFormStep] = React.useState(0)
  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }

  return (

  <Layout>

              <form  
                  name="contact-plevin"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  hidden
                >  
                
                <label htmlFor="checkbox" className="mr-2">Lloyds:</label>
                <input
                    type="checkbox"
                    id="lloyds"
                    name="lloyds"
                    value="yes"   
                    onChange={formik.handleChange}             
                  />    
                <label htmlFor="checkbox" className="mr-2">Barclays:</label>
                <input
                    type="checkbox"
                    id="barclays"                    
                    name="barclays"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Barclaycard:</label>
                <input
                    type="checkbox"
                    id="barclaycard"                    
                    name="barclaycard"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Natwest:</label>
                <input
                    type="checkbox"
                    id="natwest"                    
                    name="natwest"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">RBS:</label>
                <input
                    type="checkbox"
                    id="rbs"                    
                    name="rbs"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">TSB:</label>
                <input
                    type="checkbox"
                    id="tsb"                    
                    name="tsb"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Halifax:</label>
                <input
                    type="checkbox"
                    id="halifax"                    
                    name="halifax"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Bank of Scotland:</label>
                <input
                    type="checkbox"
                    id="bankofscotland"                    
                    name="bankofscotland"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">HSBC:</label>
                <input
                    type="checkbox"
                    id="hsbc"                    
                    name="hsbc"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Capital One:</label>
                <input
                    type="checkbox"
                    id="capitalone"                    
                    name="capitalone"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">MBNA:</label>
                <input
                    type="checkbox"
                    id="mbna"                    
                    name="mbna"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">EGG:</label>
                <input
                    type="checkbox"
                    id="egg"                    
                    name="egg"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Mint:</label>
                <input
                    type="checkbox"
                    id="mint"                    
                    name="mint"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Clydesdale Bank:</label>
                <input
                    type="checkbox"
                    id="clydesdale"                    
                    name="clydesdale"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Yorkshire Bank:</label>
                <input
                    type="checkbox"
                    id="yorkshire"                    
                    name="yorkshire"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">M&amp;S Bank:</label>
                <input
                    type="checkbox"
                    id="mands"                    
                    name="mands"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Santander:</label>
                <input
                    type="checkbox"
                    id="santander"                    
                    name="santander"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Alliance &amp; Leicester:</label>
                <input
                    type="checkbox"
                    id="alliance"                    
                    name="alliance"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Abbey National:</label>
                <input
                    type="checkbox"
                    id="abbey"                    
                    name="abbey"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Black Horse:</label>
                <input
                    type="checkbox"
                    id="blackhorse"                    
                    name="blackhorse"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Northern Rock:</label>
                <input
                    type="checkbox"
                    id="northernrock"                    
                    name="northernrock"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                <label htmlFor="checkbox" className="mr-2">Co-operative Bank:</label>
                <input
                    type="checkbox"
                    id="coop"                    
                    name="coop"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
                                                              
              <label htmlFor="title" class="mr-2">Title:</label>
                <select name="title">
                <option value="title">Title</option>                  
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>

              <label htmlFor="name" class="mr-2">First Name:</label>
              <input
                type="text"
                id="firstName"                
                name="firstName"
                placeholder="Enter your first name"             
              /> 

              <label htmlFor="lastname" class="mr-2">Last Name:</label>
              <input
                type="text"
                id="lastName"                
                name="lastName"
                placeholder="Enter your last name"                
              />     

              <label htmlFor="dob"  class="mr-2">Date of Birth:</label>
              <input   
                type="date"
                id="dob"                
                name="dob"                
              />    

              <label htmlFor="address" class="mr-2">Your Address:</label>
              <input   
                type="text"
                id="address"                
                name="address"
                placeholder="Your Address"                
              />                   

              <label htmlFor="email"  class="mr-2">Email:</label>
              <input   
                type="email"
                id="email"                
                name="email"
                placeholder="Enter your email"                
              />  

              <label htmlFor="tel"  class="mr-2">Telephone:</label>
              <input   
                type="tel"
                id="tel"                
                name="tel"
                placeholder="Enter your number"                

              />  

                <label htmlFor="checkbox" className="mr-2">By clicking the box and entering your email address &amp; phone number you agree to our Privacy Policy and terms and conditions and to be contacted both by email &amp; phone. Message and data rates apply.</label>
                <input
                    type="checkbox"
                    id="privacy"                    
                    name="privacy"
                    value="yes"                
                  />      

      <button className="btn-green" type="submit">Submit</button>                                                     
    </form>




    <div class="container mx-auto">
      <h1>Start your free online Plevin Check Now</h1>
      <p>Answer the quick questions below to see if you may have a claim</p> 
      <form
        name="contact-plevin"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"        
      >  
      <input type="hidden" name="form-name" value="contact-plevin" />     

      {formStep === 0 && (     
          <section className="section">
            <h1>Have you had PPI before?</h1>
            <button onClick={completeFormStep} className="btn-blue" type="button">Yes</button>    
            <button className="btn-blue" type="button">NO</button>    
          </section>

      )} 

      {formStep === 1 && (         
          <section className="section">
            <h1>Please select the banks you had PPI with:</h1>              
 
            <div class="grid grid-cols-2 gap-4">
              <div> 
                <label htmlFor="checkbox" className="mr-2">Lloyds:</label>
                <input
                    type="checkbox"
                    id="lloyds"
                    name="lloyds"
                    value="yes"                
                    onChange={formik.handleChange}
                  />    
              </div>  
              <div>
                <label htmlFor="checkbox" className="mr-2">Barclays:</label>
                <input
                    type="checkbox"
                    id="barclays"                    
                    name="barclays"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>

              <div>
                <label htmlFor="checkbox" className="mr-2">Barclaycard:</label>
                <input
                    type="checkbox"
                    id="barclaycard"                    
                    name="barclaycard"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>

              <div>
                <label htmlFor="checkbox" className="mr-2">Natwest:</label>
                <input
                    type="checkbox"
                    id="natwest"                    
                    name="natwest"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">RBS:</label>
                <input
                    type="checkbox"
                    id="rbs"                    
                    name="rbs"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>                

              <div>
                <label htmlFor="checkbox" className="mr-2">TSB:</label>
                <input
                    type="checkbox"
                    id="tsb"                    
                    name="tsb"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">Halifax:</label>
                <input
                    type="checkbox"
                    id="halifax"                    
                    name="halifax"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Bank of Scotland:</label>
                <input
                    type="checkbox"
                    id="bankofscotland"                    
                    name="bankofscotland"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">HSBC:</label>
                <input
                    type="checkbox"
                    id="hsbc"                    
                    name="hsbc"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Capital One:</label>
                <input
                    type="checkbox"
                    id="capitalone"                    
                    name="capitalone"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">MBNA:</label>
                <input
                    type="checkbox"
                    id="mbna"                    
                    name="mbna"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">EGG:</label>
                <input
                    type="checkbox"
                    id="egg"                    
                    name="egg"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">Mint:</label>
                <input
                    type="checkbox"
                    id="mint"                    
                    name="mint"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Clydesdale Bank:</label>
                <input
                    type="checkbox"
                    id="clydesdale"                    
                    name="clydesdale"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>   

              <div>
                <label htmlFor="checkbox" className="mr-2">Yorkshire Bank:</label>
                <input
                    type="checkbox"
                    id="yorkshire"                    
                    name="yorkshire"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">M&amp;S Bank:</label>
                <input
                    type="checkbox"
                    id="mands"                    
                    name="mands"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">Santander:</label>
                <input
                    type="checkbox"
                    id="santander"                    
                    name="santander"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Alliance &amp; Leicester:</label>
                <input
                    type="checkbox"
                    id="alliance"                    
                    name="alliance"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>  


              <div>
                <label htmlFor="checkbox" className="mr-2">Abbey National:</label>
                <input
                    type="checkbox"
                    id="abbey"                    
                    name="abbey"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">Black Horse:</label>
                <input
                    type="checkbox"
                    id="blackhorse"                    
                    name="blackhorse"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Northern Rock:</label>
                <input
                    type="checkbox"
                    id="northernrock"                    
                    name="northernrock"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>   

              <div>
                <label htmlFor="checkbox" className="mr-2">Co-operative Bank:</label>
                <input
                    type="checkbox"
                    id="coop"                    
                    name="coop"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>    

            </div>                                                                    
            <button onClick={completeFormStep} className="btn-blue" type="button">Next step</button>    
          </section>  
      )}

      {formStep === 2 && (  
          <section className="section">
            <div class="grid grid-flow-row grid-col-3 gap-4">

              <div>
              <label htmlFor="title" class="mr-2">Title:</label>
                <select value={formik.values.title} onChange={formik.handleChange} name="title">
                <option value="title">Title</option>                  
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </div>

              <div>
              <label htmlFor="firstName" class="mr-2">First Name:</label>
              <input
                type="text"
                id="firstName"                
                name="firstName"
                placeholder="Enter your first name"
                onChange={formik.handleChange}
                value={formik.values.firstName}                
              /> 
              </div>

              <div>
              <label htmlFor="lastName" class="mr-2">Last Name:</label>
              <input
                type="text"
                id="lastName"                
                name="lastName"
                placeholder="Enter your last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}                   
              />  
              </div>    

              <div>
              <label htmlFor="dob"  class="mr-2">Date of Birth:</label>
              <input   
                type="date"
                id="dob"                
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}                  
              />  
              </div>    

              <div>
              <label htmlFor="address" class="mr-2">Your Address:</label>
              <input   
                type="text"
                id="address"                
                name="address"
                placeholder="Your Address"
                onChange={formik.handleChange}
                value={formik.values.address}                  
              />  
              </div>                    

            </div>
            <button onClick={completeFormStep} className="btn-blue" type="button">Next step</button>     
          </section>  
      )}

      {formStep === 3 && (    
          <section className="section">
            <div class="grid grid-flow-row grid-col-3 gap-4"> 

              <div>
              <label htmlFor="email"  class="mr-2">Email:</label>
              <input   
                type="email"
                id="email"                
                name="email"
                placeholder="Enter your email"                
                onChange={formik.handleChange}
                value={formik.values.email}
              />  
              </div> 

              <div>
              <label htmlFor="tel"  class="mr-2">Telephone:</label>
              <input   
                type="tel"
                id="tel"                
                name="tel"
                placeholder="Enter your number"                
                onChange={formik.handleChange}
                value={formik.values.tel}

              />  
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">By clicking the box and entering your email address &amp; phone number you agree to our Privacy Policy and terms and conditions and to be contacted both by email &amp; phone. Message and data rates apply.</label>
                <input
                    type="checkbox"
                    id="privacy"                    
                    name="privacy"
                    value="yes"                
                    onChange={formik.handleChange}
                  />   
              </div>                                       

            </div>
            <button className="btn-green" type="submit">Submit</button>    
          </section>            
      )}

      <pre>{JSON.stringify(formik.values, null, 4)}</pre>
    </form>
   


    </div>

  </Layout>
)

  }

export default IndexPage

