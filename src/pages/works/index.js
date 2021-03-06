import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { withI18next } from "gatsby-plugin-i18next"
import { withNamespaces } from "react-i18next"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import structuredData from "../../configs/structuredData"
import "../../style/work.scss"

const VisibilitySensor = require("react-visibility-sensor").default

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      ghowaIsInViewport: false,
      meracleIsInViewport: false,
      hereIsInViewport: false,
      bonerpIsInViewport: false,
    }
  }
  onChangeVisibility1 = isActive => {
    this.setState({ active1: isActive })
  }
  onChangeVisibility2 = isActive => {
    this.setState({ active2: isActive })
  }
  onChangeVisibility3 = isActive => {
    this.setState({ active3: isActive })
  }
  onChangeVisibility4 = isActive => {
    this.setState({ active4: isActive })
  }
  onChangeVisibility5 = isActive => {
    this.setState({ active5: isActive })
  }

  initIsInViewport = elem => {
    if (elem) {
      var bounding = elem.getBoundingClientRect()
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  }
  componentDidMount() {
    this.setState({
      codioIsInViewport: this.initIsInViewport(
        document.getElementsByClassName("timeline-content")[0]
      ),
      ghowaIsInViewport: this.initIsInViewport(
        document.getElementsByClassName("timeline-content")[1]
      ),
      meracleIsInViewport: this.initIsInViewport(
        document.getElementsByClassName("timeline-content")[2]
      ),
      hereIsInViewport: this.initIsInViewport(
        document.getElementsByClassName("timeline-content")[3]
      ),
      bonerpIsInViewport: this.initIsInViewport(
        document.getElementsByClassName("timeline-content")[4]
      ),
    })
  }
  render() {
    const { t, data } = this.props
    // console.log(data)
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work - Xinhe Hsu</title>
          <meta
            name="description"
            content="A Web Developer, always keeping up with new trends in tech."
          />
          <meta
            name="keywords"
            content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發"
          />
        </Helmet>
        <div id="work-page">
          <p className="page-title">WORK</p>
          <hr />
          <p className="page-desc">
            I spent most of the time on web development.
          </p>
          <ul className="timeline-blocks-container">
            <VisibilitySensor
              offset={{ top: -200 }}
              partialVisibility={true}
              onChange={this.onChangeVisibility5}
              active={!this.state.active5}
            >
              {({ isVisible }) => {
                return (
                  <li className="timeline-milestone">
                    <div
                      className={
                        isVisible
                          ? "timeline-date in_viewport"
                          : "timeline-date"
                      }
                    >
                      <p>06/2019</p>
                      <p>- {t("present")}</p>
                    </div>
                    <Link to={this.props.location.pathname + "/codio"}>
                      <div
                        className={
                          isVisible
                            ? "timeline-content in_viewport"
                            : "timeline-content"
                        }
                      >
                        <Img
                          fluid={data.codio.childImageSharp.fluid}
                          className="project-img"
                        />
                        <div className="project-desc-container">
                          <p className="project-title">Codio</p>
                          <p className="project-desc">{t("codio_desc")}</p>
                          <div className="project-detail">
                            <div>
                              <p className="project-role-title">
                                {t("role")}：
                              </p>
                              <label className="role">
                                {t("web_front_end_dev")}
                              </label>
                            </div>
                            <div>
                              <p className="project-program-title">
                                {t("program_lang")}：
                              </p>
                              <label className="programming_language">
                                React.js
                              </label>
                              <label className="programming_language">
                                Redux
                              </label>
                              <label className="programming_language">
                                Redux-Thunk
                              </label>
                              <label className="programming_language">
                                SCSS
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }}
            </VisibilitySensor>
            <VisibilitySensor
              offset={{ top: -200 }}
              partialVisibility={true}
              onChange={this.onChangeVisibility4}
              active={!this.state.active4}
            >
              {({ isVisible }) => {
                return (
                  <li className="timeline-milestone">
                    <div
                      className={
                        isVisible
                          ? "timeline-date in_viewport"
                          : "timeline-date"
                      }
                    >
                      <p>11/2018</p>
                      <p>- 05/2019</p>
                    </div>
                    <Link to={this.props.location.pathname + "/ghowa"}>
                      <div
                        className={
                          isVisible
                            ? "timeline-content in_viewport"
                            : "timeline-content"
                        }
                      >
                        <Img
                          fluid={data.ghowa.childImageSharp.fluid}
                          className="project-img"
                        />
                        <div className="project-desc-container">
                          <p className="project-title">Ghowa</p>
                          <p className="project-desc">{t("ghowa_desc")}</p>
                          <div className="project-detail">
                            <div>
                              <p className="project-role-title">
                                {t("role")}：
                              </p>
                              <label className="role">
                                {t("back_end_dev")}
                              </label>
                            </div>
                            <div>
                              <p className="project-program-title">
                                {t("program_lang")}：
                              </p>
                              <label className="programming_language">
                                Node.js
                              </label>
                              <label className="programming_language">
                                Express.js
                              </label>
                              <label className="programming_language">
                                MySQL
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }}
            </VisibilitySensor>
            <VisibilitySensor
              offset={{ top: -200 }}
              partialVisibility={true}
              onChange={this.onChangeVisibility3}
              active={!this.state.active3}
            >
              {({ isVisible }) => {
                return (
                  <li className="timeline-milestone">
                    <div
                      className={
                        isVisible
                          ? this.state.meracleIsInViewport
                            ? "timeline-date in_viewport delay600ms"
                            : "timeline-date in_viewport"
                          : "timeline-date"
                      }
                    >
                      <p>08/2017</p>
                      <p>- 12/2017</p>
                    </div>
                    <Link to={this.props.location.pathname + "/meracle"}>
                      <div
                        className={
                          isVisible
                            ? this.state.meracleIsInViewport
                              ? "timeline-content in_viewport delay600ms"
                              : "timeline-content in_viewport"
                            : "timeline-content"
                        }
                      >
                        {/* <img src={meracle} className="project-img" /> */}
                        <Img
                          fluid={data.meracle.childImageSharp.fluid}
                          className="project-img"
                        />
                        <div className="project-desc-container">
                          <p className="project-title">{t("meracle")}</p>
                          <p className="project-desc">{t("meracle_desc")}</p>
                          <div className="project-detail">
                            <div>
                              <p className="project-role-title">
                                {t("role")}：
                              </p>
                              <label className="role">
                                {t("web_front_end_dev")}
                              </label>
                            </div>
                            <div>
                              <p className="project-program-title">
                                {t("program_lang")}：
                              </p>
                              <label className="programming_language">
                                React.js
                              </label>
                              <label className="programming_language">
                                Redux
                              </label>
                              <label className="programming_language">
                                SCSS
                              </label>
                              <label className="programming_language">
                                JavaScript
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }}
            </VisibilitySensor>
            <VisibilitySensor
              offset={{ top: -200 }}
              partialVisibility={true}
              onChange={this.onChangeVisibility2}
              active={!this.state.active2}
            >
              {({ isVisible }) => {
                return (
                  <li className="timeline-milestone">
                    <div
                      className={
                        isVisible
                          ? this.state.hereIsInViewport
                            ? "timeline-date in_viewport delay1200ms"
                            : "timeline-date in_viewport"
                          : "timeline-date"
                      }
                    >
                      <p>03/2017</p>
                      <p>- 05/2017</p>
                    </div>
                    <Link to={this.props.location.pathname + "/here"}>
                      <div
                        className={
                          isVisible
                            ? this.state.hereIsInViewport
                              ? "timeline-content in_viewport delay1200ms"
                              : "timeline-content in_viewport"
                            : "timeline-content"
                        }
                      >
                        <Img
                          fluid={data.here.childImageSharp.fluid}
                          className="project-img"
                        />
                        <div className="project-desc-container">
                          <p className="project-title">{t("here")}</p>
                          <p className="project-desc">{t("here_desc")}</p>
                          <div className="project-detail">
                            <div>
                              <p className="project-role-title">
                                {t("role")}：
                              </p>
                              <label className="role">
                                {t("web_front_end_dev")}
                              </label>
                            </div>
                            <div>
                              <p className="project-program-title">
                                {t("program_lang")}：
                              </p>
                              <label className="programming_language">
                                HTML
                              </label>
                              <label className="programming_language">
                                CSS
                              </label>
                              <label className="programming_language">
                                Bootstrap
                              </label>
                              <label className="programming_language">
                                jQuery
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }}
            </VisibilitySensor>
            <VisibilitySensor
              offset={{ top: -200 }}
              partialVisibility={true}
              onChange={this.onChangeVisibility1}
              active={!this.state.active1}
            >
              {({ isVisible }) => {
                return (
                  <li className="timeline-milestone">
                    <div
                      className={
                        isVisible
                          ? this.state.bonerpIsInViewport
                            ? "timeline-date in_viewport delay1800ms"
                            : "timeline-date in_viewport"
                          : "timeline-date"
                      }
                    >
                      <p>01/2017</p>
                      <p>- 03/2017</p>
                    </div>
                    <Link to={this.props.location.pathname + "/bonerp"}>
                      <div
                        className={
                          isVisible
                            ? this.state.bonerpIsInViewport
                              ? "timeline-content in_viewport delay1800ms"
                              : "timeline-content in_viewport"
                            : "timeline-content"
                        }
                      >
                        <Img
                          fluid={data.bonerp.childImageSharp.fluid}
                          className="project-img"
                        />
                        <div className="project-desc-container">
                          <p className="project-title">BonERP</p>
                          <p className="project-desc">{t("bonerp_desc")}</p>
                          <div className="project-detail">
                            <div>
                              <p className="project-role-title">
                                {t("role")}：
                              </p>
                              <label className="role">
                                {t("web_front_end_dev")}
                              </label>
                              <label className="role">
                                {t("back_end_dev")}
                              </label>
                            </div>
                            <div>
                              <p className="project-program-title">
                                {t("program_lang")}：
                              </p>
                              <label className="programming_language">
                                .NET MVC 5
                              </label>
                              <label className="programming_language">
                                MS SQL Server
                              </label>
                              <label className="programming_language">
                                HTML
                              </label>
                              <label className="programming_language">
                                CSS
                              </label>
                              <label className="programming_language">
                                Bootstrap
                              </label>
                              <label className="programming_language">
                                jQuery
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }}
            </VisibilitySensor>
          </ul>

          <div className="email-me">
            <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
          </div>
        </div>
        <p className="copyright">© Xinhe Hsu 2020.</p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData.works)}`,
          }}
        />
      </Layout>
    )
  }
}

export default withI18next()(withNamespaces("translation")(Work))
export const query = graphql`
  query {
    codio: file(relativePath: { eq: "codio.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ghowa: file(relativePath: { eq: "ghowa.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meracle: file(relativePath: { eq: "meracle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    here: file(relativePath: { eq: "here.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bonerp: file(relativePath: { eq: "bonerp.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
