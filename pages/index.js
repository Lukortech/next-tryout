import Layout from "../components/Layout";

// NetlifyCMS config
import CMS from 'netlify-cms-app'
CMS.init()
CMS.registerPreviewTemplate('my-template', MyTemplate)

const Home = () => (<Layout>
    <>hello world</>
    </Layout>);

export default Home;