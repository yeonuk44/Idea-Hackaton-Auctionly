'use strict';

class LoginSection extends React.Component {
  render() {
    return (
      <Fragment>
        <a href={"#hotproducts"}><img src={require("./src/loginbut.png")} width="210" id="loginbut"  alt={"hello"}/></a>
        <div id="loginnav">
          <a>아이디 / 비밀번호 찾기</a>
          <a className="right">회원가입</a>
        </div>
      </Fragment>
    );
  }
}

const domContainer = document.querySelector('#login_section');
ReactDOM.render(<LoginSection/>, domContainer);
