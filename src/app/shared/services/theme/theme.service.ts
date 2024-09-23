import { Injectable } from "@angular/core";

import { DEFAULT_THEME, EThemeType, THEME_LOCALSTORAGE_KEY } from "../../../infrastructure/ng-zorro-antd/ng-zorro-antd.config";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  currentTheme: EThemeType = (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as EThemeType) || DEFAULT_THEME;

  constructor() {}

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;

    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }

    return new Promise<Event>((resolve, reject) => {
      this._loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }

          this._removeUnusedTheme(this._reverseTheme(theme));

          this._persistThemeToLocalStorage(theme);

          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this._reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }

  private _reverseTheme(theme: string): EThemeType {
    return theme === EThemeType.dark ? EThemeType.default : EThemeType.dark;
  }

  private _removeUnusedTheme(theme: EThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private _loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private _persistThemeToLocalStorage(theme: EThemeType): void {
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
  }
}
