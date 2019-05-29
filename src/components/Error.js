import React from "react";

import ErrorMessage from "./ErrorMessage";

class Error extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log("Wystąpił następujący błąd:", error, info);
    }
    render() {
        const { message, children } = this.props;
        const { hasError } = this.state;
        return (
            <ErrorMessage hasError={hasError} message={message} children={children} />
        )
    }
}

export default Error;