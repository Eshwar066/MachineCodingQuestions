import "./styles.css";
import GenericButton from "./GenericButton";

export default function Button() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Generic Button by Kaleidofin company</h2>

      <GenericButton className="action-button" text="action" />
      <GenericButton className="form-button" text="login" />
      <GenericButton className="edel-button" text="edel" />
      <li>
        <ul>what are components</ul>
        <ul>Image optimization, lazy loading, code splitting</ul>
        <ul>UI and Functional Components</ul>
        <ul>Closures uses which OOPs concept</ul>
      </li>
    </div>
  );
}
