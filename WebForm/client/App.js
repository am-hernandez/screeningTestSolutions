import React, { useState } from "react";
import { useForm } from "./useForm";
import axios from "axios";

export default function App() {
  const [values, handleChange] = useForm({
    choice_A: "",
    choice_B: "",
    choice_C: "",
  });

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const [choice_A, choice_B, choice_C] = event.target.elements;

      const choices = [choice_A.value, choice_B.value, choice_C.value].map(
        (value) => value.toLowerCase()
      );

      if (!choices.includes("calculus")) {
        const error = new Error(
          "Calculus missing from choices. Calculus must be one of the choices."
        );
        throw error;
      } else {
        const { data } = await axios.post("/api/users", {
          choice_A: choices[0],
          choice_B: choices[1],
          choice_C: choices[2],
        });

        [choice_A, choice_B, choice_C].forEach((input) =>
          handleChange({ target: { name: input.name, value: "" } })
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <header>
        <h1>Web Form</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          Choice A:{" "}
          <input
            type="text"
            name="choice_A"
            value={values.choice_A}
            onChange={handleChange}
          />
          Choice B:{" "}
          <input
            type="text"
            name="choice_B"
            value={values.choice_B}
            onChange={handleChange}
          />
          Choice C:{" "}
          <input
            type="text"
            name="choice_C"
            value={values.choice_C}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
