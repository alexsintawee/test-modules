async function createUser(mobile, password) {
    const existingUser = await findUserByMobile(mobile);
    if (existingUser) {
      const passwordsMatch = await bcrypt.compare(password, existingUser.password);
      if (passwordsMatch) {
        throw new Error('User with this mobile number and password already exists');
      }
    }
    const user = new User({
      mobile: mobile,
      password: password
    });
    await user.save();
  }
  