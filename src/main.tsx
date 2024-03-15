import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Spinner } from "components/Spinner";
import { ProviderWrapper } from "utils/ProviderWrapper";
import { Router } from "router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderWrapper>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </ProviderWrapper>
  </React.StrictMode>,
);
