import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key: string, defValue?: Function | any) => {
    return useStorageInternal(key, defValue);
}

export const useSessionStorage = (key: string, defValue?: Function | any) => {
    return useStorageInternal(key, defValue, window.sessionStorage);
}

const useStorageInternal = (key: string, defValue?: Function | any, storage: Storage = window.localStorage) => {
    const [value, setValue] = useState(() => {
        const jsonValue = storage.getItem(key);

        if (jsonValue != null) {
            return JSON.parse(jsonValue);
        }

        return (defValue instanceof Function) ? defValue() : defValue;
    });

    useEffect(() => {
        if (value === undefined) {
            return storage.removeItem(key);
        }

        storage.setItem(key, JSON.stringify(value));
    }, [key, storage, value]);

    const removeValue = useCallback(
        () => setValue(undefined),
        []
    );

    return { value, setValue, removeValue };
}

