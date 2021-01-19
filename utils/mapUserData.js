export const mapUserData = async (user) => {
  const {
    uid,
    email,
    displayName,
    emailVerified,
    phoneNumber,
    photoURL,
  } = user;
  const { token, claims } = await user.getIdTokenResult(true);
  return {
    id: uid,
    displayName,
    emailVerified,
    phoneNumber,
    photoURL,
    email,
    token,
  };
};
