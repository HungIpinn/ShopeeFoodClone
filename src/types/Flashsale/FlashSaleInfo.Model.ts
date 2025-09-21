export interface IFlashSaleInfoDto {
  groupId: number;
  programId: number;
  groupName: string;
  keyWordTag: string;
  thumbImage: string;
  thumbImageDesktop: string;
  productIdList: string;
  displayOrder: number;
  orderBy: number;
  showColumnCount: number;
  keyProductId: number;
  displayLocation: number;
  createdDate: string; // ISO datetime
  siteId: number;
  showWebFromDate: string; // ISO datetime
  showWebToDate: string; // ISO datetime
  menuType: number;
  isNotShow: boolean;
  isIcon: boolean;
  parentId: number;
  cateCode: string;
  campaignType: number;
  publicationId: string;
  iconMenu: string;
  thumbImageDesk: string;
  thumbImageMobile: string;
  priorityProductIdList: string;
  keyRepresentImageDesk: string;
  keyRepresentImageMobile: string;
  link: string;
  publicationLongFromDate: string; // ISO datetime
  publicationLongToDate: string; // ISO datetime
  keyBackgroundColorIdDesk: string;
  keyBackgroundColorIdMobile: string;
  backgroundColor: string;
  iconMenuDesk: string;
  iconMenuMobile: string;
}

export interface IFlashSaleInfoReqs {
  programId: number;
}
