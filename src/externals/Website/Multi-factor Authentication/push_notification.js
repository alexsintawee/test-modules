// First, check if the user has granted permission to receive notifications
if (Notification.permission === 'granted') {
    // If the permission has been granted, then proceed with sending a new notification within 1 millisecond
    setTimeout(() => {
      const notification = new Notification('Welcome to Virtuality! Choose your topic for your day.', {
        body: 'You are attempting to sign in to our website...',
        icon: 'Images/photobooth.jpg',
      });
    
      // After 5 seconds of a delay, prompt the user attempting to sign in with a new [second] notification
      setTimeout(() => {
        const notification2 = new Notification('Authentication Timeout', {
          body: 'Please enter the code that has been sent to your mobile device or registered email address.',
          icon: 'Images/photobooth.jpg',
        });
    
        // If after 15 seconds of no response, advise the user that is attempting to login will not be able to and process has to be restarted
        setTimeout(() => {
          const notification3 = new Notification('Authentication Timeout', {
            body: 'Sorry! Please be quicker next time! Please restart to recommence the login process.',
            icon: 'Images/photobooth.jpg',
          });
        }, 15000); // 15000 milliseconds = 15 seconds
    
      }, 5000); // 5000 milliseconds = 5 seconds
    
    }, 1); // 1 millisecond delay
    
  } else {
    // If the user has not granted permission to receive notifications, request permission
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        // If permission is granted, call the showNextNotification function
        showNextNotification();
      }
    });
  }
  
  // After the user enters the multifactor code, you can call this function to show the next notification
  function showNextNotification() {
    // If the permission has been granted, then proceed with sending a new notification within 1 millisecond
    setTimeout(() => {
      const notification = new Notification('Welcome to Virtuality! Choose your topic for your day.', {
        body: 'You are now authenticated! Finally... tsk tsk.',
        icon: 'Images/photobooth.jpg',
      });
    
      // After 5 seconds of a delay, prompt the user attempting to sign in with a new [forth] notification
      setTimeout(() => {
        const notification2 = new Notification('Welcome to Virtuality! Choose your topic for your day.', {
          body: 'You have successfully signed into Virtually! Could you try faster next time though please.',
          icon: 'Images/photobooth.jpg',
        });
    
        // If the user fails to authenticate on a second occasion and aftermore, the timeout issue of 5 minutes each commences which'll ascend
        setTimeout(() => {
          // Code logic to handle the timeout issue
        }, 5000); // 5000 milliseconds = 5 seconds
    
      }, 5000); // 5000 milliseconds = 5 seconds
    
    }, 1); // 1 millisecond delay
  }
  