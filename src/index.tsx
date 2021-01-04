import { h, render } from "preact";
import { setup, styled } from "goober";

setup(h);

const App = () => {
  return <Title>hello world!!</Title>;
};

const Title = styled("h1")`
  color: red;
`;

render(<App></App>, document.body);
