const getApiKey = async () => {
  const response = await fetch("http://localhost:8081/key");
  try {
    const key = await response.text();
    console.log(response);
    console.log("Key from keyGetter: " + key);
    return key;
  } catch (error) {
    console.log("ERROR in GET: ", error);
  }
};

export { getApiKey };
