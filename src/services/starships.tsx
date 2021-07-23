import { testStarships } from "../testStarships";

export function getStarships() {
    return new Promise((resolve) => {
        resolve(testStarships.results);
    })
  }