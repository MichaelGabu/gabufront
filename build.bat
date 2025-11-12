@echo off
REM Script de build para Gabufront (Windows)
REM Uso: build.bat [dev|prod|watch]

SET MODE=%1
IF "%MODE%"=="" SET MODE=dev

SET STYLUS_INPUT=css\style.styl
SET OUTPUT_DIR=dist

echo 🚀 Iniciando build de Gabufront...
echo 📦 Modo: %MODE%

REM Crear directorio dist si no existe
IF NOT EXIST %OUTPUT_DIR% mkdir %OUTPUT_DIR%

IF "%MODE%"=="prod" (
    echo 🔨 Compilando CSS ^(producción - minificado^)...
    call stylus -c %STYLUS_INPUT% -o %OUTPUT_DIR% -u nib

    IF %ERRORLEVEL% EQU 0 (
        echo ✅ Build de producción completado!
        echo 📂 Archivo generado: %OUTPUT_DIR%\style.css
    ) ELSE (
        echo ❌ Error en la compilación
        exit /b 1
    )
) ELSE IF "%MODE%"=="watch" (
    echo 👀 Modo watch activado - compilando cambios automáticamente...
    call stylus -w %STYLUS_INPUT% -o %OUTPUT_DIR% -u nib
) ELSE (
    echo 🔨 Compilando CSS ^(desarrollo^)...
    call stylus %STYLUS_INPUT% -o %OUTPUT_DIR% -u nib

    IF %ERRORLEVEL% EQU 0 (
        echo ✅ Build completado!
        echo 📂 Archivo generado: %OUTPUT_DIR%\style.css
    ) ELSE (
        echo ❌ Error en la compilación
        exit /b 1
    )
)
