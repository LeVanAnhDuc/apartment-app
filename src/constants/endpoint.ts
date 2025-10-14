const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: {
      REQUEST_RESET: "/auth/forgot-password/request-reset",
      VERIFY_CODE: "/auth/forgot-password/verify-code",
      RESET_PASSWORD: "/auth/forgot-password/reset-password",
      RESEND_CODE: "/auth/forgot-password/resend-code"
    }
  }
};

export default END_POINTS;
