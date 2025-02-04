import "./App.css";
import {useState, useEffect} from 'react' ;

const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        })

        useEffect(() => {
            const handleMousePosition = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            window.addEventListener('mousemove', handleMousePosition);

            return () => {
                window.removeEventListener('mousemove', handleMousePosition);
            }
        },[]);

        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x},{mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
    return (
        <div className="App">
            <header className="Header">Lil Lumon Resturant</header>
            <PanelMouseTracker/>
            <PointMouseTracker/>
        </div>
    );
}

export default App;