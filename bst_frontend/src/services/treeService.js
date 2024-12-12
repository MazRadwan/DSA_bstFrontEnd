import { API_BASE_URL, ENDPOINTS } from "../config/apiConfig";

export const treeService = {
  processNumbers: async (numbers) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ENDPOINTS.PROCESS_NUMBERS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numbers }),
        }
      );
      if (!response.ok) throw new Error("Failed to process numbers");
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getPreviousTrees: async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ENDPOINTS.GET_PREVIOUS_TREES}`
      );
      if (!response.ok) throw new Error("Failed to fetch previous trees");
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};
