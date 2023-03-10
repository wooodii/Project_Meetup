
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from 'mongodb';
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
    return <>
    <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta 
        name="description" 
        // 검색결과로 나타나는 웹 내용 
        content={props.meetupData.description}></meta>
    </Head>
    <MeetupDetail
        image={props.meetupData.image} 
        title={props.meetupData.title} 
        adress={props.meetupData.adress} 
        description={props.meetupData.description}/>
    </Fragment>
    </>
}

export async function getStaticPaths() {
   // next.js 가 모든 동적 페이지의 pre generate가 필요함 
   // db에서 지원하는 id 패치하기
   const client = await MongoClient.connect(
       'mongodb+srv://new_user_1:rlawlgus112@cluster0.nyhewhd.mongodb.net/meetups?retryWrites=true&w=majority');
   
    const db = client.db(); // db를 통해서 meetupdata 가 생성
   const meetupsCollention = db.collection('meetups');
   const meetups = await meetupsCollention.find({}, {_id :1 }).toArray();
   client.close();

   return {
       fallback : false , // 서버에서 요청이 들어오는 id로 페이지를 만듦(특정 path를 정의 ,ture일 경우)
       paths : meetups.map(meetup => ({
        params : {meetupId : meetup._id.toString()}
    })),
    }
}

// 데이터가 얼마나 자주 바뀌는지, 요청 객체에 얼마나 접속하는지 확인 
// 밋업 데이터는 자주 바뀌지 않음 => getStaticProps사용 
export async function getStaticProps(context){
    const meetupId = context.params.meetupId; // id객체
    console.log(meetupId);

    const client = await MongoClient.connect(
        'mongodb+srv://new_user_1:rlawlgus112@cluster0.nyhewhd.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db(); // db를 통해서 meetupdata 가 생성
    const meetupsCollention = db.collection('meetups');

    // meetup중 하나만 찾기
    const selectedMeetup = await meetupsCollention.findOne({
        _id : ObjectId(meetupId) // ObjectID로 문자열을 전환 => 일렬화 오류발생
     });

    // const meetups = await meetupsCollention.find({}, {_id :1 }).toArray();
    client.close();

    return {
        props : {
            meetupData : {
                id : selectedMeetup._id.toString(),
                title : selectedMeetup.title,
                adress : selectedMeetup.adress ? selectedMeetup.adress : "주소없음",
                image : selectedMeetup.image,
                description : selectedMeetup.description
            } 
        }
    }
}


export default MeetupDetails;