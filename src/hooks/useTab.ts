import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { TabName, setTab } from 'store/slices/appSlice';

interface UseTab {
   tab: TabName;
   setCurrentTab: (tab: TabName) => void;
   toggleTab: () => void;
}

const useTab = (): UseTab => {
   const dispatch = useDispatch();

   const { tab } = useSelector((state: RootState) => state.app);

   const setCurrentTab = useCallback((tab: TabName) => {
      dispatch(setTab(tab));
   }, []);

   const toggleTab = useCallback(() => {
      setCurrentTab(tab);
   }, [tab, setCurrentTab]);

   return { tab, setCurrentTab, toggleTab };
};

export default useTab;
