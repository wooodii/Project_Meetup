// /new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
// 경로를 트리거 하고 요청보내기 
function NewMeetupPage(){

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method : 'POST',
            body : JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        
        const data = await response.json();
        console.log(data);

    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage