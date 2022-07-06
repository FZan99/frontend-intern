import create from "zustand";

interface GetBookState {
  filter: any;
  sort: any;
  filterUpdate: (filterData: any) => void;
  sortUpdate: (sortData: any) => void;
  resetAll: () => void;
}

const useGetBookStore = create<GetBookState>((set) => ({
  filter: undefined,
  sort: undefined,
  filterUpdate: (filterData): void => {
    set({ filter: filterData });
  },
  sortUpdate: (sortData): void => {
    set({ sort: sortData });
  },
  resetAll: (): void => {
    set({ filter: undefined, sort: undefined });
  },
}));

export default useGetBookStore;
