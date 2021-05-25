import * as React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Help from "../components/Products/Curve/Help";
import Curve from "../components/Products/Curve"
import Increase from "../components/Home/Increase";
import First from "../components/Home/First";

import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Products" />
      <Head data={"MathGaps Products"} />
      <Help />
      {/* <Algorithm />
      <Report />
      <Program />
      <Assistant /> */}
      <Curve/>
      <Increase />
      <First />
    </Layout>
  </>
);

export default IndexPage;
