// Frontend Client Script - Uji Backend Web Service
// Mahasiswa: Zalwa Nadia (NIM: 24010110168)

document.addEventListener('DOMContentLoaded', () => {
    const apiInput = document.getElementById('apiEndpointInput');
    const btnTest = document.getElementById('btnTestApi');
    const btnPresetStatus = document.getElementById('btnPresetStatus');
    const btnPresetBagus = document.getElementById('btnPresetBagus');
    const jsonOutput = document.getElementById('jsonOutput');
    const responseBadge = document.getElementById('responseStatusBadge');
    const testAlert = document.getElementById('testAlert');
    const alertIcon = document.getElementById('alertIcon');
    const alertMessage = document.getElementById('alertMessage');
    const heroPulse = document.getElementById('heroPulse');
    const heroBadgeStatus = document.getElementById('heroBadgeStatus');
    const btnCopy = document.getElementById('btnCopyResponse');

    // Preset button handlers
    btnPresetStatus?.addEventListener('click', () => {
        apiInput.value = 'http://127.0.0.1:8000/api/status';
        testConnection();
    });

    btnPresetBagus?.addEventListener('click', () => {
        apiInput.value = 'http://127.0.0.1:8000/bagusimutsekali';
        testConnection();
    });

    btnTest?.addEventListener('click', () => {
        testConnection();
    });

    // Copy response button
    btnCopy?.addEventListener('click', () => {
        const textToCopy = jsonOutput.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            btnCopy.innerHTML = '<i class="bi bi-check2"></i>';
            setTimeout(() => {
                btnCopy.innerHTML = '<i class="bi bi-clipboard"></i>';
            }, 2000);
        });
    });

    async function testConnection() {
        const url = apiInput.value.trim();
        if (!url) {
            showAlert('warning', 'Silakan masukkan URL endpoint yang valid.');
            return;
        }

        // Set Loading State
        btnTest.disabled = true;
        btnTest.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Menguji...';
        responseBadge.className = 'badge bg-warning text-dark font-monospace';
        responseBadge.textContent = 'Menghubungkan...';
        jsonOutput.innerHTML = `<code>Mengirim GET request ke: ${url} ...</code>`;

        showAlert('info', `Mengirim request ke ${url} ...`);

        const startTime = performance.now();

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);

            const response = await fetch(url, {
                method: 'GET',
                signal: controller.signal,
                headers: {
                    'Accept': 'application/json, text/html, */*'
                }
            });

            clearTimeout(timeoutId);
            const duration = Math.round(performance.now() - startTime);

            const contentType = response.headers.get('content-type') || '';
            let responseBody = '';

            if (contentType.includes('application/json')) {
                const data = await response.json();
                responseBody = JSON.stringify(data, null, 2);
            } else {
                const text = await response.text();
                // If HTML, sanitize snippet
                responseBody = text.length > 500 ? text.substring(0, 500) + '\n\n... [Output HTML dipotong untuk kerapian]' : text;
            }

            if (response.ok) {
                // Success
                responseBadge.className = 'badge bg-success font-monospace';
                responseBadge.textContent = `${response.status} OK (${duration}ms)`;

                heroPulse.className = 'pulse-indicator online';
                heroBadgeStatus.className = 'badge bg-success';
                heroBadgeStatus.textContent = 'Online';

                showAlert('success', `Koneksi Berhasil! Respons diterima dalam ${duration}ms.`);
                jsonOutput.innerHTML = `<code>${escapeHtml(responseBody)}</code>`;
            } else {
                // HTTP Error
                responseBadge.className = 'badge bg-danger font-monospace';
                responseBadge.textContent = `${response.status} ${response.statusText} (${duration}ms)`;

                showAlert('warning', `Server merespons dengan kode status: ${response.status} ${response.statusText}`);
                jsonOutput.innerHTML = `<code>${escapeHtml(responseBody)}</code>`;
            }

        } catch (error) {
            // Network/Connection Error
            responseBadge.className = 'badge bg-danger font-monospace';
            responseBadge.textContent = 'Gagal Terhubung';

            heroPulse.className = 'pulse-indicator offline';
            heroBadgeStatus.className = 'badge bg-danger';
            heroBadgeStatus.textContent = 'Offline';

            showAlert('danger', 'Tidak dapat terhubung ke Backend. Pastikan Anda sudah menjalankan "php artisan serve" di folder Backend.');
            jsonOutput.innerHTML = `<code>// GAGAL TERHUBUNG KE BACKEND (${url})
// Error: ${error.name === 'AbortError' ? 'Koneksi Timeout (lebih dari 6 detik)' : error.message}

// Solusi:
// 1. Buka terminal di folder Backend:
//    cd Backend
// 2. Jalankan perintah:
//    php artisan serve
// 3. Pastikan backend aktif di http://127.0.0.1:8000
// 4. Klik tombol "Kirim Request" kembali.</code>`;
        } finally {
            btnTest.disabled = false;
            btnTest.innerHTML = '<i class="bi bi-send-fill"></i> <span>Kirim Request</span>';
        }
    }

    function showAlert(type, message) {
        testAlert.className = `alert alert-${type} d-flex align-items-center gap-2 rounded-3 py-2 px-3`;
        if (type === 'success') {
            alertIcon.className = 'bi bi-check-circle-fill fs-5 text-success';
        } else if (type === 'danger') {
            alertIcon.className = 'bi bi-exclamation-triangle-fill fs-5 text-danger';
        } else if (type === 'warning') {
            alertIcon.className = 'bi bi-exclamation-circle-fill fs-5 text-warning';
        } else {
            alertIcon.className = 'bi bi-info-circle-fill fs-5 text-info';
        }
        alertMessage.textContent = message;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
});
