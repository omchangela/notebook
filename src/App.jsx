import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home/index.element";
import Groups from "./pages/Group/index.element";
import { NotesContextProvider } from "./store/notesContext";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "groups/:id", element: <Groups /> },
    ],
  },
]);

function App() {
  return (
    <NotesContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </NotesContextProvider>
  );
}

export default App;
