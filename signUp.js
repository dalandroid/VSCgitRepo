// 비밀번호 유효성 검사 해야함


function clickSubmit(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState==4 && xhr.status==200){
        alert("회원가입에 성공하셨습니다!")
      }
    }
  
    let inputEmail = document.getElementById('InputEmail1').value + "@" + document.getElementById('InputEmail2').value;
    let inputPassword = document.getElementById('InputPassword').value;
    let inputName = document.getElementById('InputName').value;
    let inputZipcode = document.getElementById('InputZipcode1').value
    let inputAddress = document.getElementById('InputAddress').value;
    let phonecall = document.getElementById('InputPhonecall1').value + document.getElementById('InputPhonecall2').value + document.getElementById('inputPhonecall3').value;
  
  
    xhr.open('POST', 'http://dalmuti.dothome.co.kr/login/php/signupPost.php', true);
  
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(
      "name=" + inputName + "&" +
      "email=" + inputEmail + "&" +
      "password=" + inputPassword + "&" +
      "zipcode=" + inputZipcode + "&" +
      "address=" + inputAddress + "&" +
      "phonecall=" + phonecall
      );
  
  }
  
  
  
  function clickEmail(){
    alert("이메일로 인증번호가 전송되었습니다.")
  }
  
  function clickPhonecall(){
    alert("휴대폰 인증번호가 전송되었습니다.")
  }
  
  function searchZipcode(){
    alert("우편번호 검색창으로 이동합니다.")
  }