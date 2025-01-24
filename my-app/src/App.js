import "./App.css";
import { UserProvider,useUser } from "./UserContext";
console.log("Hello World");
const LoggedInUser = () => {
    const {user} = useUser();
    console.log("USER",user);
    return (
        <p>
            Hello <span className="Username">{user.name}</span>
        </p>
    );
};

const Header = () => {
    console.log("header")
    return (
        <header>
            Jamo
            <h2> Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

const Page = () => {
    const { user } = useUser();
    console.log("page");
    return (
        <div>
            hello
            <h2>What it is Lorem</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum ipsa itaque nesciunt nisi, quae! Adipisci cupiditate, iste modi molestiae mollitia nemo possimus quibusdam repellat, repellendus sit ullam, unde voluptates.
            </p>
            <p>Written by {user.name}</p>
        </div>
    );
};

function App() {
    console.log("App")
    return(
        <div className="App">
            HELLO AGAIN
            <Header />
            <Page />
        </div>
    );
}

function Root() {
    console.log("Root")
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

export default Root;