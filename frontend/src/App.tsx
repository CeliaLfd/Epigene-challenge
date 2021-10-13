import styled from "@emotion/styled";
import { Header } from "./components/Header";
import { spacings } from "./style/theme";
import { remCalc } from "./utils/selectors";

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: "sidebar content";
  min-height: 100vh;
  grid-template-columns: ${remCalc(240)} minmax(0, 1fr);
`;

const AppContent = styled.main`
  padding: ${spacings.large};
  max-width: ${remCalc(1400)};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <AppContent>Content</AppContent>
    </AppWrapper>
  );
};

export default App;
