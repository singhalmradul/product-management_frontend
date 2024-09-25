import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

type QRScannerProps = {
	onScan: (decodedText: string) => void;
};

const QRScanner = ({ onScan }: QRScannerProps) => {
	useEffect(() => {
		const qrScanner = new Html5QrcodeScanner(
			'qr-scanner',
			{
				fps: 30,
				qrbox: 250,
			},
			true
		);

		qrScanner.render(onScan, (error) => {
			console.error('QR scan error', error);
		});
	}, [onScan]);

	return (
		<div>
			<div id='qr-scanner'></div>
		</div>
	);
};

export default QRScanner;
