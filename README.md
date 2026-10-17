# Salvation Library for Windows

Wraps the Salvation Library page in a Windows app (Electron).

## Build without a Windows PC (GitHub)
1. Create a GitHub repository and upload everything in this folder, including `.github/workflows/build-windows.yml`.
   If your phone hides the `.github` folder, use Add file > Create new file, type `.github/workflows/build-windows.yml` as the name, and paste the file contents.
2. Open the Actions tab, choose "Build Windows app", then Run workflow.
3. When it finishes (a few minutes), open the run and download `SalvationLibrary-Windows` under Artifacts.
   It holds the installer (`Salvation Library Setup 1.0.0.exe`) and a no-install version (`Salvation Library 1.0.0.exe`).

## Build on a Windows PC
1. Install Node.js (nodejs.org).
2. In this folder run `npm install`, then `npm run dist`.
3. The .exe files appear in the `dist` folder. To test first, run `npm start`.

## Notes
- The app is not code-signed, so Windows may show a SmartScreen warning. Choose More info, then Run anyway.
- To update the app, replace `index.html` with the new page and build again.
