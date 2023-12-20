import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId='e4d47315-ecf1-43d5-950a-b1d5fbcef475'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;