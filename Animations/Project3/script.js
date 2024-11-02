const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container9.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container9.classList.remove("active");
});

const SIGNPASS = `<form action="/signin" method="post" onsubmit="return checkSignInPasswordData2()">
<h1>Sign In</h1>
<div class="social-icons">
    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
<span>or use your email password</span>
<input type="email" placeholder="Enter Your Email" id="signin-email" name="email" style="text-align: center;" onkeyup="checkSigninEmail2()">
<small class="ms-4"></small>
<input type="password" placeholder="Enter Your Password" id="signin-password" name="password" style="text-align: center;" onkeyup="checkSigninPassword2()">
<small class="ms-4"></small>
<input type="submit" value="Sign In" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
<a href="#" onclick="signInWithOTP()">Sign in with OTP</a>
</form>`;

const SIGNOTP = `<form>
<h1>Sign In</h1>
<div class="social-icons">
    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
<span>or use your email</span>
</form>
<form action="/getotp" method="post" onsubmit="return checkOtpSigninEmail2()">
<input type="email" placeholder="Enter Email"  id="signin-otp-email" name="email"  style="text-align: center;" onkeyup="checkOtpSigninEmail2()">
<small class="ms-3"></small>
<input type="submit" value="Get OTP" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
</form>
<form action="/signin" method="post" onsubmit="return checkSigninOtp2()">
<input  type="password" placeholder="Enter OTP" id="signin-otp" name="otp"  style="text-align: center;" onkeyup="checkSigninOtp2()">
<small class="ms-3"></small>
<input type="submit" value="Sign Up" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
<a href="#" onclick="signInWithPass()">Sign in with Password</a>
</form>`;

var signInWithOTP = ()=>{
    document.getElementById('sign-in-container').innerHTML = SIGNOTP;
};

var signInWithPass = ()=>{
    document.getElementById('sign-in-container').innerHTML = SIGNPASS;
};