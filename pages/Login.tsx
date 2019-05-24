import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase, auth } from "../firebase/init";

const Login = () => {
  // FirebaseUI config.
  const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [
      //   // Leave the lines as is for the providers you want to offer your users.
      //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      //   firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ]
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Login;
