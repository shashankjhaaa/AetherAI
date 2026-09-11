function toggleAuthMode() {
      isSignupMode = !isSignupMode;
      const usernameBox = document.getElementById('username-container');
      const submitBtn = document.getElementById('submit-btn');
      const toggleText = document.getElementById('toggle-auth-text');
      const authTitle = document.getElementById('auth-title');
      const authSub = document.getElementById('auth-subtitle');

      if (isSignupMode) {
        usernameBox.classList.remove('hidden');
        document.getElementById('username-input').required = true;
        submitBtn.innerText = "Create Account";
        toggleText.innerText = "Already have an account? Log In";
        authTitle.innerText = "Create an Account";
        authSub.innerText = "Join Aether to manage AI agents.";
      } else {
        usernameBox.classList.add('hidden');
        document.getElementById('username-input').required = false;
        submitBtn.innerText = "Sign In to Dashboard";
        toggleText.innerText = "Don't have an account? Sign Up";
        authTitle.innerText = "Welcome Back";
        authSub.innerText = "Sign in to manage your AI agents.";
      }
    }

    async function handleAuth(event) {
      event.preventDefault();
      const email = document.getElementById('email-input').value;
      const pass = document.getElementById('password-input').value;
      const username = document.getElementById('username-input').value;
      const errorMsg = document.getElementById('login-error');
      
      const endpoint = isSignupMode ? 'http://localhost:8080/api/auth/register' : 'http://localhost:8080/api/auth/login';
      const payload = isSignupMode ? { username: username, email: email, password: pass } : { email: email, password: pass };

      try {
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Connecting...";

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (response.ok) {
          errorMsg.classList.add('hidden');
          document.getElementById('admin-user-email').innerText = data.username || username || email; 
          closeLoginModal(); 
          openDashboard();
        } else {
          errorMsg.innerText = data.message || "Authentication failed."; 
          errorMsg.classList.remove('hidden');
        }
        submitBtn.innerText = originalText;
      } catch (error) {
        errorMsg.innerHTML = "Backend is offline. Start your Spring Boot server on port 8080."; 
        errorMsg.classList.remove('hidden');
        document.getElementById('submit-btn').innerText = isSignupMode ? "Create Account" : "Sign In to Dashboard";
      }
    }
