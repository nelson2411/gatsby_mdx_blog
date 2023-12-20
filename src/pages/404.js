import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>
          Has your journey been consumed by the Dark Side? Seek the light
          through the Force and return to the safety of the Home Page.
        </h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
