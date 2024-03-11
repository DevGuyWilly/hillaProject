package com.example.application.utils;

public interface ExceptionSupplier<T, E extends Exception> {
    T get() throws E;
}
