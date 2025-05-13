module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  // Contoh payload
  const payload = req.body;

  // Log ke console (cek di dashboard vercel)
  console.log('Webhook diterima:', payload);

  // Contoh: Jika pembayaran sukses
  if (payload.transaction_status === 'settlement' || payload.status === 'PAID') {
    // Di sini bisa tambah kode untuk kirim ke alat/ESP32/MQTT
  }

  res.status(200).send('OK');
};
