// Upload image
function uploadImage(url, base64) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: base64 }),
  }).then((res) => res.json());
}

export { uploadImage };
