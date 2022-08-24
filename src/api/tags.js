export const getAllTags = async () => {
  const response = await fetch(`/api/tags`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
