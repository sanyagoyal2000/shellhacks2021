import {useState,useEffect} from 'react';
import Header from '../components/Header';
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from "../firebase";
import Button from "@material-tailwind/react/Button";
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';
//import LogoutIcon from '@material-ui/icons/Logout';

function Chats() {
    const history =useHistory();

    const {user} =useAuth();
    const [loading,setLoading]=useState(true);
        //console.log(user);
    const handleLogout=async () =>{
        await auth.signOut();
        history.push('/');

    }

    const getFile= async(url)=>{
        const response=await fetch(url);
        const data=response.blob();

        return new File([data],'userPhoto.jpg',{type:'image/jpeg'});

    }
   useEffect(()=>{
       if(!user){
        history.push('/');
        return;
       }
       axios.get('https://api.chatengine.io//users/me',{
           headers:{
            "project-id":"",
            "user-name":user.email,
            "user-secret":user.uid,
           }
       }).then(()=>{
           setLoading(false);

       }).catch(()=>{
           let formdata= new FormData();
           formdata.append('email',user.email);
           formdata.append('username',user.displayName);
           formdata.append('secret',user.uid);

           getFile(user.photoURL).then((avatar)=>{
               formdata.append('avatar',avatar,avatar.name);
               axios.post('https://api.chatengine.io/users',formdata,
               {headers:
                {"private-key":""}

               })
           .then(()=>setLoading(false)).catch((error)=>console.log(error))
       })
    })

   },[user,history]);

  // if(!user || loading)return 'Loading....';
    return (
        <div>
            <Header/>
            <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            onClick={handleLogout}
            className="border-0"
            >Log Out
                
            </Button>
            
            <ChatEngine
        height="100vh"
        projectID=""
        //userName={user.email}
        //userSecret={user.uid}
        userName="sanyagoyal2000"
        userSecret="123123"
        

        
        />
        </div>
    )
}

export default Chats
