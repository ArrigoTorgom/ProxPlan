@echo off
echo ============================================
echo  Deploying ProXPlan to GitHub Pages
echo ============================================
echo.

REM Copy latest build from working folder
copy /Y "C:\Users\AFadda\Claude\Projects\Productivity Tools\proxplan-deploy\index.html" "%~dp0..\..\..\..\OneDrive - Proxa Pty Ltd\Documents\GitHub\ProxPlan\index.html"
copy /Y "C:\Users\AFadda\Claude\Projects\Productivity Tools\proxplan-deploy\CHANGELOG.md" "%~dp0..\..\..\..\OneDrive - Proxa Pty Ltd\Documents\GitHub\ProxPlan\CHANGELOG.md"

REM Push to GitHub
cd /d "C:\Users\AFadda\OneDrive - Proxa Pty Ltd\Documents\GitHub\ProxPlan"
git add index.html CHANGELOG.md
git commit -m "Deploy ProXPlan update"
git push origin main

echo.
echo ============================================
echo  Done! Visit https://arrigotorgom.github.io/ProxPlan/
echo ============================================
pause
