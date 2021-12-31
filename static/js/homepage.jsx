'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome! You must be here to view Balloonicorn's Trading Cards!</p>
    <p>Click <a href="/cards">here</a> to view all cards.</p>
    <br /><img id="welcome-img" src="/static/img/balloonicorn.jpg" />
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
