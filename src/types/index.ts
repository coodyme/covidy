export type Data = {
  infected: number,
  tested: null | string | number,
  recovered: null | string | number,
  deceased: null | string | number,
  country: string,
  moreData: null | string,
  historyData: null | string,
  sourceUrl: null | string,
  lastUpdatedApify: null | string
}

export type MoreData = {
  country: string,
  infected: null | string | number,
  deceased: null | string | number,
  recovered: null | string | number,
  activeCases: null | string | number,
  tested: null | string | number,
  critical: null | string | number,
  sourceUrl: string,
  lastUpdatedAtApify: string,
  readMe: string,
}

export type HistoryData = {

}