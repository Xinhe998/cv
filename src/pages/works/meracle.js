import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import Lightbox from "react-images"
import { Helmet } from "react-helmet"
import { withI18next } from "gatsby-plugin-i18next"
import { withNamespaces, Trans } from "react-i18next"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import meracle_1 from "../../Assets/meracle-1.png"
import meracle_2 from "../../Assets/meracle-2.png"
import meracle_app_1 from "../../Assets/meracle-app-1.png"
import meracle_app_2 from "../../Assets/meracle-app-2.png"
import meracle_app_3 from "../../Assets/meracle-app-3.png"

import structuredData from "../../configs/structuredData"
import "../../style/work.scss"
import "../../style/work_detail.scss"

class Meracle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      lightbox_current_img: 0,
      lightbox2IsOpen: false,
      lightbox2_current_img: 0,
    }
    this.handleScroll = this.listenScrollEvent.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent, true)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent, true)
    var container = document.getElementById("work-detail-container")
    container.classList.remove("notransition")
  }
  listenScrollEvent = () => {
    var container = document.getElementById("work-detail-container")

    var header = document.getElementById("be-header-when-scroll")
    var sticky = document.querySelector(".project-desc-container").offsetTop
    var h = document.querySelector(".project-desc-container").offsetHeight
    var isMobile = typeof window !== "undefined" && window.innerWidth < 960
    if (window.pageYOffset > sticky + h) {
      if (!isMobile) {
        container.classList.add("notransition")
        header.classList.add("sticky")
      }
      // document.querySelector(".project-detail_content").style.marginTop = '150px';
    } else {
      if (!isMobile) header.classList.remove("sticky")
      // document.querySelector(".project-detail_content").style.marginTop = '38px';
    }
  }
  openLightbox = img_index => {
    this.setState({
      lightboxIsOpen: true,
      lightbox_current_img: img_index,
    })
  }
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    })
  }
  lightboxGotoPrevious = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img - 1,
    })
  }
  lightboxGotoNext = () => {
    this.setState({
      lightbox_current_img: this.state.lightbox_current_img + 1,
    })
  }
  openLightbox2 = img_index => {
    this.setState({
      lightbox2IsOpen: true,
      lightbox2_current_img: img_index,
    })
  }
  closeLightbox2 = () => {
    this.setState({
      lightbox2IsOpen: false,
    })
  }
  lightbox2GotoPrevious = () => {
    this.setState({
      lightbox2_current_img: this.state.lightbox2_current_img - 1,
    })
  }
  lightbox2GotoNext = () => {
    this.setState({
      lightbox2_current_img: this.state.lightbox2_current_img + 1,
    })
  }
  render() {
    const { t, data } = this.props
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Meracle - Xinhe Hsu</title>
          <meta
            name="description"
            content="A Web Developer, always keeping up with new trends in tech."
          />
          <meta
            name="keywords"
            content="工程師,前端,網頁,React,JavaScript,CSS,GatsbyJS,作品集,履歷,軟體開發"
          />
        </Helmet>
        <div
          id="work-detail-container"
          onScroll={this.listenScrollEvent.bind(this)}
        >
          <Img
            fluid={data.meracle.childImageSharp.fluid}
            className="project-img"
          />
          <div className="project-desc-container">
            <div id="be-header-when-scroll">
              <Link to="/works">
                <div className="close-btn" />
              </Link>
              <p className="project-title">{t("meracle")}</p>
            </div>

            <p className="project-desc">{t("meracle_desc")} </p>
            <div className="project-detail">
              <div>
                <p className="project-role-title">{t("role")}：</p>
                <label className="role">{t("web_front_end_dev")}</label>
              </div>
              <div>
                <p className="project-program-title">{t("program_lang")}：</p>
                <label className="programming_language">React.js</label>
                <label className="programming_language">Redux</label>
                <label className="programming_language">SCSS</label>
                <label className="programming_language">JavaScript</label>
              </div>
            </div>
          </div>
          <div className="project-detail_content">
            <h1>{t("project_overview")}</h1>
            <p>{t("meracle_overview1")}</p>
            <p>4 {t("months")} (08/2017 - 12/2017)</p>
            <h1>{t("project_brief")}</h1>
            <p>
              <Trans i18nKey="meracle_brief1">
                Meracle is
                <b>
                  a platform that trains and tracks memory for young-learners.
                </b>
                It captures brain wave by Neurosky MindWave Mobile Headset,
                quantizes the working memory with algorithm, and provides
                various charts and data for parents. Meracle aims to improve the
                working memory for young-learners.
              </Trans>
              <br />
              {t("meracle_brief2")}
            </p>
            <h1>{t("at_a_glance")}</h1>
            <p>Web</p>
            <div className="image-group">
              <Lightbox
                images={[{ src: meracle_1 }, { src: meracle_2 }]}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={() => this.lightboxGotoPrevious()}
                onClickNext={() => this.lightboxGotoNext()}
                onClose={() => this.closeLightbox()}
                currentImage={this.state.lightbox_current_img}
                backdropClosesModal={true}
                enableKeyboardInput={true}
                showImageCount={false}
              />
              <img
                src={meracle_1}
                className="web-screenshot"
                onClick={() => this.openLightbox(0)}
              />
              <img
                src={meracle_2}
                className="web-screenshot"
                onClick={() => this.openLightbox(1)}
              />
            </div>
            <p>App</p>
            <div className="image-group">
              <Lightbox
                images={[
                  { src: meracle_app_1 },
                  { src: meracle_app_2 },
                  { src: meracle_app_3 },
                ]}
                isOpen={this.state.lightbox2IsOpen}
                onClickPrev={() => this.lightbox2GotoPrevious()}
                onClickNext={() => this.lightbox2GotoNext()}
                onClose={() => this.closeLightbox2()}
                currentImage={this.state.lightbox2_current_img}
                backdropClosesModal={true}
                enableKeyboardInput={true}
                showImageCount={false}
              />
              <img
                src={meracle_app_1}
                className="app-screenshot"
                onClick={() => this.openLightbox2(0)}
              />
              <img
                src={meracle_app_2}
                className="app-screenshot"
                onClick={() => this.openLightbox2(1)}
              />
              <img
                src={meracle_app_3}
                className="app-screenshot"
                onClick={() => this.openLightbox2(2)}
              />
            </div>
            <h1>{t("motivation_and_solution")}</h1>
            <p>{t("meracle_motivation")}</p>
            <h1>{t("outcome")}</h1>
            <p>
              <b>{t("awards")}</b>
            </p>
            <ul>
              <li>
                <b>{t("first_prize")},</b>{" "}
                {t("project_information_distribution_science")}, 2017
              </li>
              <li>
                <b>{t("third_prize")},</b> {t("innoserve")}:
                {t("titansoft_agile")}, 2017
              </li>
              <li>
                <b>{t("honorable_mention")},</b> {t("innoserve")}:
                {t("campus_4g")}, 2017
              </li>
              <li>
                <b>{t("honorable_mention")},</b>{" "}
                {t("web_app_creative_competition")}, 2017
              </li>
            </ul>
          </div>
          <h1 className="sp-block">
            <strong>．．．</strong>
          </h1>
          <div className="email-me">
            <p>{t("sent_me_email_in_project_page")}</p>
            <a href="mailto:xinhe998@gmail.com">xinhe998@gmail.com</a>
          </div>
          <div className="navigate-project-btn-container">
            <Link to="works/ghowa"> ← {t("prev_project")}</Link>
            <Link to="works/here">{t("next_project")} → </Link>
          </div>
        </div>
        <p className="copyright">© Xinhe Hsu 2020.</p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData.meracle)}`,
          }}
        />
      </Layout>
    )
  }
}

export default withI18next()(withNamespaces("translation")(Meracle))
export const query = graphql`
  query {
    meracle: file(relativePath: { eq: "meracle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meracle_app_1: file(relativePath: { eq: "meracle-app-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meracle_app_2: file(relativePath: { eq: "meracle-app-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meracle_app_3: file(relativePath: { eq: "meracle-app-3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
