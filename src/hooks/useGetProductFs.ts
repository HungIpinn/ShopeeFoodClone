import { useAppDispatch } from '@/Redux/Hooks';
import { getFsInfo } from '@/Redux/Slices/FlashSaleInfo/flashSaleInfoThunk';
import { getProductLDP } from '@/Redux/Slices/Product/productThunk';
import { Filter } from '@/types/product/product.model';

const useGetProductFS = async () => {
  const dispatch = useAppDispatch();
  try {
    const fsInfo = await dispatch(getFsInfo({ programId: 664 })).unwrap();
    if (fsInfo?.length) {
      const now = new Date();
      const selectInfo = fsInfo.find(
        (x) =>
          now >= new Date(x.publicationLongFromDate) &&
          now <= new Date(x.publicationLongToDate),
      );

      if (selectInfo?.publicationId) {
        const filters: Filter[] = [
          {
            filterId: selectInfo.publicationId,
            filterTypeId: 9,
            sortName: '',
          },
        ];
        dispatch(
          getProductLDP({
            pageIndex: 0,
            pageSize: 10,
            provinceId: 1027,
            filters,
          }),
        );
      }
    }
  } catch (err) {
    console.error('Failed to load fsInfo:', err);
  }
};
