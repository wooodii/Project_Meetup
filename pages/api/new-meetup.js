import {MongoClient} from 'mongodb';

// api는 서버에서만 들어감 
// /api/new-meetup

async function handler(req, res) {
    if(req.method == 'POST') {
        // 요청이 들어오면 
        const data = req.body;
        // const  {title, image, adress, description} = data; // mongodb연결
        
        // 데이터베이스에 데이터를 저장하고
        // 이 코드가 클라이언트 측에서 실행되지 않도록 설정 
        const client = await MongoClient.connect(
            'mongodb+srv://new_user_1:rlawlgus112@cluster0.nyhewhd.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db(); // db를 통해서 meetupdata가 생성

        const meetupsCollention = db.collection('meetups');
        const result =  await meetupsCollention.insertOne(data); // 문서가 data 객체로 들어옴

        console.log(result);
        client.close();

        // 데이터가 들어오면 res로 다시 응답을 보냄 
        res.status(201).json({message : '밋업 추가'}); 

    }
}

export default handler;