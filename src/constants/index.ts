import ROUTES from "./routes";
import FIELD_NAMES from "./fieldNames";
import END_POINTS from "./endpoint";
import STORAGE_KEYS from "./storageKeys";
import FORGOT_PASSWORD from "./forgotPassword";

const CONSTANTS = {
  ROUTES,
  FIELD_NAMES,
  REGEX_EMAIL:
    /^[a-zA-Z0-9](?:[a-zA-Z0-9]|(?<![.])[.](?![.]))*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  END_POINTS,
  STORAGE_KEYS,
  FORGOT_PASSWORD
};

export default CONSTANTS;
