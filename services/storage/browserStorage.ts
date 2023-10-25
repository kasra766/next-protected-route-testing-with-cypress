class BrowserStorage<T> {
  constructor(
    readonly identifier: string,
    readonly storage: "localStorage" | "sessionStorage" = "sessionStorage",
  ) {}

  set(value: Partial<T> | null = null) {
    window[this.storage].setItem(this.identifier, JSON.stringify(value));
  }

  get(): T {
    return JSON.parse(window[this.storage].getItem(this.identifier) || "{}");
  }
}

export default BrowserStorage;
