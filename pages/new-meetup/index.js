// /new-meetup
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
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage