#!/bin/bash

# Script de build para Gabufront (Linux/macOS)
# Uso: ./build.sh [dev|prod]

MODE=${1:-dev}
STYLUS_INPUT="css/style.styl"
OUTPUT_DIR="dist"

echo "🚀 Iniciando build de Gabufront..."
echo "📦 Modo: $MODE"

# Crear directorio dist si no existe
mkdir -p $OUTPUT_DIR

if [ "$MODE" = "prod" ]; then
    echo "🔨 Compilando CSS (producción - minificado)..."
    stylus -c $STYLUS_INPUT -o $OUTPUT_DIR -u nib

    if [ $? -eq 0 ]; then
        echo "✅ Build de producción completado!"
        echo "📂 Archivo generado: $OUTPUT_DIR/style.css"
    else
        echo "❌ Error en la compilación"
        exit 1
    fi
elif [ "$MODE" = "watch" ]; then
    echo "👀 Modo watch activado - compilando cambios automáticamente..."
    stylus -w $STYLUS_INPUT -o $OUTPUT_DIR -u nib
else
    echo "🔨 Compilando CSS (desarrollo)..."
    stylus $STYLUS_INPUT -o $OUTPUT_DIR -u nib

    if [ $? -eq 0 ]; then
        echo "✅ Build completado!"
        echo "📂 Archivo generado: $OUTPUT_DIR/style.css"
    else
        echo "❌ Error en la compilación"
        exit 1
    fi
fi
