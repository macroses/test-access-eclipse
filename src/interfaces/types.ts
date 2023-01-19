export interface Collection {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Prev: number
}

export interface MainStore {
  currencyData?: null | MainData,
  currencyCollection: null | Array<Collection>,
  currencyLeftValue: null | Collection,
  currencyRightValue: null | Collection,
  currencyNumber: number,
  calculatedResult: number
}

export interface MainStoreActions {
  fetchCurrency: () => Promise<void>;
  revertValues: () => void;
}

export interface MainStoreGetters {
  calculateCurrency: (state: MainStore) => void;
}

export interface MainData {
  date: string,
  previousDate: string,
  "PreviousURL": string,
  "Timestamp": string,
}