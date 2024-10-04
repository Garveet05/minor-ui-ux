document.getElementById('loginBtn').addEventListener('click', function(e) {
    let emailOrPhone = document.getElementById('emailOrPhone').value;
    let password = document.getElementById('password').value;

    if (!emailOrPhone || !password) {
        alert("Please fill out both email/phone and password.");
        return;
    }

    if (emailOrPhone && password) {
        alert("Login credentials verified. OTP sent to " + emailOrPhone);
        document.getElementById('otpSection').style.display = 'block';
        document.querySelector('.otp-group').style.opacity = '1';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let otp = '';

    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById(`otp-${i}`).value;
    }

    if (otp !== "123456") { 
        alert("Invalid OTP!");
        return;
    }

    let successMessage = document.getElementById('successMessage');
    successMessage.innerText = "Login Successful! Welcome back to Indore Tours & Travelism!";
    successMessage.style.opacity = '1';
    document.getElementById('loginForm').reset();
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
