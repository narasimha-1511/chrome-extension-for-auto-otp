// alert('Hi'); here actuvally this code Runs in the web Page

const getMobileLocally = async () => {
  const getMobile = await chrome.storage.local.get(["mobile"]);
  return getMobile.mobile;
};
getMobileLocally().then((mobile) => {
  if (mobile != undefined) {
    ExecuteAfterMobile(mobile);
  }
});

function ExecuteAfterMobile(mobile_number) {
  window.onload = (() => {
    ("use strict");
    if (mobile_number == undefined) {
      alert(
        "Please Enter Mobile Number in Extension and Reload To Start USing The Service"
      );
    }
    //Getting Mobile Number From The Local Storage
    console.log(typeof mobile_number);
    mobile_number = mobile_number.toString();
    // mobile_number = parseInt(mobile_number);
    // console.log(typeof mobile_number);

    if (window.location == "https://www.scaler.com/") {
      setTimeout(() => {
        document
          .getElementsByClassName(
            "gtm-track-element auth-trigger academy-button primary is-inverted bold"
          )[0]
          .click();
      }, 3000);
      setTimeout(() => {
        document.getElementsByClassName("form__actions")[1].click();
      }, 4000);
      let MobileText = document.getElementById("login-mobile-number");
      MobileText.value = mobile_number;
      let MobileText1 = document.getElementById("login-mobile");
      MobileText1.value = "+91-" + mobile_number;
      MobileText.focus();
      setTimeout(() => {
        document.querySelectorAll("button[type='submit']")[7].click();
        CallTheBackGroundTaskForFireBaseandOtp();
      }, 7000);
    } else if (window.location == "https://www.scaler.com/users/sign_in/") {
      setTimeout(() => {
        document.querySelectorAll("input[type='email']")[1].value =
          "s.narasimha.2005@gmail.com";
      }, 3000);
      setTimeout(() => {
        document.querySelectorAll("input[type='password']")[2].value =
          "IRAN@2005";
      }, 3000);
    } else if (window.location == "https://github.com/") {
      if (document.title == "GitHub: Let’s build from here · GitHub")
        window.location = "https://github.com/login";
    } else if (window.location == "https://github.com/login") {
      setTimeout(() => {
        document.querySelectorAll("input[type='text']")[0].value =
          "s.narasimha.2005@gmail.com";
        document.querySelectorAll("input[type='password']")[0].value =
          "Nari@2005";
      }, 3000);
      setTimeout(() => {
        document.querySelectorAll("[type='SUBMIT']")[0].click();
      }, 4000);
    } else if (window.location == "https://outlook.live.com/owa/") {
      setTimeout(() => {
        window.location = "https://outlook.live.com/owa/?nlp=1";
      }, 2000);
      setTimeout(() => {
        document.querySelectorAll("input[type='email']")[0].value =
          "narasimha.23bcs10026@ms.sst.scaler.com";
        document.querySelectorAll("[type='submit']")[0].click();
      }, 4000);
    } else if (
      window.location == "https://login.live.com/*" ||
      window.location == "https://login.live.com/login.srf*"
    ) {
      setTimeout(() => {
        document.querySelectorAll("input[type='email']")[0].value =
          "narasimha.23bcs10026@ms.sst.scaler.com";
        document.querySelectorAll("[type='submit']")[0].click();
      }, 4000);
    }

    function CallTheBackGroundTaskForFireBaseandOtp() {
      var interval = 0;
      var ss = setInterval(function () {
        interval++;
        // alert("Working");
        // document.querySelectorAll('input[name="otp"]')[2].value  -- >>> Here We NEED to Paste the Otp From THE Mobile
        //sending message to background.js
        chrome.runtime.sendMessage(
          {
            message: mobile_number + "s",
            command: "Get_Value_From_Firebase",
            interval: interval,
          },
          (response) => {
            console.log(response);
            if (response != 0 && response != undefined) {
              clearInterval(ss);
              console.log(response);
              document.querySelectorAll('input[name="otp"]')[2].value =
                response;
              setTimeout(() => {
                document
                  .getElementsByClassName(
                    "form__action sr-button academy-button secondary bold gtm-track-element"
                  )[5]
                  .click();
              }, 2000);
            }
          }
        );
      }, 3000);
    }
  })();
}
