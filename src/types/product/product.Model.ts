// Kiểu cho filter
export interface Filter {
  filterId: string;
  filterTypeId: number;
  sortName: string;
}

// Kiểu cho payload chính
export interface GetproductLdpReqs {
  pageIndex: number;
  pageSize: number;
  provinceId: number;
  filters: Filter[];
}

// Thông tin giá của sản phẩm
export interface ProductPrice {
  price: number;
  sysPrice: number;
  discountPercent: number;
  stock: number;
  isCanBuy: boolean;
  label: string;
  saleProgramId: number;
  inventoryStatusId: number;
  scenario: number;
  startDate: string | null;
  endDate: string | null;
  promotionId: number;
  orderTypeId: number;
  applyHourRange: string | null;
  applyDate: string | null;
  warningText: string | null;
  roundlevelvalue: number;
  onlineStatusId: number;
  productLabel: string | null;
}

// Thông tin flash sale
export interface FlashSaleInfo {
  totalStock: number;
  currentStock: number;
}

// Điểm bán hàng chính
export interface KeySellingPoint {
  label: string;
}

// Model chính của sản phẩm
export interface ProductVM {
  id: string;
  sellerId: number;
  avatar: string;
  name: string;
  productPrices: ProductPrice[];
  promotionList: any; // có thể thay bằng kiểu cụ thể nếu có dữ liệu chi tiết
  productCode: string;
  url: string;
  rate: number;
  totalRate: number;
  totalSold: string;
  flashSaleInfo: FlashSaleInfo;
  lstKeySellingPoint: KeySellingPoint[];
  variantName: string;
  gift: any; // có thể thay bằng kiểu cụ thể nếu có
  giftFS: any; // có thể thay bằng kiểu cụ thể nếu có
  lstFilter: any; // có thể thay bằng kiểu cụ thể nếu có
  productLabel: any; // có thể thay bằng kiểu cụ thể nếu có
  packageValue: any; // có thể thay bằng kiểu cụ thể nếu có
  medicineType: number;
}

export interface ProductLDPVM {
  products: ProductVM[];
  total: number;
}

export interface LDPVM {
  product: ProductLDPVM;
}
