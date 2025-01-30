import './App.css';

const Button = ({children, backgroundColor}) =>{
    return <button style={{ backgroundColor }}>{children}</button>
};

const Alert = ({children}) =>{
    return (
        <>
        <div className="Overlay"/>
        <div className="Alert">{children}</div>
        </>
    );
};

const DeleteButton =() => {
    return <Button backgroundColor="red">Delete</Button>
};

function App() {
    return (
        <div className="App">
            <header>Lil Lumon Header</header>
            <Alert>
                <h4>Delete Account</h4>
                <p>
                    can you believe JLAW shopped here once? and you want to delete your account on this lemon restuarant you went through the effort of making an account for? why don't they just have you sign in with your google account? what the hell man
                </p>
                <DeleteButton />
            </Alert>
        </div>
    );
}

export default App;
