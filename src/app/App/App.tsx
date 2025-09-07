import "@mantine/core/styles.css";

import { useEffect } from "react";
import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple,
  AppShell,
} from "@mantine/core";

import {
  useTypedDispatch,
  useTypedSelector,
} from "../../modules/redux/hooks/redux";

import { fetchVegetables } from "../../modules/redux/reducers/VegetablesThunks";

import { Header, VegetablesList } from "../../pages";
import { CatalogTitle, Loader } from "../../modules/UI";

import "./App.css";

const myColor: MantineColorsTuple = [
  "#eafbee",
  "#dbf2e0",
  "#b9e1c2",
  "#94d0a1",
  "#74c186",
  "#60b874",
  "#54b46a",
  "#449e59",
  "#398d4d",
  "#2a7a3f",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export const App = () => {
  const dispatch = useTypedDispatch();
  const selectVegetables = useTypedSelector(
    (state) => state.vegetableReducer.vegetables
  );

  useEffect(() => {
    dispatch(fetchVegetables());
  }, [dispatch]);

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header className="header">
          <Header />
        </AppShell.Header>
        <AppShell.Main className="main">
          <CatalogTitle title="Catalog" />
          {selectVegetables.length ? (
            <VegetablesList vegetables={selectVegetables} />
          ) : (
            <Loader />
          )}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
