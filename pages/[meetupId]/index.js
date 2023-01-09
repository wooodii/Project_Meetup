
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <>
    <MeetupDetail image='dd' title='first' adress='adress' description=' tjfwjd'/>
    </>
}


export async function getStaticPaths() {
    // next.js 가 모든 동적 페이지의 pre generate가 필요함 
    // db에서 지원하는 id 패치하기
    return {
        fallback : false , // 서버에서 요청이 들어오는 id로 페이지를 만듦(특정 path를 정의 ,ture일 경우)
        paths : [
            {params : {
                meetupId : 'm1'
                },
            },
            {params : {
                meetupId : 'm2'
                },
            },
            {params : {
                meetupId : 'm3'
                },
            },

        ]
    }
}

// 데이터가 얼마나 자주 바뀌는지, 요청 객체에 얼마나 접속하는지 확인 
// 밋업 데이터는 자주 바뀌지 않음 => getStaticProps사용 

export async function getStaticProps(context){
    const meetupId = context.params.meetupId; // id객체
    console.log(meetupId);

    return {
        props : {
            meetupData  :{
                image : "sdfsd",
                id : meetupId,
                title : 'first',
                adress : "some street",
                description :"this is a first"
            }
        }
    }
}


export default MeetupDetails;