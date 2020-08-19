import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [quotes, setQuotes] = React.useState(null);
  
  const getQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const result = await response.json();
    setQuotes(result);
  }
  
  React.useEffect(() => {
    getQuote()
  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Hi from the contact page</h1>
      {/* insert photo */}
      <h3>Sunny Kim</h3>
      <p>Enthusiastic about bringing life and joy to events, Sunny takes pride in her work and producing fun and cute decor for various occasions. She is especially experienced in decorating for kids' birthday parties and graduation celebrations. Combining her easy-going personality and passion for assembling creative decorations, Sunny is definitely someone you can depend on to bring your kids' parties to life!</p>
      <h3>Thank you for dropping by, please enjoy a inspirational quote before you go!</h3>
      {quotes ? 
        <div style={{textAlign: `center`}}>
          <h4>
            {quotes[Math.floor(Math.random() * quotes.length)].text}
          </h4>
          <p>
            By: {quotes[Math.floor(Math.random() * quotes.length)].author}
          </p> 
        </div>: 'not working'
      }
    </Layout>
  )
}

export default SecondPage
