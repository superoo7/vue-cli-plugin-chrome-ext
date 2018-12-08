const respondToBoolean = respond => {
  const res = respond.toLowerCase();
  if (res === "yes" || res === "y" || res === "true") {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  respondToBoolean
};
