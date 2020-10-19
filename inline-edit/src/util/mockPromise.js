export const saveTextSuccess = (delay, value) => new Promise((resolve, reject) => {
  // 50:50 chance for resolve and reject
  const random_result = Math.random() >= 0.5 ? resolve : reject;
  setTimeout(random_result, delay, value);
});
