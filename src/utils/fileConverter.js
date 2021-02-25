export function getBase64(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let baseURL = reader.result;
      resolve(baseURL);
    };
  });
}
