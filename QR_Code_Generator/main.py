import qrcode

qr_data = [
    {"amount_tier": "5,000 - 15,000", "points": "2"},
    {"amount_tier": "16,000 - 30,000", "points": "4"},
    {"amount_tier": "31,000 - 50,000", "points": "6"}
]

for data in qr_data:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(f"Amount Tier: {data['amount_tier']}\nPoints: {data['points']}")
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"qr_code_{data['points']}.png")