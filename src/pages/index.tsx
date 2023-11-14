import { Josefin_Sans, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'

import userInfo from '../../user_info.json'
import Footer from '../components/Footer'
import AnimatedLogo from '../components/Avatar'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faOrcid } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

// fontawesome settings
config.autoAddCss = false

const CJK_Sans = Noto_Sans_SC({ subsets: ['latin-ext', 'latin'] });
const CJK_Serif = Noto_Serif_SC({ subsets: ["latin"], weight: ["600"] });
const Name_Font = Josefin_Sans({ subsets: ['latin'], weight: ["700"] });
const Link_Font = Josefin_Sans({ subsets: ['latin'], weight: ["400"] });

const color_to_list = ["via-indigo-500", "via-cyan-500", "via-blue-500", "via-sky-500", "via-purple-500", "via-teal-500"]
const color_via_list = ["to-indigo-500", "to-cyan-500", "to-blue-500", "to-sky-500", "to-purple-500", "to-teal-500"]

const color_schemes = [
  "from-white via-sky-300 to-teal-300",
  "from-white via-teal-500 to-sky-500",
  "from-blue-200 to-teal-100",
  "from-[#8EC5FC] to-[#E0C3FC]",
  "from-[#8BC6EC] to-[#9599E2]",
  "from-teal-200 via-[#FFD28F] to-[#83A2FF]",
  "from-[#DDF2FD] to-[#427D9D]",
];

const pick_color_scheme = () => {
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()
  const index = (hour * 3600 + minute * 60 + second) % color_schemes.length
  return color_schemes[index]  
}

const Home = (props: any) => {
  return (
    <main
      className={`${CJK_Sans.className} bg-gradient-to-r ${props.colors} h-screen w-screen flex`}
    >

      <Head>
        <title>{props.userTitle}</title>
        <meta name="description" content={props.userDescription} />

        <meta property="og:title" content={props.userTitle} />
        <meta property="og:description" content={props.userDescription} />
        <meta property="og:type" content="website" />

        {
          props.userLinks.map((link: any) => (
            <link rel="preconnect" key={link.name} href={link.url}></link>
          ))
        }
      </Head>

      <div className='m-auto justify-center w-screen'>
        <header className="h-6 w-full"></header>

        <div className="infoCard m-auto backdrop-blur bg-white/70 rounded shadow-2xl">
          <AnimatedLogo />

          <h1 className={`name ${Name_Font.className} text-center py-3`}>{props.userName}</h1>

          <div className={`${CJK_Serif.className} motto text-center tracking-[0.5rem] py-6`}>
            {props.userMotto}
          </div>

          <div className={`links text-center pt-6 pb-12 ${Link_Font.className}`}>
            {
              props.userLinks.map((link: any) => (
                <a
                  href={link.url}
                  key={link.name}
                  className='transition duration-500 link px-5 pt-4 pb-3 mx-4 text-lg uppercase tracking-widest rounded align-middle border-solid opacity-20 hover:opacity-100 border border-black hover:shadow-xl'
                >
                  {link.name}
                </a>
              ))
            }
          </div>

          <div className='socialLinks pb-10'>
            {
              props.userSocials.github && (
                <a
                  href={props.userSocials.github.url}
                  aria-label={`Link to ${props.userName}'s GitHub`}
                  target="_blank"
                  className='social w-8 transition duration-500 opacity-20 hover:opacity-100 px-5'
                >
                  <FontAwesomeIcon size="2x" icon={faGithub} />
                </a>
              )
            }
            {
              props.userSocials.linkedin && (
                <a
                  href={props.userSocials.linkedin.url}
                  aria-label={`Link to ${props.userName}'s Linkedin`}
                  target="_blank"
                  className='social w-8 transition duration-500 opacity-20 hover:opacity-100 px-5'
                >
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </a>
              )
            }
            {
              props.userSocials.orcid && (
                <a
                  href={props.userSocials.orcid.url}
                  aria-label={`Link to ${props.userName}'s ORCID`}
                  target="_blank"
                  className='social w-8 transition duration-500 opacity-20 hover:opacity-100 px-5'
                >
                  <FontAwesomeIcon size="2x" icon={faOrcid} />
                </a>
              )
            }
          </div>
        </div>
        <Footer user={props.userName} userFooter={props.userFooter} />
      </div>
    </main>
  )
}

Home.getInitialProps = async () => {
  return {
    userTitle: userInfo.title as String,
    userDescription: userInfo.description as String,
    userName: userInfo.name as String,
    userMotto: userInfo.motto as String,
    userSocials: userInfo.socials,
    userLinks: userInfo.links as Array<any>,
    userFooter: userInfo.footer as String,
    colors: pick_color_scheme()
  }
}

export default Home;