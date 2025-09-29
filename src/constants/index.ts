import ROUTES from "./routes";
import FIELD_NAMES from "./fieldNames";

const CONSTANTS = {
  ROUTES,
  FIELD_NAMES,
  REGEX_EMAIL:
    /^[a-zA-Z0-9](?:[a-zA-Z0-9]|(?<![.])[.](?![.]))*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};

export default CONSTANTS;
