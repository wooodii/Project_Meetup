import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
const dummy_meetups = [
  {
    id : "m1",
    title : 'first',
    img : 'dd',
    adress : "dd",
    description : 'some adress' ,
  },
  {
    id : "m1",
    title : '두번째t',
    img : 'dd',
    adress : "dd",
    description : 'some adress' ,
  },
  {
    id : "m1",
    title : '세번째',
    img : 'dd',
    adress : "dd",
    description : 'some adress' ,
  },
]
function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // 서버에서 데이터 가져오기 연습 
  // useEffect는 컴포넌트 함수가 실행되고 난 이후에, 실행되는 방식으로 작동함 
  // 컴포넌트 렌더링이 두번 일어남 
  // next.js는 사전 렌더링 된 페이지를 반환하기 때문에 서버에서 백엔드 데이터를 받아오기 전에는 빈 페이지를 받아옴 
  // 다 받아왔을 때, next.js 에 알릴 수 있도록 설정 

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(dummy_meetups); 
  // }, []);

  return <Layout>
    <MeetupList meetups={props.meetups}/>
  </Layout> 
}

//  페이지 컴포넌트 안에서만 가능 
//  1) 정적 렌더링
// next는 promise가 해결될 때 까지 기다림 
// 사전 렌더링 하기 전에 빌드 프로세스 중에 아래 코드 실행
// 클라이언트쪽에서 업데이트가 되었을 때 모를 수 있는 문제점 : 다시 빌드해야 함 
// 장점 : 데이터 변동이 크게 없다면, 더 빠르게 사용가능 (캐시)
export async function getStaticProps() {
  // fetch data from an API 
  return {
    props : {
      meetups : dummy_meetups
    },
    revalidate : 1
    // 이 페이지에 요청(뉴 data)이 들어오면 10초마다 서버에서 페이지를 다시 생성
    // 3600 : 1시간  
  };
}

// 2) 동적 페이지
// 빌드 프로세스 중에는 실행되지 않음 => 배열 다음 서버에서 실행
// export async function getServerSideProps(context) {
  
//   const req = context.req; // 요청
//   const res = context.res; // 응답

//   return {
//     props : {
//       meetups : dummy_meetups
//     }
//   }
// }

export default HomePage