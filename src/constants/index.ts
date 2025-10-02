import ROUTES from "./routes";
import FIELD_NAMES from "./fieldNames";

const CONSTANTS = {
  ROUTES,
  FIELD_NAMES,
  REGEX_EMAIL:
    /^[a-zA-Z0-9](?:[a-zA-Z0-9]|(?<![.])[.](?![.]))*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  REGEX_PHONE: /^[0-9]{10}$/
};

export default CONSTANTS;
