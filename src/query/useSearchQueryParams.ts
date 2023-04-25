import { create } from "zustand";

interface UseSearchQueryParamsState {
  params: Record<string, string>;
  setParam: (key: string, value: string) => void;
}

export const useSearchQueryParams = create<UseSearchQueryParamsState>(
  (set) => ({
    params: {},
    setParam: (key, value) => set({ params: { [key]: value } }),
  })
);
