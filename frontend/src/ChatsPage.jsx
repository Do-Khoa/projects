import{PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{height:'100vh'}}>
       <PrettyChatWindow
            projectId='784f9de8-278c-4a1e-a5c6-0bb02910d746'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
    )
  };
  export default ChatsPage;