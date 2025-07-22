
document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const storedPassword = "123456";

    const message = document.getElementById('message');

    if (oldPassword !== storedPassword) {
        message.style.color = "red";
        message.innerText = "❌ Old password is incorrect!";
    } else if (newPassword !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "❌ New passwords do not match!";
    } else {
        message.style.color = "green";
        message.innerText = "✅ Password changed successfully!";
    
    }
});
function togglePassword(id, icon) {
      const input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
        icon.textContent = "🙈";
      } else {
        input.type = "password";
        icon.textContent = "👁️";
      }
    }
