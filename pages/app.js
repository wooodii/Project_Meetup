// 최상위로 작동
// 일반 컴포넌트를 유지하기 쉽게 최상위 컴포넌트에 레이아웃을 적용해서 사용
//  근데 얘가 인식이 안됨

import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
 </Layout>
}

export default MyApp
