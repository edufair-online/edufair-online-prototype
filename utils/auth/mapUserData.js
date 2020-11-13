export const mapUserData = async (user) => {
  const {
    uid,
    email,
    displayName,
    emailVerified,
    phoneNumber,
    photoURL,
  } = user;
  const token = await user.getIdToken(true);
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
