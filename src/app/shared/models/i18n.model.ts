export enum EI18nLanguageCodes {
  EN = "en",
  EL = "el"
}

export enum EI18nCountryCodes {
  US = "us",
  GR = "gr"
}

export enum EI18nLocales {
  EN_US = `${EI18nLanguageCodes.EN}_${EI18nCountryCodes.US}`,
  EL_GR = `${EI18nLanguageCodes.EL}_${EI18nCountryCodes.GR}`
}
