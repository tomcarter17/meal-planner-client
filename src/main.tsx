import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Spinner } from "components/Spinner";
import { Router } from "router";
import { ProviderWrapper } from "utils/ProviderWrapper";
import { enableMocking } from "utils/test/browser";

enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <ProviderWrapper>
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </ProviderWrapper>
      </React.StrictMode>,
    );
  })
  .catch(() => {
    console.log("Failed to start mocking");
  });
