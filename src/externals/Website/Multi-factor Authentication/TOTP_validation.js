const speakeasy = require('speakeasy');

// Generate a shared secret for the user
const secret = speakeasy.generateSecret({ length: 20 });

// Save the secret to the user's account in your database
const user = {
  username: 'exampleuser',
  totpSecret: secret.base32
};

// Generate a new TOTP code every 10 seconds and prompt the user to enter it
setInterval(() => {
  // Generate a TOTP code for the user
  const code = speakeasy.totp({
    secret: user.totpSecret,
    encoding: 'base32'
  });

  // Display the code to the user and prompt them to enter it
  console.log('Please enter the code displayed in your authenticator app:', code);

  // Wait for user input and verify the entered code
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter code: ', (userEnteredCode) => {
    rl.close();
    const isVerified = speakeasy.totp.verify({
      secret: user.totpSecret,
      encoding: 'base32',
      token: userEnteredCode,
      window: 1
    });
    if (isVerified) {
      console.log('Code is valid. Proceed with login.');
    } else {
      console.log('Code is invalid. Please try again.');
    }
  });
}, 10 * 1000); // Generate a new code every 10 seconds
