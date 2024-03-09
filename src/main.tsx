import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Spinner } from "components/Spinner";
import { router } from "router";
import { ProviderWrapper } from "utils/ProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderWrapper>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ProviderWrapper>
  </React.StrictMode>,
);
