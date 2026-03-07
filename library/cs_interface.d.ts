declare class CSInterface {
  evalScript(script: string, callback?: (result: string) => void): void;
  // Add other methods as needed
}

declare var themeManager: {
  init(): void;
};

