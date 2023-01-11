// /new-meetup
import Head from 'next/head';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
// 경로를 트리거 하고 요청보내기 

function NewMeetupPage(){

    async function addMeetupHandler(enteredMeetupData) {
        // new meetup 파일로 요청 전송
        const response = await fetch('/api/new-meetup', {
            method : 'POST',
            body : JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type' : `application/json` // restful API
            }
        });
        
        const data = await response.json();
        console.log(data);
        console.log(enteredMeetupData);
        
    }
    return <Fragment>
        <Head>
            <title>밋업</title>
            <meta 
        name = "description" 
        // 검색결과로 나타나는 웹 내용 
        content = "당신의 밋업 스케줄을 추가하고 네트워킹 기회를 만드세요"></meta>
        </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment> 
}

export default NewMeetupPage