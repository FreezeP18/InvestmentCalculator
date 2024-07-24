import logoImg from "../assets/investment-calculator-logo.png/";
export default function Headder() {
  return (
    <header id="header">
      <img src={logoImg} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
