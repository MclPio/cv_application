import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* 
section-personal-info: name, email, phone
section-educational-experience: school name, title of study, date of study
section-practical-experience: company name, position title, main responsibilities of jobs, start date, end date
*/
