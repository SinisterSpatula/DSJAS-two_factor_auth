# DSJAS-two_factor_auth
A fake two-factor authentication module for dsjas.
Your passcode is at least 6 digits and ending with zero.

To install:
download the zip file, and install it in dsjas admin dashboard.
If the zip fails to install in the web gui, make sure the zip does not hold all files in a single folder in the zip. (files should be at root of the zip).

If you need to change the phone number thats displayed just open chrome developer tools console and execute the below then reload the login page.:
```
localStorage.setItem("dsjas2faphone", "");
```


