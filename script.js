
function login() {
  const username = document.getElementById('username').value;
  const amount = document.getElementById('amount').value;
  if (!username || !amount) {
    alert('Please fill in all fields.');
    return;
  }
  localStorage.setItem('trust_user', username);
  localStorage.setItem('trust_amount', amount);
  window.location.href = 'dashboard.html';
}
