function ErrorMessage({ hasError = false , message = "", children = null }) {
    return hasError ? message : children;
}

export default ErrorMessage;