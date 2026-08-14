@echo off
title Finance Career Bible - ACCA Reader Portal
echo ========================================================
echo   Finance Career Bible - ACCA Master Portal Launcher
echo ========================================================
echo.
echo Starting local web server at http://localhost:8000 ...
echo.

start http://localhost:8000

where python >nul 2>&1
if %errorlevel% equ 0 (
    python -m http.server 8000
) else (
    npx -y serve . -p 8000
)
pause
