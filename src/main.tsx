import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Spinner } from "components/Spinner";
import { Router } from "router";
import { ProviderWrapper } from "utils/ProviderWrapper";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderWrapper>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </ProviderWrapper>
  </React.StrictMode>,
);
