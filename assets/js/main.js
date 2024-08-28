/* Fecha: 27-08-2024
   Challenge Encriptador de Texto
   Author: Diego Carmona
   Aquí se encuentran todas las funciones necesarias para llevar a cabo la encriptación y la desincriptación */

document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtnEncrypt = document.getElementById('copyBtnEncrypt');
    const copyBtnDecrypt = document.getElementById('copyBtnDecrypt');
    const imagen = document.querySelector('.seccion2 .imagen');
    const mensaje = document.querySelector('.seccion2 .mensaje');

    // Función para encriptar el texto
    function encryptText(text) {
        return text.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        return text.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Event listener para el botón de Encriptar
    encryptBtn.addEventListener('click', function () {
        const input = inputText.value.trim().toLowerCase(); // Obtener texto y limpiar
        const encryptedText = encryptText(input); // Encriptar el texto

        // Mostrar resultado en la segunda caja de texto
        outputText.value = encryptedText;

        // Mostrar botón de copiar al encriptar y ocultar al desencriptar
        copyBtnEncrypt.style.display = 'inline-block';
        copyBtnDecrypt.style.display = 'none';

        // Ocultar mensaje y mostrar textarea
        mensaje.style.display = 'none';
        outputText.style.display = 'block';

        // Ocultar imagen
        imagen.style.display = 'none';
    });

    // Event listener para el botón de Desencriptar
    decryptBtn.addEventListener('click', function () {
        const input = inputText.value.trim(); // Obtener texto encriptado
        const decryptedText = decryptText(input); // Desencriptar el texto

        // Mostrar resultado en la segunda caja de texto
        outputText.value = decryptedText;

        // Mostrar botón de copiar al desencriptar y ocultar al encriptar
        copyBtnDecrypt.style.display = 'inline-block';
        copyBtnEncrypt.style.display = 'none';

        // Ocultar mensaje y mostrar textarea
        mensaje.style.display = 'none';
        outputText.style.display = 'block';

        // Ocultar imagen
        imagen.style.display = 'none';
    });

    // Event listener para el botón de Copiar al encriptar
    copyBtnEncrypt.addEventListener('click', function () {
        outputText.select(); 
        document.execCommand('copy'); 
        alert('Texto encriptado copiado al portapapeles');
    });

    // Event listener para el botón de Copiar al desencriptar
    copyBtnDecrypt.addEventListener('click', function () {
        outputText.select(); 
        document.execCommand('copy'); 
        alert('Texto desencriptado copiado al portapapeles');
    });
});
