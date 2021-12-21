const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const degree = getMarsTemperature();
  return `Mars temperature is: ${degree} degree Celsius`
}
setTimeout(() => console.log(sendMarsTemperature()), messageDelay())
// imprime "Mars temperature is: 20 degree Celsius", por exemplo