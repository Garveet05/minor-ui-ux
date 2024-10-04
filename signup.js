document.getElementById('sendOtpBtn').addEventListener('click', function(e) {
    let emailOrPhone = document.getElementById('emailOrPhone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let passwordMatchMessage = document.getElementById('passwordMatchMessage');


    if (password !== confirmPassword) {
        passwordMatchMessage.innerText = "Passwords do not match!";
        passwordMatchMessage.style.display = "block";
        return;
    } else {
        passwordMatchMessage.style.display = "none";
    }

    if (emailOrPhone) {
        alert("OTP sent to " + emailOrPhone);
        document.getElementById('otpSection').style.display = 'block';
        document.querySelector('.otp-group').style.opacity = '1';
    } else {
        alert("Please enter a valid email or phone number.");
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let otp = '';

    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById(`otp-${i}`).value;
    }

    if (otp !== "123456") { 
        alert("Invalid OTP!");
        return;
    }

    let successMessage = document.getElementById('successMessage');
    successMessage.innerText = "Sign Up Successful! Welcome to Indore Tours & Travelism, " + username;
    successMessage.style.opacity = '1';
    document.getElementById('signupForm').reset();
    document.getElementById('otpSection').style.display = 'none';
});

const otpBoxes = document.querySelectorAll('.otp-box');
otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < otpBoxes.length - 1) {
            otpBoxes[index + 1].focus();
        }
    });
});
