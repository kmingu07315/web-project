<template>
  <div class="main">
    <form id="container" method="post" action="/register/agreement">
      <h2>에브리타임 회원가입</h2>
      <p class="description">
        에브리타임 계정으로 <strong>캠퍼스픽, 에브리타임</strong> 등<br />다양한
        대학생 서비스를 모두 이용하실 수 있습니다.
      </p>
      <h2>학교 선택</h2>
      <div class="input">
        <div class="label"><label>입학년도</label></div>
        <select name="enter_year">
          <option disabled selected>연도 선택 (학번)</option>
          <option value="2021">2021학번</option>
          <option value="2020">2020학번</option>
          <option value="2019">2019학번</option>
          <option value="2018">2018학번</option>
          <option value="2017">2017학번</option>
          <option value="2016">2016학번</option>
          <option value="2015">2015학번</option>
          <option value="2014">2014학번</option>
          <option value="2013">2013학번</option>
          <option value="2012">2012학번</option>
          <option value="2011">2011학번</option>
          <option value="2010">2010학번</option>
          <option value="2009">2009학번</option>
          <option value="2008">2008학번</option>
          <option value="2007">2007학번</option>
        </select>
      </div>
      <div class="input">
        <div class="label"><label>학교</label></div>
        <input
          type="text"
          name="campus_name"
          maxlength="20"
          placeholder="학교 이름을 검색하세요."
          autocomplete="off"
          class="search"
        />
        <input type="hidden" name="campus_id" />
      </div>
      <ol class="campuses"></ol>
      <input type="submit" value="다음" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

a {
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
}

address,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

article,
aside,
div,
figure,
nav {
  display: block;
}

body {
  color: #292929;
  font-family: '맑은 고딕', '돋움', 'Apple SD Gothic Neo', sans-serif;
  letter-spacing: -0.5px;
  background-color: #fff;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

dl,
li,
ol,
ul {
  list-style-type: none;
}

hr {
  clear: both;
  width: auto;
  height: 0;
  box-sizing: border-box;
  background-color: transparent;
}

img {
  display: block;
}

input,
select,
textarea {
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #a6a6a6;
}

input[type='button'],
input[type='email'],
input[type='number'],
input[type='password'],
input[type='search'],
input[type='text'],
input[type='submit'],
select,
textarea {
  -webkit-appearance: none;
  letter-spacing: -0.5px;
}

textarea {
  resize: none;
}

#container div.input input[type='email'],
#container div.input input[type='password'],
#container div.input input[type='text'],
#container div.input select {
  display: block;
  box-sizing: border-box;
  margin-top: 4px;
  padding: 8px;
  width: 100%;
  height: 40px;
  line-height: 24px;
  border: 1px solid #ededed;
  border-radius: 12px;
  color: #292929;
  font-size: 16px;
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px;
}

#container {
  padding: 16px 24px 48px 24px;
}

#container h2 {
  line-height: 30px;
  color: #292929;
  font-size: 22px;
  font-weight: bold;
}

#container h2:not(:first-of-type) {
  margin-top: 48px;
}

#container h2.multiple {
  font-weight: normal;
}

#container p.description {
  margin-top: 8px;
  line-height: 20px;
  color: #737373;
  font-size: 14px;
}

#container p.description strong {
  color: #292929;
}

#container div.input {
  margin-top: 24px;
}

#container div.input div.label {
  display: flex;
  padding: 0 8px;
}

#container div.input div.label label {
  flex: auto;
  line-height: 20px;
  color: #737373;
  font-size: 12px;
  font-weight: bold;
}

#container div.input div.label p {
  flex-shrink: 0;
  line-height: 20px;
  color: #a6a6a6;
  font-size: 12px;
}

#container div.input select {
  background-image: url('../assets/register.input.select.png');
}

#container div.input input[type='email'],
#container div.input input[type='password'],
#container div.input input[type='text'] {
  padding-right: 40px;
}

#container div.input input[type='email']:focus,
#container div.input input[type='password']:focus,
#container div.input input[type='text']:focus {
  background-color: #fff;
}

#container div.input input[type='email'].search,
#container div.input input[type='password'].search,
#container div.input input[type='text'].search {
  background-image: url('../assets/register.input.search.png');
}

#container div.input input[type='email'].caution,
#container div.input input[type='password'].caution,
#container div.input input[type='text'].caution {
  background-image: url('/images/register.input.caution.png');
}

#container div.input input[type='email'].pass,
#container div.input input[type='password'].pass,
#container div.input input[type='text'].pass {
  background-image: url('/images/register.input.pass.png');
}

#container div.input div.caution {
  display: none;
  margin: 4px 0 0 8px;
  line-height: 20px;
  color: #c62917;
  font-size: 12px;
}

#container input[type='submit'] {
  display: block;
  margin-top: 24px;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #c62917;
}

#container ol.campuses {
  margin-top: 16px;
}

#container ol.campuses li a {
  display: block;
  line-height: 40px;
  padding: 0 8px;
  color: #444;
  font-size: 16px;
  cursor: pointer;
}

#container ol.campuses li a strong {
  color: #c62917;
}

#container ol.campuses li.empty {
  line-height: 20px;
  padding: 0 8px;
  color: #a6a6a6;
  font-size: 14px;
}

#container div.agreement {
  margin-top: 16px;
}

#container div.agreement label {
  display: block;
  line-height: 40px;
  color: #292929;
  font-size: 12px;
  cursor: pointer;
}

#container div.agreement label.bold {
  font-weight: bold;
}

#container div.agreement label input[type='checkbox'] {
  display: none;
}

#container
  div.agreement
  label
  input[type='checkbox']:checked
  ~ figure.checkbox {
  background-image: url('/images/register.agreement.checkbox.checked.png');
}

#container div.agreement label figure.checkbox {
  display: inline-block;
  margin: 13px 8px 0 0;
  width: 14px;
  height: 14px;
  background-image: url('/images/register.agreement.checkbox.unchecked.png');
  background-size: 14px 14px;
  vertical-align: top;
}

#container div.agreement div.text {
  overflow: auto;
  padding: 8px;
  box-sizing: border-box;
  height: 144px;
  border: 1px solid #ededed;
  border-radius: 12px;
  background-color: #f9f9f9;
}

#container div.agreement div.text.small {
  height: auto;
}

#container div.agreement div.text h3 {
  line-height: 18px;
  color: #737373;
  font-size: 12px;
  font-weight: bold;
}

#container div.agreement div.text h3:not(:first-of-type) {
  margin-top: 16px;
}

#container div.agreement div.text p {
  margin-top: 4px;
  line-height: 18px;
  color: #737373;
  font-size: 12px;
}

#container div.agreement div.text p:first-child {
  margin-top: 0;
}

#container div.agreement div.text ol {
  margin-top: 4px;
  padding-left: 12px;
}

#container div.agreement div.text ol li {
  list-style-type: decimal;
  line-height: 18px;
  color: #737373;
  font-size: 12px;
}

#container div.agreement div.text ol ol {
  margin-top: 0;
  padding-left: 12px;
}

#container div.agreement div.text ol ol li {
  list-style-type: disc;
}

#container div.agreement div.text ol ol ol li {
  list-style-type: circle;
}

#container form {
  margin-top: 24px;
}

#container form[data-type='ipin'] {
  margin-top: 8px;
}

#container form a {
  display: block;
  line-height: 40px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}

#container form a.red {
  color: #fff;
  font-weight: bold;
  background-color: #c62917;
}

#container form a.normal {
  color: #737373;
  background-color: #f2f2f2;
}

#container div.buttons {
  margin-top: 24px;
}

#container div.buttons a {
  display: block;
  margin-bottom: 8px;
  height: 40px;
  line-height: 40px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}

#container div.buttons a.normal {
  color: #737373;
  background-color: #f2f2f2;
}

#container div.buttons a.red {
  color: #fff;
  font-weight: bold;
  background-color: #c62917;
}

@media (min-width: 480px) {
  #container {
    box-sizing: border-box;
    border: 1px solid #ededed;
    border-radius: 12px;
    margin: 24px auto;
    padding: 24px;
    width: 480px;
  }
}
</style>
