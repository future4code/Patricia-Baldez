
import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { LotteriesContext } from "../contexts/LotteriesContext";
import { Loading } from "./Loading";
import { Result } from "./Result";
import { Sidebar } from "./Sidebar";

export function Main() {
  const { isLoading, handleLoterrySelection } = useContext(LotteriesContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      await handleLoterrySelection(Number(id));
    })();
  }, [handleLoterrySelection, id]);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <Sidebar />
          <Result />
        </Fragment>
      )}
    </div>
  );
}

