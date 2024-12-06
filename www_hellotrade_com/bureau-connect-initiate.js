const apiPath = "https://fbs-sdk.finbox.in/api/v1";

const fetchToken = async (
  apiKey,
  customerId,
  firstName,
  middleName,
  lastName,
  phone
) => {
  try {
    const path = `${apiPath}/user/create`;
    const userData = {
      customer_id: customerId,
      firstName,
      middleName,
      lastName,
      phone,
    };
    const userResponse = await fetch(path, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(userData),
    });
    const jsonData = await userResponse.json();
    if (jsonData) {
      return jsonData.access_token;
    } else {
      throw new Error("Access token not found");
    }
  } catch (error) {
    throw error;
  }
};

const createSession = async (apiKey, authToken) => {
  try {
    const path = `${apiPath}/user/session`;
    const userResponse = await fetch(path, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        Authorization: `Bearer ${authToken}`,
      },
    });
    const jsonData = await userResponse.json();
    if (jsonData) {
      return jsonData.url;
    } else {
      throw new Error("Session URL not found");
    }
  } catch (error) {
    throw error;
  }
};

const isRequired = (name) => {
  throw new Error(`${name} parameter is required`);
};

async function getBureauSession(
  apiKey = isRequired("apiKey"),
  customerId = isRequired("customerId"),
  firstName = isRequired("firstName"),
  middleName,
  lastName,
  phone = isRequired("phone")
) {
  try {
    const token = await fetchToken(
      apiKey,
      customerId,
      firstName,
      middleName,
      lastName,
      phone
    );
    if (token) {
      const sessionURL = await createSession(apiKey, token);
      if (sessionURL) {
        return `${sessionURL}session/${token}_${apiKey}`;
      } else {
        throw new Error("Session URL not found");
      }
    } else {
      throw new Error("Access token not found");
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function startBureauSession() {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      "message",
      (e) => {
        if (e.data.type !== "finbox-bureau-connect") return;
        switch (e.data.status) {
          case "SUCCESS":
            resolve(e.data);
            break;
          case "EXIT":
            resolve(e.data);
            break;
          case "ERROR":
            reject(e.data);
            break;
          default:
            console.log("WRONG EVENT");
            break;
        }
      },
      "*"
    );
  });
}
