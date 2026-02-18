export function getData() {
  return JSON.parse(localStorage.getItem("grocery")) || [];
}

export function setData(data) {
  localStorage.setItem("grocery", JSON.stringify(data));
}
