import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const sendContact = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/contact`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error sending contact:", error);
    throw error;
  }
};
