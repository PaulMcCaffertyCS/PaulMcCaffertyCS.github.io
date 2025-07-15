import BoopButton from "../../components/BoopButton";

const Games = () => {
    return (
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">Games</h1>
                <p id="page-title-intro">
                    Try to catch the button.
                </p>
            </div>
            <div id="page-body">
                <BoopButton />
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default Games;