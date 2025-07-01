"use client";
import { Component, ReactNode } from "react";

export default class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // Optionally log error
    if (typeof window !== 'undefined') {
      // You could send error to a logging service here
      // console.error(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-600 bg-white min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-4">A client-side error occurred. Please try refreshing the page or navigating to another section.</p>
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
} 