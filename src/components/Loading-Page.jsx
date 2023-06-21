import Footer from "./Footer";

export const Page = ({ gameStarted}) => {
  if (!gameStarted) {
    return (
      <div className="blurry-screen">
        <div className="title">
          <h1>Get Your Steps In!</h1>
        </div>
        <div className="controls">
          <div className="instructions">
            <h2>Instructions </h2>
            <p>
              Welcome to Get Your Steps In, a thrilling adventure where you'll
              embark on a journey to win the ultimate prize — a delicious kebab!
              But it won't be an easy task, to earn your savory reward you'll
              need to get some serious steps in for the day. Avoid hitting the
              obstacles in your path or you'll lose your motivation! Remember,
              every step counts...
            </p>
          </div>
          <h2 className="ctrl-title">Controls</h2>
          <p>
            <b>Left Arrow:</b> Left
          </p>
          <p>
            <b>Right Arrow:</b> Right
          </p>
          <p>
            <b>Space:</b> Jump
          </p>
          <button className="start-btn">Press Any Key To Start</button>
        </div>
        <Footer />
      </div>
    );
  }
};
