import create, { SetState, GetState } from 'zustand';

interface PageState {
  pages: number;
  next: () => void;
  previous: () => void;
}

const usePageStore = create<PageState>((set: SetState<PageState>, get: GetState<PageState>) => ({
    pages: 1,
    next: (): void =>  {
      const { pages } = get();
      set({ pages: pages + 1 });
    },
    previous: (): void =>  {
      const { pages } = get();
      set({ pages: pages - 1 });
    }
  
  }));

  export default usePageStore;