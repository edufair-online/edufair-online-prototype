const displayName = (name) => {
  if (name) {
    let arr = name.trim().split(" ");
    let firstname = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    if (arr.length > 1) {
      return firstname + " " + arr[1].charAt(0) + ".";
    }
    return firstname;
  }
};
export default displayName;
