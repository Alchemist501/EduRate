document.addEventListener('DOMContentLoaded', function() {
  const generateOtpBtn = document.getElementById('generate-otp-btn');
  const otpBox = document.querySelector('.otp-box');
  const submitOtpBtn = document.getElementById('submit-otp-btn');
  const otpInput = document.getElementById('otp');
  let generatedOtp = '';
 
  // Set initial order
  otpBox.style.order = 1; // Higher order means it will appear first
  generateOtpBtn.style.order = 2; // Lower order means it will appear second
 
  generateOtpBtn.addEventListener('click', function() {
     // Generate a 4-digit OTP
     generatedOtp = Math.floor(1000 + Math.random() * 9000);
     console.log('Generated OTP:', generatedOtp);
 
     // Display the OTP input and submit button
     otpBox.style.display = 'block';
 
     // Reorder elements
     otpBox.style.order = 2; // Move OTP box below the button
     generateOtpBtn.style.order = 1; // Move button above the OTP box
  });
 
  submitOtpBtn.addEventListener('click', function(e) {
     e.preventDefault(); // Prevent form submission
 
     // Check if the entered OTP matches the generated one
     if (otpInput.value === generatedOtp.toString()) {
       alert('OTP is correct. Proceed with password reset.');
       // Here you would typically reset the user's password
     } else {
       alert('Incorrect OTP. Please try again.');
     }
  });
 });
