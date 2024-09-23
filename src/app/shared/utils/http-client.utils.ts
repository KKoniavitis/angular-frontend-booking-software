export const resolveError = (error: any): string => {
  if (!error) {
    return "";
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object") {
    if (error?.message) {
      return error.message;
    }

    if (error?.statusText) {
      return error.statusText;
    }

    return "";
  }

  return "";
};
