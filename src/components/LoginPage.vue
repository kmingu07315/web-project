<template>
  <div class="main">
    <div id="container" class="login">
      <h1 class="logo"><a href="/">에브리타임</a></h1>
      <form action="/user/login" method="post">
        <p class="input">
          <input
            type="text"
            name="userid"
            maxlength="20"
            class="text"
            placeholder="아이디"
          />
        </p>
        <p class="input">
          <input
            type="password"
            name="password"
            maxlength="20"
            class="text"
            placeholder="비밀번호"
          />
        </p>
        <input type="hidden" name="redirect" value="/" />
        <p class="submit">
          <input type="submit" value="로그인" class="text" />
        </p>
        <label class="autologin"
          ><input type="checkbox" name="autologin" value="1" />로그인
          유지</label
        >
        <p class="find"><a href="/forgot">아이디/비밀번호 찾기</a></p>
        <p class="register">
          <span>에브리타임에 처음이신가요?</span>
          <a href="/register">회원가입</a>
        </p>
      </form>
    </div>
    <address>
      <ul class="links">
        <li><a href="/page/serviceagreement">이용약관</a></li>
        <li class="privacy"><a href="/page/privacy">개인정보처리방침</a></li>
        <li><a href="/page/faq">문의하기</a></li>
        <li class="copyright"><a href="/">&copy; 에브리타임</a></li>
      </ul>
    </address>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@charset "utf-8";
/*
CSS Hack
IE6 이하만 : _color: white
IE7 이하만 : *color: white
*/

* {
  margin: 0;
  padding: 0;
}
body,
div,
nav,
aside,
article,
h1,
h2,
h3,
h4,
ol,
ul,
li,
dl,
dt,
dd,
p,
span,
form,
th,
td,
input,
textarea,
select,
pre,
address {
  color: #666;
  font-family: '맑은 고딕', 돋움, tahoma;
  _font-family: 돋움, tahoma;
  font-size: 12px;
  letter-spacing: -0.5px;
}
body {
  background-color: #f8f8f8;
}
body.selectDisabled {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
img {
  border: 0;
}
div,
nav,
aside,
article,
figure {
  display: block;
}
dl,
ul,
ol,
menu,
li {
  list-style: none;
}
img,
input,
select,
textarea {
  vertical-align: middle;
}
a {
  color: #666;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
em {
  font-style: normal;
  font-weight: bold;
}
em.underline {
  font-style: normal;
  font-weight: normal;
  text-decoration: underline;
}
address {
  font-style: normal;
}
label.forinsert {
  display: none;
}
input[type='button'],
input[type='submit'],
input[type='search'] {
  -webkit-appearance: none;
}

.bold {
  font-weight: bold !important;
}
.floatLeft {
  float: left !important;
}
.floatRight {
  float: right !important;
}
.clearBoth {
  clear: both !important;
}
.clearBothOnly {
  clear: both !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
}
.left {
  text-align: left !important;
}
.right {
  text-align: right !important;
}
.center {
  text-align: center !important;
}
.pointer {
  cursor: pointer !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  background-color: #fff;
}
.modalwrap {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.modalwrap.lighter {
  opacity: 0.2;
  filter: alpha(opacity=20);
}

/* * * * * * * * * * * * * * * * * * * * * * * * *  /  mobile only  /  * * * * * * * * * * * * * * * * * * * * * * * * */

@media only screen and (max-width: 640px) {
  .mobilehide {
    display: none;
  }
}

#container {
  position: absolute;
  left: 50%;
  margin-left: -180px;
  width: 360px;
}
address {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e3e3e3;
  text-align: center;
  background-color: #f8f8f8;
}
address > ul.links {
  padding: 20px 0;
  font-size: 0;
}
address > ul.links > li {
  display: inline-block;
  margin: 0 5px;
}
address > ul.links > li > a {
  color: #737373;
  font-size: 13px;
}
address > ul.links > li.copyright > a,
address > ul.links > li.privacy > a {
  font-weight: bold;
}

@media only screen and (max-width: 640px) {
  #container {
    position: static;
    width: auto;
  }
  address > ul.links {
    padding: 15px 0;
  }
}
body {
  background-color: #fff;
}
#container {
  top: 50%;
  margin-top: -170px;
  height: 280px;
}
#container h1.logo {
  margin-bottom: 15px;
  height: 60px;
  background: transparent url('../assets/index.login.logo.png') no-repeat;
}
#container h1.logo a {
  display: block;
  width: 60px;
  height: 100%;
  color: transparent;
  font-size: 0;
}
#container p.input {
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
}
#container p.submit {
  margin-bottom: 15px;
  background-color: #c62917;
}
#container p input.text {
  border: 0;
  width: 100%;
  height: 28px;
  line-height: 28px;
  color: #292929;
  font-size: 16px;
  background-color: transparent;
  outline: none;
}

#container p.submit input.text {
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}
#container label.autologin {
  display: block;
  float: none;
  display: inline-block;
  padding-left: 10px;
  height: 15px;
  line-height: 15px;
  color: #a6a6a6;
  font-size: 13px;
}
#container label.autologin input {
  margin-right: 5px;
}
#container p.find {
  float: right;
  padding-right: 10px;
  height: 15px;
  line-height: 15px;
}
#container p.find a {
  color: #444444;
  font-size: 13px;
}
#container p.register {
  clear: both;
  padding-top: 30px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
#container p.register span {
  margin-right: 5px;
  color: #a6a6a6;
  font-size: 16px;
}
#container p.register a {
  color: #c62917;
  font-size: 16px;
  font-weight: bold;
}

@media only screen and (max-width: 640px) {
  #container {
    margin: 30px 15px;
  }
  body.appopen #container {
    margin-top: 78px;
  }
  #container h1.logo {
    height: 60px;
    background-image: url('/images/index.login.logo.big.png');
    background-position: center center;
    background-size: 60px 60px;
  }
}
</style>
